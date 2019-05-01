const ganache = require('ganache-cli')
const Web3    = require('web3')
const w3      = new Web3(ganache.provider())
const { bytecode } = require('../compile.js')

let accounts;
beforeEach(async () => {


  console.log(bytecode)
})

describe('Inbox.sol test', () => {
  test('accounts variable should be an array', () => {
    expect(Array.isArray([])).toBe(true)
  })
})
