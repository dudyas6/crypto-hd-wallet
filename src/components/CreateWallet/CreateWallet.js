import React, { useState } from "react";

const CreateWallet = ({ setSelectedComponent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-center font-bold">Create a Wallet</h1>
        <form class="space-y-4 font-[sans-serif] max-w-md mx-auto">
          <input
            type="username"
            placeholder="Enter Username"
            class="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded"
          />

          <input
            type="password"
            placeholder="Enter Password"
            class="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded"
          />

          <button
            type="button"
            class="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateWallet;
