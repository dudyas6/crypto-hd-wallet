import React from "react";
import { timeAgo } from "@/lib/utils";
import { ethers } from "ethers";
import { toast } from "react-toastify";
const copyIcon = (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"
    />
  </svg>
);

const Transaction = ({ transaction }) => {
  const etherValue = ethers.utils.formatEther(transaction.value);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Copied to clipboard");
      },
      (err) => {
        toast.error("Error copying to clipboard.");
      }
    );
  };

  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-800">
        <div className="flex items-center gap-2">
          <p className="text-ellipsis overflow-hidden whitespace-nowrap max-w-[70px]">
            {transaction.hash}
          </p>
          <button
            className="text-blue-500 hover:text-blue-700 ml-2"
            onClick={() => copyToClipboard(transaction.hash)}
          >
            {copyIcon}
          </button>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-800">
        <div className="flex items-center gap-2">
          <p className="text-ellipsis overflow-hidden whitespace-nowrap max-w-[70px]">
            {transaction.from}
          </p>
          <button
            className="text-blue-500 hover:text-blue-700 ml-2"
            onClick={() => copyToClipboard(transaction.from)}
          >
            {copyIcon}
          </button>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-800">
        <div className="flex items-center gap-2">
          <p className="text-ellipsis overflow-hidden whitespace-nowrap max-w-[70px]">
            {transaction.to}
          </p>
          <button
            className="text-blue-500 hover:text-blue-700 ml-2"
            onClick={() => copyToClipboard(transaction.to)}
          >
            {copyIcon}
          </button>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-800">{etherValue} ETH</td>
      <td className="px-4 py-4 text-sm text-gray-800">
        {timeAgo(transaction.timeStamp)}
      </td>
    </tr>
  );
};

export default Transaction;
