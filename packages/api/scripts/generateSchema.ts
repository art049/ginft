import { emitSchemaDefinitionFile } from "type-graphql";
import { watchTree } from "watch";

const generate = async () => {
  const { getSchema } = require("../src/resolvers");
  const schema = await getSchema();
  await emitSchemaDefinitionFile("./generated/schema.gql", schema);
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const updateSchema = async () => {
  console.log("Updating graphql schema...");
  try {
    await generate();
  } catch (e) {
    console.warn("Unable to generate schema, gonna try again...");
    await delay(5000);
    await updateSchema();
  }
};

const main = async () => {
  if (process.argv.includes("--watch")) {
    console.log("Start watching for changes...");
    watchTree("./src/resolvers", async (event, fn) => {
      await updateSchema();
      console.log("Schema updated!");
    });
  } else {
    await generate();
  }
};
main();
