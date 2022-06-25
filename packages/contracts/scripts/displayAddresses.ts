import { getNamedAccounts } from "hardhat";

async function main() {
  const namedAccounts = await getNamedAccounts();
  console.log(namedAccounts);
}
main().catch((error) => {
  console.error(error);
});
