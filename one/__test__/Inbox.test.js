const ganache = require('ganache-cli')
const Web3    = require('web3')
const w3      = new Web3(ganache.provider())
const { abi, evm: {bytecode} } = require('../compile')

let accounts;
let inbox;

beforeEach(async () => {
  accounts = await w3.eth.getAccounts()
  inbox    = await new w3.eth.Contract(abi, accounts[0])
})

describe('Inbox.sol test', () => {
  test('accounts variable should be an array', () => {
    console.log(inbox)
  })
})
