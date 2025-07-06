import { ethers } from "hardhat";

async function main() {
  console.log("Deploying SUDXToken contract...");

  const tokenFactory = await ethers.getContractFactory("SUDXToken");
  const sudxToken = await tokenFactory.deploy();

  await sudxToken.waitForDeployment();

  const address = await sudxToken.getAddress();
  console.log(`SUDXToken deployed to: ${address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
