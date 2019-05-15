const ganache = require('ganache-cli')
const Web3    = require('web3')
const w3      = new Web3(ganache.provider())
const { abi, evm: {bytecode} } = require('../compile')

let accounts;
let inbox;

beforeEach(async (done) => {
  accounts = await w3.eth.getAccounts()
  inbox    = await new w3.eth.Contract(abi)
    .deploy({data: '0x' + bytecode.object, arguments: ['Sandstorm']})
    .send({from: accounts[0], gas: '1000000'})
  done()
})

describe('Inbox.sol test', () => {
  test('accounts variable should be an array', () => {
    expect(Array.isArray(accounts)).toBe(true)
  })

  test('initial message is set', async (done) => {
    const message = await inbox.methods.message().call()
    expect(message).toEqual('Sandstorm')
    done()
  })

  test('can update message', async (done) => {
    await inbox.methods.setMessage('Feel the beat').send({from: accounts[0]})
    const message = await inbox.methods.message().call()
    expect(message).toEqual('Feel the beat')
    done()
  })
})

asdfasfdadsf
