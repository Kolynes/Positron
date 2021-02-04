const USDTStakers = artifacts.require("USDTStakers");
const TetherToken = artifacts.require("TetherToken");

module.exports = async function(deployer) {
    await deployer.deploy(TetherToken, 2e10, "USD Tether", "USDT", 6);
    var tetherToken = await TetherToken.deployed();
    deployer.deploy(USDTStakers, ["TZCDP57jHn66AJ2hZHqrmievYdzhriLNCm"], 1, tetherToken.address, 140, 5, 100);
}