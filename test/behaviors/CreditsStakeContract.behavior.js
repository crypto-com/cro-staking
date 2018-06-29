const { BigNumber } = web3

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()

export default function shouldBehaveLikeCreditsStakeContract(accounts) {

  describe('like a CreditsStakeContract', function () {

    describe('credit mechanics', function () {
      it('should issue credits when a stake is created')
      it('should issue credits to another user when a stake is created for them')
      it('should issue more credits when a stake is created with a longer lock-in duration')
      it('should not remove credits when a stake is withdrawn')
      it('should not remove credits when a stake for another user is withdrawn')
    })

    describe('creditBalanceOf', function () {
      it('should be 0 by default')
      it('should increase when stakes are made')
      it('should decrease when credits are spent')
    })

    describe('spendCredits', function () {
      it('should revert if a user has insufficient credits')
      it('should revert if someone tries to spend credits that belong to another user')
      it('should decrease the number of credits in a user\'s balance')
    })
  })
}
