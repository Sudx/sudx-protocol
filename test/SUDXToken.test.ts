import { expect } from "chai";
import { ethers } from "hardhat";
import { SUDXToken } from "../typechain-types";

describe("SUDXToken", function () {
  let token: SUDXToken;
  let deployer: any;

  const TOTAL_SUPPLY = ethers.parseUnits("2800000000", 18); // 2.8 billion tokens with 18 decimals

  beforeEach(async function () {
    [deployer] = await ethers.getSigners();
    const tokenFactory = await ethers.getContractFactory("SUDXToken");
    token = await tokenFactory.deploy();
  });

  it("Should have the correct name and symbol", async function () {
    expect(await token.name()).to.equal("SUDX");
    expect(await token.symbol()).to.equal("SUDX");
  });

  it("Should have the correct total supply", async function () {
    expect(await token.totalSupply()).to.equal(TOTAL_SUPPLY);
  });

  it("Should assign the total supply to the deployer", async function () {
    expect(await token.balanceOf(deployer.address)).to.equal(TOTAL_SUPPLY);
  });
});
