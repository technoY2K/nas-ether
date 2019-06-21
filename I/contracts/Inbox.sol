pragma solidity ^0.5.7;

contract Inbox {
  string public message;

  constructor(string memory newMessage) public {
    message = newMessage;
  }

  function setMessage(string memory newMessage) public {
    message = newMessage;
  }
}
