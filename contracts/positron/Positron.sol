// SPDX-License-Identifier: MIT
pragma solidity 0.5.4;

contract Positron {
    struct Level {
        uint8 number;
        uint slotCount;
        address payable participant;
    }

    struct Spillover {
        uint8 level;
        uint8 count;
        address payable participant;
    }

    struct Participant {
        uint8 currentLevel;
        address payable walletAddress;
        address payable upline;
        bool exists;
    }

    mapping(address => Participant) participants;
    uint public numberOfParticipants = 0;
    uint[8] public levelParticipants = [
        0, 0, 0, 0, 0, 0, 0, 0
    ];
    Level[] levels;
    Spillover[] spillovers;

    Participant owner;
    uint[] upgradeFees = [
        100 trx,
        250 trx,
        650 trx,
        1650 trx,
        4150 trx,
        10400 trx,
        26000 trx,
        65000 trx
    ];

    event Upgrade(address participant, address upline, uint8 level, uint fee);
    event Registration(address participant, address upline);

    constructor() public {
        owner = Participant({
            walletAddress: msg.sender,
            upline: msg.sender,
            currentLevel: 8,
            exists: true
        });
        for(uint8 i = 0; i < 8; i++) {
            levels.push(Level({
                number: i + 1,
                slotCount: 0,
                participant: owner.walletAddress
            }));
            spillovers.push(Spillover({
                level: i + 1,
                count: 0,
                participant: msg.sender
            }));
        }
        participants[owner.walletAddress] = owner;
        numberOfParticipants++;
        levelParticipants[7]++;
        emit Registration(msg.sender, msg.sender);
    }

    modifier correctRegistrationFee() {
        require(msg.value >= 100 trx, "Insufficient amount sent");
        _;
    }

    modifier participantExists(address participantAddress) {
        require(participants[participantAddress].exists == true, "This participant does not exist");
        _;
    }

    modifier isOwner() {
        require(msg.sender == owner.walletAddress, "This action requires owner privileges");
        _;
    }

    function awardSpillover(uint amount, uint8 level, uint slotCount) internal {
        require(address(this).balance >= amount, "Insufficient amount in contract");
        if(slotCount > 2)
            for(uint i = 0; i < spillovers.length; i++)
                if(spillovers[i].level == level && spillovers[i].count < 4) {
                    spillovers[i].count++;
                    spillovers[i].participant.transfer(amount);
                    break;
                }
    }

    function register(address payable upline) public payable correctRegistrationFee participantExists(upline) returns (bool) {
        upline.transfer(50 trx);
        participants[msg.sender] = Participant({
            currentLevel: 1,
            walletAddress: msg.sender,
            upline: upline,
            exists: true
        });
        numberOfParticipants++;
        levelParticipants[0]++;
        levels.push(Level({
            number: 1,
            slotCount: 0,
            participant: msg.sender
        }));
        for(uint i = 0; i < levels.length; i++)
            if(levels[i].participant == upline && levels[i].number == 1) {
                levels[i].slotCount++;
                awardSpillover(50 trx, 1, levels[i].slotCount);
                break;
            }
        spillovers.push(Spillover({
            level: 1,
            count: 0,
            participant: msg.sender
        }));
        emit Registration(msg.sender, upline);
        return true;
    }

    function upgrade() public payable participantExists(msg.sender) returns (bool) {
        uint slotCount = 0;
        for(uint i = 0; i < levels.length; i++) 
            if(levels[i].participant == msg.sender && levels[i].number == participants[msg.sender].currentLevel) {
                slotCount = levels[i].slotCount;
                break;
            }
        if(slotCount >= 6) {
            uint uplineSlotCount;
            address payable initialUpline = participants[msg.sender].upline;
            address payable upline = participants[msg.sender].upline;
            while(true) {
                if(upline == owner.walletAddress)
                    break;
                else if(participants[upline].currentLevel <= participants[msg.sender].currentLevel) {
                    participants[msg.sender].upline == participants[upline].upline;
                    upline = participants[upline].upline;
                } 
                else break;
            }
            for(uint i = 0; i < levels.length; i++) {
                if(levels[i].participant == upline) {
                    levels[i].slotCount++;
                    uplineSlotCount = levels[i].slotCount;
                    break;
                }
            }
            for(uint i = 0; i < levels.length; i++) {
                if(levels[i].participant == initialUpline && initialUpline != upline) {
                    levels[i].slotCount--;
                    break;
                }
            }
            uint upgradeFee = upgradeFees[participants[msg.sender].currentLevel];
            require(msg.value >= upgradeFee, "Insufficient amount sent");
            upline.transfer(upgradeFee / 2);
            awardSpillover(upgradeFee / 2, participants[upline].currentLevel, uplineSlotCount);
            levelParticipants[participants[msg.sender].currentLevel - 1]--;
            participants[msg.sender].currentLevel++;
            levelParticipants[participants[msg.sender].currentLevel - 1]++;
            levels.push(Level({
                number: participants[msg.sender].currentLevel,
                slotCount: 0,
                participant: msg.sender
            }));
            emit Upgrade(msg.sender, upline, participants[msg.sender].currentLevel, upgradeFee);
            return true;
        } else revert("Please fill up all slots in the current level");
    }

    function getParticipantDetails() public view returns (bool, address, address, uint8, bool) {
        return (
            participants[msg.sender].exists,
            msg.sender, 
            participants[msg.sender].upline, 
            participants[msg.sender].currentLevel, 
            participants[msg.sender].walletAddress == owner.walletAddress
        );
    }

    function getLevel(uint8 number) public view participantExists(msg.sender) returns (int) {
        for(uint i = 0; i < levels.length; i++)
            if(levels[i].participant == msg.sender && levels[i].number == number)
                return int(levels[i].slotCount);
        return -1;
    }

    function getSpillover(uint8 level) public view returns (int) {
        for(uint i = 0; i < spillovers.length; i++)
            if(spillovers[i].participant == msg.sender && spillovers[i].level == level)
                return int(spillovers[i].count);
        return -1;
    }

    function getLevelEarnings(uint8 level) public view returns (uint) {
        for(uint i = 0; i < levels.length; i++)
            if(levels[i].participant == msg.sender && levels[i].number == level)
                return levels[i].slotCount * (upgradeFees[levels[i].number - 1] / 2);
    }
    
    function getLevelSpilloverEarnings(uint8 level) public view returns (uint) {
        for(uint i = 0; i < spillovers.length; i++)
            if(spillovers[i].participant == msg.sender && spillovers[i].level == level)
                return spillovers[i].count * (upgradeFees[spillovers[i].level - 1] / 2);
    }

    function getLevelParticipants(uint8 level) public view isOwner returns (uint) {
        return levelParticipants[level - 1];
    }
    
    function withdraw(uint amount) public isOwner returns (bool) {
        owner.walletAddress.transfer(amount);
    }
}