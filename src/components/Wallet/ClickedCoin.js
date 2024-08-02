import React, { useState } from "react";
import SendForm from "./SendForm";
import ReceiveForm from "./ReceiveForm";
import TransactionsTable from "./TransactionsTable";

const ClickedCoin = ({ selectedCoin, balance, onClick }) => {
  const [selectedTab, setSelectedTab] = useState("receive");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="relative p-4 border rounded-lg bg-white overflow-auto">
      <button
        onClick={onClick}
        className="absolute top-4 left-4 px-2 py-2 rounded-3xl bg-blue-500 text-white  flex justify-center"
      >
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
      </button>

      <h4 className="text-lg text-center font-bold ">{selectedCoin}</h4>
      <h3 className="font-semibold text-center dark:text-black mb-4">
        <span style={{ color: "gray" }}>Balance: </span>
        {balance} ETH
      </h3>

      <ul className="flex gap-2 bg-gray-100 rounded-2xl p-1 w-max mx-auto flex-col md:flex-row md:gap-4">
        <div className="flex flex-row">
          <li
            className={`text-white-600 rounded-2xl font-semibold text-center text-sm py-3 px-6 tracking-wide cursor-pointer ${
              selectedTab === "receive"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleTabClick("receive")}
          >
            Receive
          </li>
          <li
            className={`text-white-600 rounded-2xl font-semibold text-center text-sm py-3 px-6 tracking-wide cursor-pointer ${
              selectedTab === "send" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleTabClick("send")}
          >
            Send
          </li>
        </div>
        <li
          className={`text-white-600 rounded-2xl font-semibold text-center text-sm py-3 px-6 tracking-wide cursor-pointer ${
            selectedTab === "transactions"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("transactions")}
        >
          Transactions
        </li>
      </ul>

      <div
        style={{ height: "250px" }}
        className="mt-4 text-center text-gray-700"
      >
        {selectedTab === "receive" && (
          <ReceiveForm selectedCoin={selectedCoin} />
        )}
        {selectedTab === "send" && (
          <SendForm selectedCoin={selectedCoin} balance={balance} />
        )}

        {selectedTab === "transactions" && (
          <TransactionsTable selectedCoin={selectedCoin} balance={balance} />
        )}
      </div>
    </div>
  );
};

export default ClickedCoin;
