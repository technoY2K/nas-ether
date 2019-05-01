const ganache = require('ganache-cli')
const Web3    = require('web3')
const w3      = new Web3(ganache.provider())

beforeEach(async () => {
  const accounts = await w3.eth.getAccounts().catch(error => {
    throw new Error(error);
  })
  console.log(accounts)
})

describe('Inbox.sol test', () => {
  test('initial easy test', () => {
    expect(2).toEqual(2)
  })
})
