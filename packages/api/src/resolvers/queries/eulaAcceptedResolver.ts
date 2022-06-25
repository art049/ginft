import { User } from "@generated/type-graphql";
import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import type { Context } from "..";

@Resolver((of) => User)
export class EULAAcceptedResolver {
  @FieldResolver((type) => Boolean)
  async eulaAccepted(@Root() user: User, @Ctx() { prisma }: Context) {
    const data = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        eula: {
          select: { signature: true },
        },
      },
    });
    return !!data?.eula?.signature;
  }
}
