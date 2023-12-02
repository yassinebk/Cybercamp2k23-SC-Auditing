// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract StorageSimple {
    uint public balance = 100 ether;
    address payable public owner;

    constructor() payable {
        owner = payable(msg.sender);
    }

    function returnTrue() public returns (bool) {
        return true;
    }
}
