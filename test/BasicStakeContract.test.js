import shouldBehaveLikeBasicStakeContract from './behaviors/BasicStakeContract.behavior'

const { BigNumber } = web3

const Erc20Token = artifacts.require('PausableTokenMock.sol')
const BasicStakeContract = artifacts.require('BasicStakeContractMock.sol')

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()

contract('BasicStakeContract', function (accounts) {
  const lockInDuration = 7776000

  beforeEach(async function () {
    this.erc20Token = await Erc20Token.new()
    this.stakeContainer = await BasicStakeContract.new(this.erc20Token.address, lockInDuration)

    await this.erc20Token.approve(this.stakeContainer.address, web3.toWei(100, 'ether'))
  })

  shouldBehaveLikeBasicStakeContract(accounts, lockInDuration)
})
