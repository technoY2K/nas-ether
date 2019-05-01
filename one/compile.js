const path = require('path')
const fs   = require('fs')
const solc = require('solc')

const inboxPath = path.resolve(__dirname, './contracts/Inbox.sol')
const source    = fs.readFileSync(inboxPath, 'utf8')

const inputObj = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  }
}

const output = solc.compile(JSON.stringify(inputObj)))

module.exports = {
  bytecode: output.contracts['Inbox.sol'].Inbox.evm.bytecode
}
