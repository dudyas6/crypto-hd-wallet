import React, { useEffect, useState } from "react";
import { useWallet } from "@/lib/sessionContext";
const { ethers } = require("ethers");
const SendForm = ({ selectedCoin, balance }) => {
  const [coinAmount, setCoinAmount] = useState("");
  const [usdAmount, setUsdAmount] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const { submitTransaction } = useWallet();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitTransaction(selectedCoin, receiverAddress, coinAmount);
    } catch (error) {
      console.error("Error processing transaction:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="font-[sans-serif] m-6 max-w-4xl mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="grid sm:grid-cols-2 gap-10">
        <div className="relative flex items-center sm:col-span-2">
          <label className="text-[13px] bg-white border text-black absolute px-2 top-[-10px] left-[18px]">
            Receiver address
          </label>
          <input
            type="text"
            value={receiverAddress}
            onChange={(e) => setReceiverAddress(e.target.value)}
            placeholder="Enter receiver address"
            className="px-4 py-3.5 bg-gray-100 text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          />
        </div>

        <div className="relative flex items-center">
          <label className="text-[13px] border bg-white text-black absolute px-2 top-[-10px] left-[18px]">
            Coin Amount
          </label>
          <input
            type="number"
            value={coinAmount}
            onChange={(e) => setCoinAmount(e.target.value)}
            placeholder="Enter amount"
            step={0.000000000000001}
            min="0"
            className="px-4 py-3.5 bg-gray-100 text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          />
        </div>

        <div className="relative flex items-center sm:col-span-1">
          <label className="text-[13px] border bg-white text-black absolute px-2 top-[-10px] left-[18px]">
            USD Amount
          </label>
          <input
            type="number"
            value={usdAmount}
            onChange={(e) => setUsdAmount(e.target.value)}
            placeholder="Enter amount"
            min="0"
            className="px-4 py-3.5 bg-gray-100 text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className={`mt-8 px-6 py-2.5 text-sm rounded transition-all ${
          loading
            ? "bg-blue-500 text-white opacity-70 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        disabled={loading}
      >
        {loading ? "Sending Transaction..." : "Submit Transaction"}
      </button>
    </form>
  );
};

export default SendForm;
