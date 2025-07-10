# SUDX Protocol

**Freedom in Code. Power in the Community.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Blockchain: Polygon](https://img.shields.io/badge/Blockchain-Polygon-8a42f5.svg)](https://polygon.technology/)
[![Tech: Hardhat](https://img.shields.io/badge/Tech-Hardhat-blue.svg)](https://hardhat.org/)

This repository contains the official smart contract implementation of the SUDX protocol, built on the **Polygon** blockchain using **Solidity** and the **Hardhat** development environment.

---

## Table of Contents

- [What is SUDX?](#what-is-sudx)
- [Project Status](#project-status)
- [Getting Started](#getting-started)
- [Repository Structure](#repository-structure)
- [Get Involved](#get-involved)
- [License](#license)

---

## What is SUDX?

SUDX is a project designed to create a transparent and decentralized funding ecosystem for the open-source software that powers our world. We aim to bridge the gap between the open-source ethos and the financial power of Web3.

Inspired by the `sudo` command in Linux, SUDX provides concrete tools:
1.  **Direct & Transparent Donations:** Support your favorite projects with fast, auditable transactions on the **Polygon** blockchain.
2.  **Decentralized Governance (DAO):** The SUDX community will decide the future, collectively funding new tools, bug bounties, and initiatives through our Aragon-powered DAO.
3.  **On-Chain Reputation:** Developers can earn rewards for their contributions, building a valued and immutable on-chain resume.

---

## Project Status

*   **Network:** Polygon Mainnet
*   **Current Stage:** Deployed & DAO Live
*   **Mainnet Contract:** `0xc56F971934961267586e8283C06018167F0D0E4C`
*   **DAO Address:** `0xA5dEa0A7E9c47d52e735c1d4129Cc02a54966E21`

The core token contract has been successfully deployed to the Polygon Mainnet. The next steps involve locking team tokens and creating the initial liquidity pool.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   NPM
*   A `.env` file with the required environment variables (see `.env.example` if available, or the `hardhat.config.ts`)

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/Sudx/sudx-protocol.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd sudx-protocol
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running Tests

To ensure everything is working correctly, run the test suite:
```sh
npx hardhat test
```

---

## Repository Structure

```
/
├── contracts/      # Contains all Solidity smart contracts (SUDXToken.sol)
├── scripts/        # Deployment and interaction scripts (deploy.s)
├── test/           # Test files for the smart contracts
├── hardhat.config.ts # Hardhat configuration file
└── package.json      # Project dependencies and scripts
```

---

## Get Involved

*   **X (Twitter):** https://x.com/SudxOfficial
*   **Telegram:** https://t.me/+aWeTCUiItxk4OWZh
*   **Reddit:** https://www.reddit.com/r/SudxLabs/
*   **GitHub:** https://github.com/Sudx

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
