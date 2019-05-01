const ganache = require('ganache-cli')
const Web3    = require('web3')
const w3      = new Web3(ganache.provider())

let accounts;
beforeEach(async () => {
  accounts = await w3.eth.getAccounts().catch(error => {
    throw new Error(error);
  })
})

describe('Inbox.sol test', () => {
  test('accounts variable should be an array', () => {
    expect(Array.isArray(accounts)).toBe(true)
  })
})
