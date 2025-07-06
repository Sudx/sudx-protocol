// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title SUDX Token
 * @dev The native token for the SUDX ecosystem.
 * Freedom in Code. Power in the Community.
 */
contract SUDXToken is ERC20 {
    /**
     * @dev Sets the values for {name} and {symbol}.
     * Mints the total supply of tokens to the deployer.
     */
    constructor() ERC20("SUDX", "SUDX") {
        // Mint 2.8 billion tokens to the contract deployer.
        // ERC20 tokens use decimals, so we multiply by 10**18.
        _mint(msg.sender, 2_800_000_000 * (10 ** decimals()));
    }
}
