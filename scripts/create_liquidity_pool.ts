// scripts/create_liquidity_pool.ts
import { ethers } from "hardhat";
import * as fs from "fs";
import { SUDXToken } from "../typechain-types";
import { IUniswapV2Router02 } from "../typechain-types/contracts/interfaces/IUniswapV2Router02"; // Adjust path if needed

async function main() {
  console.log("Creating liquidity pool...");

  const [deployer] = await ethers.getSigners();
  console.log("Using account:", deployer.address);

  // --- 1. Load Addresses ---
  const addresses = JSON.parse(fs.readFileSync("uniswap_addresses.json", "utf8"));
  if (!addresses.router) {
    throw new Error("Router address not found in uniswap_addresses.json");
  }
  const sudxTokenAddress = "0xBD8F172873C11479Fba0b321c635B4c1659809f0"; // Your SUDX token address
  const usdcTokenAddress = addresses.mock_usdc; // Our deployed MockUSDC
  if (!usdcTokenAddress) {
    throw new Error("MockUSDC address not found in uniswap_addresses.json");
  }

  // --- 2. Connect to Contracts ---
  const sudxToken = (await ethers.getContractAt("SUDXToken", sudxTokenAddress)) as SUDXToken;
  const usdcToken = (await ethers.getContractAt("@openzeppelin/contracts/token/ERC20/IERC20.sol:IERC20", usdcTokenAddress));
  const router = (await ethers.getContractAt("IUniswapV2Router02", addresses.router)) as IUniswapV2Router02;

  // --- 3. Define Liquidity Amounts ---
  const amountSUDX = ethers.parseUnits("1000000", 18); // 1 Million SUDX
  const amountUSDC = ethers.parseUnits("10", 6);       // 10 USDC (USDC has 6 decimals)

  console.log(`Approving router to spend ${ethers.formatUnits(amountSUDX, 18)} SUDX...`);
  const approveSUDXTx = await sudxToken.approve(addresses.router, amountSUDX);
  await approveSUDXTx.wait(); // Wait for the transaction to be mined
  console.log("SUDX approved.");
  
  console.log(`Approving router to spend ${ethers.formatUnits(amountUSDC, 6)} USDC...`);
  const approveUSDCTx = await usdcToken.approve(addresses.router, amountUSDC);
  await approveUSDCTx.wait(); // Wait for the transaction to be mined
  console.log("USDC approved.");

  // --- 4. Add Liquidity ---
  console.log("Adding liquidity to SUDX/USDC pool...");
  const addLiquidityTx = await router.addLiquidity(
    sudxTokenAddress,
    usdcTokenAddress,
    amountSUDX,
    amountUSDC,
    0, // Minimum amount of SUDX you want to receive back (slippage control)
    0, // Minimum amount of USDC you want to receive back (slippage control)
    deployer.address, // Address to send the LP tokens to
    Math.floor(Date.now() / 1000) + 60 * 10 // Deadline: 10 minutes from now
  );

  await addLiquidityTx.wait(); // Wait for the liquidity addition to be mined
  console.log("Liquidity added successfully!");
  console.log("Transaction hash:", addLiquidityTx.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
