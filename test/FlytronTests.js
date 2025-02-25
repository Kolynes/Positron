const Flytron = artifacts.require("Flytron");

contract("Flytron", async data => {
    it("should register a new member", async () => {
        var instance = await Flytron.deployed();
        console.log(await instance.register(data[0], {from: data[1], gas: 300000, value: 1e18}));
    });
    it("should register all 6 slots", async () => {
        var instance = await Flytron.deployed();
        for(var i = 2; i < 8; i++)
            console.log(await instance.register(data[1], {from: data[i], gas: 300000, value: 1e18}))
    });
    it("should upgrade second account", async () => {
        var instance = await Flytron.deployed();
        console.log(await instance.upgrade({from: data[1], gas: 300000, value: 2.5e18}));
    });
    it("should return current level and upline details", async () => {
        var instance = await Flytron.deployed();
        console.log(await instance.getDetails({from: data[1]}));
    });
    it("should return level info", async () => {
        var instance = await Flytron.deployed();
        console.log(await instance.getLevel(1, {from: data[1]}));
    });
    it("should return spillover info", async () => {
        var instance = await Flytron.deployed();
        console.log(await instance.getSpillover(1, {from: data[1]}));
    });
});