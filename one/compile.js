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

const output = JSON.parse(solc.compile(JSON.stringify(inputObj)))

console.log(output.contracts['Inbox.sol'])
