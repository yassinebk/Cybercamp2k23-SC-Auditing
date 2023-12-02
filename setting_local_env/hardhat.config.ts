import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: { compilers: [{ version: "0.8.20" }] },
  defaultNetwork: "sepolia",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
    enabled: true,
  },
  networks: {
    sepolia: {
      accounts: [process.env.PRIVATE_KEY!],
      chainId: 11155111,
      url: process.env.INFURA_URL,
    },
  },
};

export default config;
