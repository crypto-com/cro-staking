const ERC20 = artifacts.require('@openzeppelin-solidity/contracts/token/ERC20/ERC20')
// TODO change from BasicStakeContractMock to something more proper if needed
const ERC900BasicStakeContract = artifacts.require('BasicStakeContractMock')
module.exports = function (deployer, network, accounts) {
  // only for local network, deploy a plain ERC20

  deployer.deploy(ERC20, { gas: 6721970 }).then(() => {
    console.log(`Deployed ERC20 token address : ${ERC20.address}`)
    deployer.deploy(ERC900BasicStakeContract, ERC20.address)
  })
}
