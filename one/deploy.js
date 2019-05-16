require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { abi, evm: {bytecode} } = require('./compile')

const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  process.env.TEST_NETWORK
)

const web3 = new Web3(provider)
