import { ContractTransaction } from "ethers";

const executeTx = async (tx: Promise<ContractTransaction>) => {
  const txResult = await tx;
  const receipt = await txResult.wait();
  return receipt;
};
export default executeTx;
