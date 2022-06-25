import { User } from "@generated/type-graphql";
import { KYCSessionStatus } from "@prisma/client";
import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import type { Context } from "..";

@Resolver((of) => User)
export class IdentityVerifiedResolver {
  @FieldResolver((type) => Boolean)
  async identityVerified(@Root() user: User, @Ctx() { prisma }: Context) {
    const data = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        kycSession: {
          select: { status: true },
        },
      },
    });
    return data?.kycSession?.status === KYCSessionStatus.APPROVED;
  }
}
