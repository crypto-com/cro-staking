const ERC20 = artifacts.require('PausableTokenMock')
// TODO change from BasicStakeContractMock to something more proper if needed
const ERC900BasicStakeContract = artifacts.require('BasicStakeContractMock')
module.exports = function (deployer, network, accounts) {
  // only for local network, deploy a plain ERC20
  if (['development', 'ganache', 'ropsten'].indexOf(network) > -1) {

    deployer.deploy(ERC20, { gas: 6721970 }).then(async () => {
      console.log(`Deployed ERC20 token address : ${ERC20.address}`)
      const ONE_YEAR_IN_SECONDS = 31557600
      await deployer.deploy(ERC900BasicStakeContract, ERC20.address, ONE_YEAR_IN_SECONDS, { gas: 6721970 })
      await deployer.deploy(ERC900BasicStakeContract, ERC20.address, ONE_YEAR_IN_SECONDS * 2, { gas: 6721970 })
      await deployer.deploy(ERC900BasicStakeContract, ERC20.address, ONE_YEAR_IN_SECONDS * 3, { gas: 6721970 })
      deployer.deploy(ERC900BasicStakeContract, ERC20.address, ONE_YEAR_IN_SECONDS * 4, { gas: 6721970 })
    })

  }
}
