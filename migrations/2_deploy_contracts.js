const ERC20 = artifacts.require('PausableTokenMock')
const ERC900BasicStakeContract = artifacts.require('BasicStakingContract')
module.exports = async function (deployer, network, accounts) {
  const ONE_YEAR_IN_SECONDS = 31557600

  // only for local network, deploy a plain ERC20
  if (['development', 'ganache'].indexOf(network) > -1) {

    deployer.deploy(ERC20, 'CERU', 'CERU', 18, { gas: 6721970 }).then(async () => {
      console.log(`Deployed ERC20 token address : ${ERC20.address}`)
      await deployer.deploy(ERC900BasicStakeContract, ERC20.address, ONE_YEAR_IN_SECONDS, { gas: 6721970 })
      await deployer.deploy(ERC900BasicStakeContract, ERC20.address, ONE_YEAR_IN_SECONDS * 2, { gas: 6721970 })
      await deployer.deploy(ERC900BasicStakeContract, ERC20.address, ONE_YEAR_IN_SECONDS * 3, { gas: 6721970 })
      await deployer.deploy(ERC900BasicStakeContract, ERC20.address, ONE_YEAR_IN_SECONDS * 4, { gas: 6721970 })
      console.log(`all deployed on ${network}~~~`)
    })

  } else if (['ropsten'].indexOf(network) > -1) {
    const deployedTokenOnRopsten = '0x5284fAB1638D281ECC18A8d6645aE2D4af6ebe8F'
    await deployer.deploy(ERC900BasicStakeContract, deployedTokenOnRopsten, ONE_YEAR_IN_SECONDS, { gas: 6721970 })
    await deployer.deploy(ERC900BasicStakeContract, deployedTokenOnRopsten, ONE_YEAR_IN_SECONDS * 2, { gas: 6721970 })
    await deployer.deploy(ERC900BasicStakeContract, deployedTokenOnRopsten, ONE_YEAR_IN_SECONDS * 3, { gas: 6721970 })
    await deployer.deploy(ERC900BasicStakeContract, deployedTokenOnRopsten, ONE_YEAR_IN_SECONDS * 4, { gas: 6721970 })
    console.log('all deployed on ropsten~~~')

  } else if (network === 'mainnet') {
    const croTokenOnMainnet = '0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b'
    await deployer.deploy(ERC900BasicStakeContract, croTokenOnMainnet, ONE_YEAR_IN_SECONDS, { gas: 6721970 })
    await deployer.deploy(ERC900BasicStakeContract, croTokenOnMainnet, ONE_YEAR_IN_SECONDS * 2, { gas: 6721970 })
    await deployer.deploy(ERC900BasicStakeContract, croTokenOnMainnet, ONE_YEAR_IN_SECONDS * 3, { gas: 6721970 })
    await deployer.deploy(ERC900BasicStakeContract, croTokenOnMainnet, ONE_YEAR_IN_SECONDS * 4, { gas: 6721970 })
    console.log('all deployed on mainnet~~~')

  }
}
