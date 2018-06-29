/* solium-disable security/no-block-members */
pragma solidity ^0.4.24;

import "./ERC900BasicStakeContract.sol";


/**
 * @title ERC900 Simple Staking Interface basic implementation
 * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-900.md
 */
contract ERC900CompoundingStakeContract is ERC900BasicStakeContract {
  // For token staked longer than a year, they will become more valuable by this coefficient
  //  e.g., if interestRate is 10, after 1 year the perceived stake is 10% more valuable.
  // Stakeholders will have to ping the contract via updatePerceivedStakeAmounts to have
  //  the contract update the perceived amounts of their stakes.
  uint256 public annualizedInterestRate;

  // The number of seconds in a year (365.25 days)
  // Used for determining when stakes are eligible for interest
  uint256 constant public YEAR_IN_SECONDS = 31557600;

  mapping (address => CompoundingStake[]) public perceivedAmountBalances;

  struct CompoundingStake {
    uint256 lastUpdatedTimestamp;
    uint256 perceivedAmount;
  }

  function stake(
    uint256 _amount,
    bytes _data
  )
    public
  {
    super.createStake(
      msg.sender,
      _amount,
      defaultLockInDuration);

    // @TODO: provision perceivedAmounts

    emit Staked(
      msg.sender,
      _amount,
      totalStakedFor(msg.sender),
      _data);
  }

  function stakeFor(
    address _user,
    uint256 _amount,
    bytes _data
  )
    public
  {
    super.createStake(
      _user,
      _amount,
      defaultLockInDuration);

    // @TODO: provision perceivedAmounts

    emit Staked(
      _user,
      _amount,
      totalStakedFor(_user),
      _data);
  }

  function unstake(
    uint256 _amount,
    bytes _data
  )
    public
  {
    super.unstake(
      _amount,
      _data);

    // @TODO: Update perceivedAmounts

    emit Unstaked(
      msg.sender,
      _amount,
      totalStakedFor(msg.sender),
      _data);
  }

  /**
   * @dev Helper function to create stakes for a given address
   * @param _address address The address the stake is being created for
   * @param _amount uint256 The number of tokens being staked
   * @param _lockInDuration uint256 The duration to lock the tokens for
   */
  function createStake(
    address _address,
    uint256 _amount,
    uint256 _lockInDuration
  )
    internal
  {
    super.createStake(
      _address,
      _amount,
      _lockInDuration);

    // TODO: Update perceived token amounts
  }
}
