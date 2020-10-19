const Positron = artifacts.require("Positron");

module.exports = function(deployer) {
    deployer.deploy(Positron);
}