require('babel-register')
require('babel-polyfill')

// const dotenv = require('dotenv')
// const HDWalletProvider = require('@truffle/hdwallet-provider')
//
// dotenv.config()
//
// const infuraProvider = (network) => {
//   return new HDWalletProvider(
//     process.env.MNEMONIC,
//     `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`
//   )
// }

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    coverage: {
      host: '127.0.0.1',
      port: 8555,
      network_id: '*',
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
    test: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gasPrice: 0x01,
    },
    ganache: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gasPrice: 0x01,
    },
    // ropsten: {
    //   provider: infuraProvider('ropsten'),
    //   network_id: '3',
    //   gasPrice: 5000000000, // 5 gwei
    // },
    // rinkeby: {
    //   provider: infuraProvider('rinkeby'),
    //   network_id: '4',
    //   gasPrice: 5000000000, // 5 gwei
    // },
    // mainnet: {
    //   provider: infuraProvider("mainnet"),
    //   network_id: "1",
    //   gas: 6000000,
    //   gasPrice: 125000000000, // in wei
    // }
  },
  compilers: {
    solc: {
      version: '0.4.25',
      settings: {
        optimizer: {
          enabled: true,
          runs: 999999,
        },
      },
    },
  },
  plugins: ['solidity-coverage'],
}
