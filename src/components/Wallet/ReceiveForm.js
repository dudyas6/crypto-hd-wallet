import React, { useState } from "react";
import { useWallet } from "@/lib/sessionContext";
import QRCode from "qrcode.react";
import SendForm from "./SendForm";

const ReceiveForm = ({ selectedCoin }) => {
  const { currentWallet } = useWallet();
  const address = currentWallet[selectedCoin]?.address || "";
  return (
    <div className="mt-4">
      <div className="text-center font-semibold mb-2">
        Your {selectedCoin} receiving address:
      </div>
      <p className="text-center">{address}</p>
      <div className="mt-4 flex justify-center">
        {address && <QRCode value={address} size={128} level="H" />}
      </div>
    </div>
  );
};

export default ReceiveForm;
