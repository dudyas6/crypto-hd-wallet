import React, { useEffect, useState } from "react";
import { useWallet } from "@/lib/sessionContext";
import Transaction from "./Transaction";

const TransactionsTable = ({ selectedCoin }) => {
  const { transactionHistory } = useWallet();
  useEffect(() => {}, [transactionHistory]);

  return (
    <div className="font-[sans-serif] overflow-x-auto overflow-y-auto max-h-[250px]">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Hash
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              From
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              To
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Age
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
          {transactionHistory[selectedCoin] &&
          transactionHistory[selectedCoin].length > 0 ? (
            transactionHistory[selectedCoin].map((transaction, index) => (
              <Transaction key={index} transaction={transaction} />
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="px-4 py-4 text-center text-sm text-gray-500"
              >
                No transactions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
