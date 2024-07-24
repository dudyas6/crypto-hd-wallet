import React, { useState, useEffect } from "react";
import { useWallet } from "@/lib/sessionContext";
import Coin from "./Coin";
import ClickedCoin from "./ClickedCoin";
const { ethers } = require("ethers");

const Wallet = ({ setSelectedComponent }) => {
  const [balances, setBalances] = useState({
    Blast: "",
    Etherium: "",
  });
  const [selectedCoin, setSelectedCoin] = useState(null);
  const { currentWallet } = useWallet();
  const [walletLoaded, setWalletLoaded] = useState(false);

  useEffect(() => {
    if (currentWallet) {
      setWalletLoaded(true);
      const provider = new ethers.providers.InfuraProvider(
        "sepolia",
        "c1b7c53d05d546b684011e0fcad0aa36"
      );

      const fetchBalances = async () => {
        const blastBalance = await getBalance(
          currentWallet.Blast.address,
          provider
        );
        const etheriumBalance = await getBalance(
          currentWallet.Etherium.address,
          provider
        );

        setBalances({
          Blast: blastBalance,
          Etherium: etheriumBalance,
        });
      };

      fetchBalances();
    } else {
      setWalletLoaded(false);
    }
  }, [currentWallet]);

  const getBalance = async (address, provider) => {
    try {
      const balance = await provider.getBalance(address);
      return ethers.utils.formatEther(balance);
    } catch (error) {
      console.error(`Error fetching balance for ${address}:`, error);
      return "0";
    }
  };

  // Coins configuration
  const coins = {
    Blast: balances.Blast,
    Etherium: balances.Etherium,
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-10">
      {walletLoaded ? (
        <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] px-6 py-8 w-full rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="text-xl text-center font-bold flex-1 text-gray-800">
              {currentWallet.name}'s Wallet
            </h3>
          </div>
          <div className="mt-8 space-y-4">
            {selectedCoin ? (
              <ClickedCoin
                selectedCoin={selectedCoin}
                onClick={() => {
                  setSelectedCoin(null);
                }}
              />
            ) : (
              Object.entries(coins).map(([coinName, balance]) => (
                <Coin
                  key={coinName}
                  coinName={coinName}
                  balance={balance}
                  onClick={() => {
                    setSelectedCoin(coinName);
                  }}
                />
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] px-6 py-8 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 text-center text-gray-800">
          <h3 className="text-xl font-bold mb-4">No Wallet Found</h3>
          <p>Please restore or create a new wallet first.</p>
        </div>
      )}
    </div>
  );
};

export default Wallet;
