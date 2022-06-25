import { User } from "@generated/type-graphql";
import { Authorized, Ctx, Query, Resolver } from "type-graphql";
import type { Context } from "../";

@Resolver()
export class UserResolver {
  @Authorized()
  @Query(() => User, { nullable: true })
  async user(@Ctx() { prisma, web3token }: Context) {
    if (!web3token) return null;
    return await prisma.user.findUnique({
      where: { walletAddress: web3token.signerAddress },
    });
  }
}
