// scripts/deploy_uniswap_router.ts
import { ethers } from "hardhat";
import * as fs from "fs";
import UniswapV2Router02 from "@uniswap/v2-periphery/build/UniswapV2Router02.json";

async function main() {
  console.log("Deploying UniswapV2Router02...");

  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  // Load the factory address
  const addresses = JSON.parse(fs.readFileSync("uniswap_addresses.json", "utf8"));
  if (!addresses.factory) {
    throw new Error("Factory address not found in uniswap_addresses.json");
  }
  console.log("Using Factory at:", addresses.factory);

  const wethAddress = "0x52eF3d68BaB452a294342DC3e5f464d7f610f72E"; // WETH on Amoy

  const routerFactory = new ethers.ContractFactory(UniswapV2Router02.abi, UniswapV2Router02.bytecode, deployer);
  const router = await routerFactory.deploy(addresses.factory, wethAddress);

  await router.waitForDeployment();
  
  const routerAddress = await router.getAddress();
  console.log("UniswapV2Router02 deployed to:", routerAddress);

  // Save the router address
  addresses.router = routerAddress;
  fs.writeFileSync("uniswap_addresses.json", JSON.stringify(addresses, null, 2));
  console.log("Router address saved to uniswap_addresses.json");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
