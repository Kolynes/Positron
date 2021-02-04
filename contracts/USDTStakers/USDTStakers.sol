// SPDX-License-Identifier: MIT
pragma solidity ^0.5.2;
pragma experimental ABIEncoderV2;

import "../USDT-TRC20/MultiSigWallet.sol";
import "../USDT-TRC20/StandardToken.sol";

contract USDTStakers is MultiSigWallet {
    uint8 public rate;
    uint8 public referralRate;
    uint public minStakeValue;
    address public tetherTokenAddress;
    ERC20 public tether;

    struct Staker {
        uint numberOfStakes;
        uint totalStakeValue;
        uint numberOfReferrals;
        address referee;
        bool exists;
    }

    struct Stake {
        uint value;
        uint creationTimestamp;
        uint lastWithdrawalTimestamp;
        bool exists;
    }

    mapping(address => Staker) public stakers;
    mapping(address => mapping(uint => Stake)) public stakes;
    mapping(address => mapping(uint => Staker)) public referrals;

    event DepositRecieved(address from, uint value, uint timestamp);
    event ProfitWithdrawn(uint stakeIndex, address staker, uint value);
    event StakeRedeemed(address staker, uint value);

    constructor(address[] memory owners, uint required, address _tetherTokenAddress, uint8 _rate, uint8 _referralRate, uint _minStakeValue) public MultiSigWallet(owners, required) {
        tetherTokenAddress = _tetherTokenAddress;
 
       tether = ERC20(tetherTokenAddress);
        rate = _rate;
        referralRate = _referralRate;
        minStakeValue = _minStakeValue;
    }

    modifier isAStaker(address staker) {
        require(stakers[staker].exists);
        _;
    }

    modifier stakeExists(address staker, uint stake) {
        require(stakes[staker][stake].exists);
        _;
    }

    modifier profitIsWithdrawable(uint index) {
        require(now - stakes[msg.sender][index].lastWithdrawalTimestamp > 3600 * 1000 * 24 * 7);
        _;
    }

    modifier stakeIsRedeemable(uint index) {
        require(now - stakes[msg.sender][index].lastWithdrawalTimestamp > 3600 * 1000 * 24 * 3);
        _;
    }

    function onDepositMade(address from, address referee) public returns (bool) {
        uint allowance = tether.allowance(msg.sender, address(this));
        require(allowance >= minStakeValue);
        if(!stakers[from].exists)
            stakers[from] = Staker({
                numberOfStakes: 1,
                totalStakeValue: allowance,
                numberOfReferrals: 0,
                referee: address(0x0),
                exists: true
            });
        else {
            stakers[from].numberOfStakes++;
            stakers[from].totalStakeValue += allowance;
        }
        stakes[from][stakers[from].numberOfStakes - 1] = Stake({
            value: allowance,
            lastWithdrawalTimestamp: now,
            creationTimestamp: now,
            exists: true
        });
        if(referee != address(0x0) && stakers[from].referee == address(0x0) && stakers[referee].exists) {
            stakers[from].referee = referee;
            referrals[referee][stakers[referee].numberOfReferrals] = stakers[from];
            stakers[referee].numberOfReferrals++;
        }
        emit DepositRecieved(from, allowance, now);
        return true;
    }

    function withdrawProfit(uint index) isAStaker(msg.sender) stakeExists(msg.sender, index) profitIsWithdrawable(index) public returns (bool) {
        uint totalRate = rate + (stakers[msg.sender].numberOfReferrals * referralRate);
        uint profit = stakes[msg.sender][index].value * totalRate / 1000;
        tether.transfer(msg.sender, profit);
        stakes[msg.sender][index].lastWithdrawalTimestamp = now;
        emit ProfitWithdrawn(index, msg.sender, profit);
        return true;
    }

    function redeemStake(uint index) isAStaker(msg.sender) stakeExists(msg.sender, index) stakeIsRedeemable(index) public returns (bool) {
        tether.transfer(msg.sender, stakes[msg.sender][index].value);
        emit StakeRedeemed(msg.sender, stakes[msg.sender][index].value);
        stakers[msg.sender].numberOfStakes--;
        stakers[msg.sender].totalStakeValue -= stakes[msg.sender][index].value;
        if(stakers[msg.sender].numberOfStakes == 0)
            if(stakers[stakers[msg.sender].referee].exists)
               stakers[stakers[msg.sender].referee].numberOfReferrals--; 
            delete stakers[msg.sender];
        delete stakes[msg.sender][index];
        return true;
    }

    function getReferrals(address staker) isAStaker(staker) view public returns (Staker[] memory) {
        Staker[] memory _referrals = new Staker[](stakers[staker].numberOfReferrals);
        for(uint i = 0; i < stakers[staker].numberOfReferrals; i++)
            _referrals[i] = referrals[staker][i];
        return _referrals;
    }

    function getStakes(address staker) isAStaker(staker) view public returns (Stake[] memory) {
        Stake[] memory _stakes = new Stake[](stakers[staker].numberOfStakes);
        for(uint i = 0; i < stakers[staker].numberOfStakes; i++)
            _stakes[i] = stakes[staker][i];
        return _stakes;
    }

    function setRate(uint8 value) internal {
        rate = value;
    }

    function setReferralRate(uint8 value) internal {
        referralRate = value;
    }

    function setTetherToken(address newAddress) internal {
        tetherTokenAddress = newAddress;
        tether = ERC20(tetherTokenAddress);
    }

    function transferTether(address destination, uint amount) public onlyWallet returns(bool) {
        return tether.transfer(destination, amount);
    }
}