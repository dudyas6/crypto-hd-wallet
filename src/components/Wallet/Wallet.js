import React, { useState } from "react";
import { useWallet } from "@/lib/sessionContext";
const { ethers } = require("ethers");
const Wallet = ({ setSelectedComponent }) => {
  const { currentWallet } = useWallet();
  const renderWallet = () => {
    const provider = new ethers.providers.InfuraProvider(
      "sepolia",
      "c1b7c53d05d546b684011e0fcad0aa36"
    );
    getBalance(currentWallet.eth0.address, provider);
    getBalance(currentWallet.eth1.address, provider);
  };

  const getBalance = (address, provider) => {
    // Example: Get balance of the new wallet address
    provider.getBalance(address).then((balance) => {
      console.log(`Balance of ${address}:`, ethers.utils.formatEther(balance));
    });
  };
  useState(() => {
    renderWallet();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-center font-bold">Wallet</h1>(
        <div class="pb-4 pt-0"></div>)
      </div>
    </>
  );
};

export default Wallet;
