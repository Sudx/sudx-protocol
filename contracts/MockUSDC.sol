// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title MockUSDC
 * @dev A simple ERC20 token to be used as a stand-in for USDC in a test environment.
 * It has 6 decimals, just like the real USDC.
 */
contract MockUSDC is ERC20 {
    /**
     * @dev Sets the values for {name} and {symbol} and mints a large supply to the deployer.
     */
    constructor() ERC20("Mock USDC", "mUSDC") {
        // Mint 10 million tokens to the contract deployer.
        // USDC has 6 decimals.
        _mint(msg.sender, 10_000_000 * (10 ** 6));
    }

    // The ERC20 contract already has a decimals() function, but we override it
    // to explicitly set it to 6, matching the real USDC.
    function decimals() public view virtual override returns (uint8) {
        return 6;
    }
}
