pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/PausableToken.sol";


contract PausableTokenMock is PausableToken {
  constructor() public {
    totalSupply_ = 100000 * 10 ** 18;
    balances[msg.sender] = totalSupply_;
  }
}
