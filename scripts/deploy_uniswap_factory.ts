// scripts/deploy_uniswap_factory.ts
import { ethers } from "hardhat";
import * as fs from "fs";
import UniswapV2Factory from "@uniswap/v2-core/build/UniswapV2Factory.json";

async function main() {
  console.log("Deploying UniswapV2Factory...");

  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const factoryFactory = new ethers.ContractFactory(UniswapV2Factory.abi, UniswapV2Factory.bytecode, deployer);
  const factory = await factoryFactory.deploy(deployer.address); // Fee setter
  
  await factory.waitForDeployment();

  const factoryAddress = await factory.getAddress();
  console.log("UniswapV2Factory deployed to:", factoryAddress);

  // Save the address for the next script
  const addresses = {
    factory: factoryAddress,
  };

  fs.writeFileSync("uniswap_addresses.json", JSON.stringify(addresses, null, 2));
  console.log("Factory address saved to uniswap_addresses.json");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
