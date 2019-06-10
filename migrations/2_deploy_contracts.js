const VBKToken = artifacts.require("VBKToken");

module.exports = function(deployer) {
  deployer.deploy(VBKToken);
};
