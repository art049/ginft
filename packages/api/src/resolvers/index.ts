import "reflect-metadata"; // organize-imports-ignore
import {
  FindManyVentureMetadataResolver,
  FindUniqueVentureMetadataResolver,
  UserRelationsResolver,
  VentureMetadataRelationsResolver,
} from "@generated/type-graphql";
import { PrismaClient } from "@prisma/client";
import { AuthChecker, buildSchema, NonEmptyArray } from "type-graphql";
import { SignupResolver } from "./mutations/signup";
import { IdentityVerifiedResolver } from "./queries/identityVerifiedResolver";
import { NextApiRequest, NextApiResponse } from "next";
import {
  decodeWeb3Token,
  verifyWeb3Token,
  Web3Token,
} from "@demoslabs/web3token";
import { UserResolver } from "./queries/user";
import { ErrorInterceptor, INVALID_WEB3TOKEN } from "./errors";
import { ApolloError } from "apollo-server-micro";
import { EULAAcceptedResolver } from "./queries/eulaAcceptedResolver";
import { AcceptEULAResolver } from "./mutations/acceptEULA";

const resolvers: NonEmptyArray<Function> = [
  SignupResolver,
  UserRelationsResolver,
  UserResolver,
  IdentityVerifiedResolver,
  AcceptEULAResolver,
  EULAAcceptedResolver,
  FindManyVentureMetadataResolver,
  FindUniqueVentureMetadataResolver,
  VentureMetadataRelationsResolver,
];

const authChecker: AuthChecker<Context> = ({ context }, roles): boolean => {
  return context.web3token !== undefined;
};

export const getSchema = async () => {
  return await buildSchema({
    resolvers: resolvers,
    validate: true,
    globalMiddlewares: [ErrorInterceptor],
    authChecker,
    authMode: "error",
  });
};

interface ContextParams {
  req: NextApiRequest;
  res: NextApiResponse;
}

export interface Context {
  prisma: PrismaClient;
  web3token?: Web3Token;
}

const prisma = new PrismaClient();
export const getContext: (params: ContextParams) => Context = ({ req }) => {
  const authorization = req.headers?.authorization;
  if (authorization === undefined) return { prisma };
  try {
    const web3token = decodeWeb3Token(authorization);
    verifyWeb3Token(web3token);
    return { prisma, web3token };
  } catch (e) {
    throw new ApolloError("Invalid Web3Token", INVALID_WEB3TOKEN);
  }
};
