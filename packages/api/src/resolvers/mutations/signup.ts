import { User } from "@generated/type-graphql";
import { KYCSessionStatus } from "@prisma/client";
import { ApolloError, UserInputError } from "apollo-server-micro";
import { IsEmail, MaxLength } from "class-validator";
import veriffClient, {
  CreateVeriffSessionResponse,
  VERIFF_PROVIDER_NAME,
} from "src/utils/veriffClient";
import {
  Args,
  ArgsType,
  Authorized,
  Ctx,
  Field,
  Mutation,
  Resolver,
} from "type-graphql";
import type { Context } from "../";
import { INVALID_WEB3TOKEN } from "../errors";
import { IsWalletAddress } from "../validators/isWalletAddress";

const EULA_CONTENT = `Among the Services, this site present information regarding potential investments in limited liability company membership interests (Interests) of various series of Venture Tokens (each, a Series). These Ventures Interests, which are securities under French and European securities laws, will be represented by cryptographic digital tokens (VentureTokens), which are a new series of Ethereum blockchain-based smart contract digital tokens meeting the ERC-20 standard as modified to meet transfer restriction requirements under applicable U.S. securities laws.

By participating in a Venture Token Series offering through the Sites you agree and understand that each Venture Token Series offering has its own terms, rules, and risks and it is your responsibility to carefully review all terms, rules, risk factors, and Series offering documents and decide on your own if you agree to them.

Demos Token will allow you the opportunity to designate investment opportunities in which you would like to participate. However, your decision to participate in a Series offering of Venture Tokens does not mean that you will be permitted to participate in such offering. Our decisions to permit your participation are subject to, among other things, demonstration to our satisfaction that you meet legal requirements for participation, consent of relevant third parties, execution of definitive documentation, and our discretion. We make no representation or warranty that the potential transaction you have identified will take place, or that if it takes place that you will be allowed to participate. If you are offered the opportunity to participate in a transaction, you will be required to sign additional documentation. Demos Ventures management decisions are final in all matters relating to the Sites, Services, investments, and other activities related to the Sites.

The securities associated with any Series offering of Venture Tokens in which you participate will be governed by the terms and conditions set forth in the applicable investment documents related to the specific Series offering provided to you. You may need to complete several steps to purchase Demos in a specific Series offering including, but not limited to, (i) completing Demos’s user registration process, which includes you providing identification and qualification information to Demos Ventures, (ii) entering into Series offering agreements with the specific Series, (iii) funding one or more investments in fiat currency or a specified cryptocurrency, (iv) confirming an intention to move forward with participation in the Series offering at the closing, if required by the Series; (v) creating a digital asset wallet with a third party, and (vii) providing other information to Demos Ventures or the Series Manager or taking other action as requested throughout the Series offering process.`;
@ArgsType()
class SignupInput {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @IsWalletAddress()
  walletAddress!: string;

  @Field()
  @MaxLength(20)
  referralCode!: string;
}

@Resolver()
export class SignupResolver {
  @Authorized()
  @Mutation(() => User)
  async signup(
    @Args() input: SignupInput,
    @Ctx() { prisma, web3token }: Context
  ) {
    if (
      web3token === undefined ||
      web3token.signerAddress !== input.walletAddress
    ) {
      throw new ApolloError("Wallet address mismatch", INVALID_WEB3TOKEN);
    }
    const referralCode = await prisma.referralCode.findUnique({
      where: { code: input.referralCode },
    });
    if (!referralCode)
      throw new UserInputError("Invalid referral code", {
        field: "referralCode",
      });
    if (
      await prisma.user.findUnique({
        where: { email: input.email },
      })
    )
      throw new UserInputError("Email already registered", { field: "email" });
    if (
      await prisma.user.findUnique({
        where: { walletAddress: input.walletAddress },
      })
    )
      throw new UserInputError("Wallet address already registered", {
        field: "walletAddress",
      });

    const response = await veriffClient.post<CreateVeriffSessionResponse>(
      "/v1/sessions",
      {
        verification: {
          timestamp: new Date().toISOString(),
          vendorData: input.walletAddress,
        },
      }
    );
    if (response.status !== 201 || response.data.status !== "success")
      throw Error("Unable to create a KYC Session");
    const url = response.data.verification.url;
    return await prisma.user.create({
      data: {
        email: input.email,
        walletAddress: input.walletAddress,
        kycSession: {
          create: {
            provider: VERIFF_PROVIDER_NAME,
            providerId: url,
            status: KYCSessionStatus.INITIATED,
          },
        },
        eula: {
          create: {
            content: EULA_CONTENT,
          },
        },
      },
      include: {
        kycSession: true,
      },
    });
  }
}
