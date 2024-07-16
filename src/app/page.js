"use client";
import Image from "next/image";
import Menu from "../components/Menu/Menu";
import CreateWallet from "../components/CreateWallet/CreateWallet";
import bgImage from "../../assets/BG.svg";
import { useState } from "react";
export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState("Menu");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Menu":
        return <Menu setSelectedComponent={setSelectedComponent} />;
      case "CreateWallet":
        return <CreateWallet setSelectedComponent={setSelectedComponent} />;

      default:
        return <Menu />;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="bg-white grid sm:grid-cols-2 items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-6xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <div className="min-h-[580px] h-full">
          <Image
            src={bgImage}
            className="h-full object-cover"
            alt="card image"
            width={500}
            height={500}
          />
        </div>
        <div className="p-6">
          <div className="">
            <button
              onClick={() => {
                setSelectedComponent("Menu");
              }}
            >
              Return
            </button>
          </div>
          {renderComponent()}
        </div>
      </div>
    </main>
  );
}
