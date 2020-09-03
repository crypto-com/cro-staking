// MIT Licensed code from https://github.com/OpenZeppelin/openzeppelin-solidity

export default async (promise, errorMessage) => {
  try {
    await promise
    assert.fail('Expected revert not received')
  } catch (error) {
    const revertFound = error.message.search('revert') >= 0
    if (errorMessage) {
      assert(revertFound, `Expected "revert", got ${error} instead`)
      assert(error.message.indexOf(errorMessage) > -1, `Expected error ${errorMessage}, got ${error.message} instead with stack ${error.stack}`)
    } else {
      assert(revertFound, `Expected "revert", got ${error} instead with stack ${error.stack}`)
    }
  }
}
