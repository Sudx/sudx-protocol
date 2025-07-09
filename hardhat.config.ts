import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

// Check for environment variables
// const amoyRpcUrl = process.env.AMOY_RPC_URL;
// if (!amoyRpcUrl) {
//   throw new Error("AMOY_RPC_URL not found in .env file");
// }

// const sepoliaRpcUrl = process.env.SEPOLIA_RPC_URL;
// if (!sepoliaRpcUrl) {
//   throw new Error("SEPOLIA_RPC_URL not found in .env file");
// }

const polygonMainnetRpcUrl = process.env.POLYGON_MAINNET_RPC_URL;
if (!polygonMainnetRpcUrl) {
  throw new Error("POLYGON_MAINNET_RPC_URL not found in .env file");
}

const privateKey = process.env.PRIVATE_KEY;
if (!privateKey) {
  throw new Error("PRIVATE_KEY not found in .env file");
}

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    // amoy: {
    //   url: amoyRpcUrl,
    //   accounts: [privateKey],
    // },
    // sepolia: {
    //   url: sepoliaRpcUrl,
    //   accounts: [privateKey],
    // },
    polygon: {
      url: polygonMainnetRpcUrl,
      accounts: [privateKey],
    },
  },
};

export default config;
