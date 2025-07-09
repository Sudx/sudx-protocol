// scripts/deploy_mock_usdc.ts
import { ethers } from "hardhat";
import * as fs from "fs";

async function main() {
  console.log("Deploying MockUSDC...");

  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const tokenFactory = await ethers.getContractFactory("MockUSDC");
  const mockUsdc = await tokenFactory.deploy();

  await mockUsdc.waitForDeployment();

  const address = await mockUsdc.getAddress();
  console.log(`MockUSDC deployed to: ${address}`);

  // Save the address for other scripts
  try {
    const addresses = JSON.parse(fs.readFileSync("uniswap_addresses.json", "utf8"));
    addresses.mock_usdc = address;
    fs.writeFileSync("uniswap_addresses.json", JSON.stringify(addresses, null, 2));
    console.log("MockUSDC address saved to uniswap_addresses.json");
  } catch (error) {
    console.error("Could not save address to uniswap_addresses.json. Please add it manually.", error);
    console.log("MockUSDC Address:", address);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
