import React, { createContext, useState, useEffect, useContext } from "react";
const { ethers } = require("ethers");
import CryptoJS from "crypto-js";

const WalletContext = createContext();

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export const SessionProvider = ({ children }) => {
  const [currentWallet, setCurrentWallet] = useState(null);

  const createWallet = async (pass) => {
    const wallet = ethers.Wallet.createRandom();
    const mnemonic = wallet.mnemonic.phrase;

    const ethWallet0 = ethers.Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/0");
    const ethWallet1 = ethers.Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/1");

    encryptWallet("eth0", ethWallet0, pass);
    encryptWallet("eth1", ethWallet1, pass);

    return mnemonic;
  };

  const encryptWallet = (name, wallet, pass) => {
    const encryptedPrivateKey = CryptoJS.AES.encrypt(
      wallet.privateKey,
      pass
    ).toString();

    localStorage.setItem(name + "-private-key", encryptedPrivateKey);
    localStorage.setItem(name + "-address", wallet.address);
    setCurrentWallet((prevWallet) => ({
      ...prevWallet,
      [name]: {
        address: wallet.address,
        key: wallet.privateKey,
      },
    }));
    return;
  };

  const decryptWallet = (name, pass) => {
    const encryptedPrivateKey = localStorage.getItem(name + "-private-key");
    let decryptedPrivateKey = null;
    if (encryptedPrivateKey) {
      const bytes = CryptoJS.AES.decrypt(encryptedPrivateKey, pass);
      decryptedPrivateKey = bytes.toString(CryptoJS.enc.Utf8);
    }
    return decryptedPrivateKey;
  };

  return (
    <WalletContext.Provider
      value={{
        currentWallet,
        createWallet,
        decryptWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
export default SessionProvider;
