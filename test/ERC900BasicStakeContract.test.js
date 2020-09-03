import shouldBehaveLikeBasicStakeContract from './behaviors/ERC900BasicStakeContract.behavior'

const { BN } = web3.utils

const Erc20Token = artifacts.require('PausableTokenMock.sol')
const BasicStakeContract = artifacts.require('BasicStakeContractMock.sol')

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bn')(BN))
  .should()

contract('ERC900BasicStakeContract', function (accounts) {
  const lockInDuration = 7776000

  beforeEach(async function () {
    this.erc20Token = await Erc20Token.new('TOKEN_NAME', 'TOKEN_NAME', 18)
    this.stakeContract = await BasicStakeContract.new(this.erc20Token.address, lockInDuration)

    await this.erc20Token.approve(this.stakeContract.address, web3.utils.toWei('100', 'ether'))
  })

  shouldBehaveLikeBasicStakeContract(accounts, lockInDuration)
})
