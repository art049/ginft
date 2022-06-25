import { ApolloServer } from "apollo-server-micro";
import cors from "micro-cors";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { RequestHandler } from "next/dist/server/base-server";
import { getContext, getSchema } from "../../resolvers";

let apolloServerHandler: NextApiHandler;
async function getApolloServerHandler() {
  if (!apolloServerHandler) {
    const schema = await getSchema();
    const server = new ApolloServer({ schema, context: getContext });
    await server.start();
    apolloServerHandler = server.createHandler({
      path: "/api/graphql",
    });
  }
  return apolloServerHandler;
}
export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServerHandler = await getApolloServerHandler();
  if (req.method === "OPTIONS") {
    res.end();
    return;
  }
  return apolloServerHandler(req, res);
};
export default cors()(handler as RequestHandler);
