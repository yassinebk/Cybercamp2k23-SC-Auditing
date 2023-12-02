import { ethers } from "hardhat";
import { StorageSimple } from "../typechain-types";

async function main() {
  const storage = await ethers.deployContract("StorageSimple");

  const storageContract = await storage.waitForDeployment();

  visualiseStorage(storageContract);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function visualiseStorage(storageContract: StorageSimple) {
  for (let i = 0; i < 100; i++) {
    const storageValue = await ethers.provider.getStorage(
      await storageContract.getAddress(),
      i
    );

    console.log(storageValue);
  }
}
