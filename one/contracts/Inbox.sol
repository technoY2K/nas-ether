pragma solidity ^0.5.3;

contract Inbox {
  string public message;

  constructor(string memory newAddress) public {
    message = newMessage;
  }

  function setMessage(string memory newAddress) public {
    message = newMessage;
  }
}
