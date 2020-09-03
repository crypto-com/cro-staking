pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/PausableToken.sol";
import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";


contract PausableTokenMock is PausableToken, DetailedERC20 {
  constructor(string _name, string _symbol, uint8 _decimals) DetailedERC20(_name, _symbol, _decimals) public {
    totalSupply_ = 100000 * 10 ** 18;
    balances[msg.sender] = totalSupply_;
  }
}
