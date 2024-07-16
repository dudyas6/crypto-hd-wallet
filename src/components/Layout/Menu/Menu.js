import React from "react";

const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-between  w-full h-full">
      <h1>Select Action</h1>
      <div className="flex flex-col">
        <button
          type="button"
          class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 transition-all duration-300"
        >
          Create Wallet
        </button>
        <button
          type="button"
          class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 transition-all duration-300"
        >
          Open Wallet
        </button>
        <button
          type="button"
          class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 transition-all duration-300"
        >
          Restore Wallet
        </button>
        {/* <button>Check Balance</button> */}
        <button
          type="button"
          class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 transition-all duration-300"
        >
          Send Signed Transaction
        </button>
      </div>
    </div>
  );
};

export default Menu;
