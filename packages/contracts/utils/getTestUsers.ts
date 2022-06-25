import { ethers, getNamedAccounts, getUnnamedAccounts } from "hardhat";

export const getTestUsers = async () => {
  const {
    deployer,
    venturePartner,
    legalPartner,
    user,
    kycOwner,
    userKYCPassed,
  } = await getNamedAccounts();
  const deployerSigner = await ethers.getSigner(deployer);
  const venturePartnerSigner = await ethers.getSigner(venturePartner);
  const legalPartnerSigner = await ethers.getSigner(legalPartner);
  const userSigner = await ethers.getSigner(user);
  const kycOwnerSigner = await ethers.getSigner(kycOwner);
  const userKYCPassedSigner = await ethers.getSigner(userKYCPassed);

  const users = await getUnnamedAccounts();
  const userSigners = await Promise.all(users.map(ethers.getSigner));

  return {
    // Addresses
    deployer,
    user,
    venturePartner,
    legalPartner,
    kycOwner,
    userKYCPassed,
    users,
    // Signers
    deployerSigner,
    userSigner,
    venturePartnerSigner,
    legalPartnerSigner,
    kycOwnerSigner,
    userKYCPassedSigner,
    userSigners,
  };
};
