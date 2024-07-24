import React, { useState } from "react";
import { useWallet } from "@/lib/sessionContext";
import QRCode from "qrcode.react";

const ClickedCoin = ({ selectedCoin, onClick }) => {
  // State to manage the currently selected tab
  const [selectedTab, setSelectedTab] = useState("receive");
  const { currentWallet } = useWallet();

  // Handler for tab clicks
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const address = currentWallet[selectedCoin]?.address || "";

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      <h4 className="text-lg text-center font-bold mb-4">{selectedCoin}</h4>

      {/* Tabs */}
      <ul className="flex gap-4 bg-gray-100 rounded-2xl p-1 w-max mx-auto">
        <li
          className={`text-white-600 rounded-2xl font-semibold text-center text-sm py-3 px-6 tracking-wide cursor-pointer ${
            selectedTab === "receive" ? "bg-blue-600 text-white" : "bg-gray-200"
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
      </ul>

      <div className="mt-4 text-center text-gray-700">
        {selectedTab === "receive" && (
          <div className="mt-4">
            <div className="text-center font-semibold mb-2">
              Your {selectedCoin} receiving address:
            </div>
            <p className="text-center">{address}</p>
            {/* QR Code */}
            <div className="mt-4 flex justify-center">
              {address && (
                <QRCode
                  value={address}
                  size={128} // Size of the QR code
                  level="H" // Error correction level
                />
              )}
            </div>
          </div>
        )}
        {selectedTab === "send" && <div></div>}
      </div>

      <button
        onClick={onClick}
        className="mt-4 px-4 py-2 bg-blue-500 w-full text-white rounded flex justify-center"
      >
        Return to Wallet
      </button>
    </div>
  );
};

export default ClickedCoin;
