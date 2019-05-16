const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { abi, evm: {bytecode} } = require('./compile')

const provider = new HDWalletProvider(
  '',
  ''
)
