import shouldBehaveLikeBasicStakeContract from './behaviors/BasicStakeContract.behavior'
import shouldBehaveLikeCreditsStakeContract from './behaviors/CreditsStakeContract.behavior'

const { BigNumber } = web3

const Erc20Token = artifacts.require('PausableTokenMock.sol')
const CreditsStakeContract = artifacts.require('CreditsStakeContract.sol')

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()

contract('CreditsStakeContract', function (accounts) {
  const lockInDuration = 7776000

  beforeEach(async function () {
    this.erc20Token = await Erc20Token.new()
    this.stakeContainer = await CreditsStakeContract.new(this.erc20Token.address, lockInDuration)

    await this.erc20Token.approve(this.stakeContainer.address, web3.toWei(100, 'ether'))
  })

  shouldBehaveLikeBasicStakeContract(accounts, lockInDuration)
  shouldBehaveLikeCreditsStakeContract()
})
