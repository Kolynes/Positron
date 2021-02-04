const USDTStakers = artifacts.require("USDTStakers");
const TetherToken = artifacts.require("TetherToken");

contract("USDTStakers", accounts => {
    it("should perfectly interface with tether", async () => {
        var instance = await USDTStakers.deployed();
        // var rate = await instance.rate();
    });

    it("should make a stake deposit in the contract", async () => {
        var tetherToken = await TetherToken.deployed();
        var usdtStakers = await USDTStakers.deployed();
        console.log((await usdtStakers.tetherTokenAddress()) == tetherToken.address)
        var result = await tetherToken.approve.call(usdtStakers.address, 2000);
        console.log(result);
        result = await usdtStakers.onDepositMade.call(accounts[0], "TAgcbAMHr6VUC5Rqh29UEWJQePUD8Ta2Pa");
        console.log(result)
    });

});