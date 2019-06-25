pragma solidity ^0.5.7;

contract Lottery {
  address public manager;

  constructor() public {
    manager = msg.sender;
  }
}
