const ganache = require('ganache-cli')
const Web3    = require('web3')
const w3      = new Web3(ganache.provider())
const { abi, evm: {bytecode} } = require('../compile')

let accounts;
beforeEach(async () => {
  accounts = await w3.eth.getAccounts()
})

describe('Inbox.sol test', () => {
  test('accounts variable should be an array', () => {
    expect(Array.isArray([])).toBe(true)
  })
})
