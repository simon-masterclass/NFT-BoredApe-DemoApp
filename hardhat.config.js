require('dotenv').config()
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: 'mumbai',
  networks: {
    hardhat: {},
    // development: {
		// 	host: "127.0.0.1",
		// 	port: 7545,
		// 	network_id: "*" // Match any network id
		// },
    // rinkeby: {
    //   url: `${process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL}`,
    //   accounts: [`0x${process.env.METAMASK_PRIVATE_KEY}`]
    // },
    // goerli: {
    //   url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    //   accounts: [`0x${process.env.METAMASK_PRIVATE_KEY}`]
    // },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.METAMASK_PRIVATE_KEY}`]
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts'
  },
  mocha: {
    timeout: 40000
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_API_KEY}`
  }
}
