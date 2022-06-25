import { User } from "@generated/type-graphql";
import { KYCSessionStatus } from "@prisma/client";
import { ApolloError } from "apollo-server-micro";
import { verifyMessage } from "ethers/lib/utils";
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

export const SYNAPS_PROVIDER_NAME = "synaps";

@ArgsType()
class AcceptEULAInput {
  @Field()
  signature!: string;
}

@Resolver()
export class AcceptEULAResolver {
  @Authorized()
  @Mutation(() => User)
  async acceptEULA(
    @Args() input: AcceptEULAInput,
    @Ctx() { prisma, web3token }: Context
  ) {
    if (web3token === undefined) {
      throw new ApolloError("Web3Token not provided", INVALID_WEB3TOKEN);
    }
    const user = await prisma.user.findUnique({
      where: { walletAddress: web3token.signerAddress },
      include: { eula: true, kycSession: true },
    });
    if (user?.kycSession?.status !== KYCSessionStatus.APPROVED) {
      throw new ApolloError("KYC is not validated yet");
    }
    if (!user?.eula) {
      throw new ApolloError("EULA does not exist");
    }
    if (user.eula.signature) {
      throw new ApolloError("EULA already signed");
    }
    const recoveredAddress = verifyMessage(user.eula.content, input.signature);
    if (recoveredAddress !== web3token.signerAddress) {
      throw new ApolloError("Invalid signature address");
    }

    return await prisma.user.update({
      where: { id: user.id },
      data: {
        eula: {
          update: {
            signature: input.signature,
          },
        },
      },
    });
  }
}
