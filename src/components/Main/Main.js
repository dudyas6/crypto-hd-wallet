import Image from "next/image";
import Menu from "../Menu/Menu";
import CreateWallet from "../CreateWallet/CreateWallet";
import Wallet from "../Wallet/Wallet";
import bgImage from "../../../assets/BG.svg";
import { useState } from "react";

const Main = () => {
  const [selectedComponent, setSelectedComponent] = useState("Menu");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Menu":
        return <Menu setSelectedComponent={setSelectedComponent} />;
      case "CreateWallet":
        return <CreateWallet setSelectedComponent={setSelectedComponent} />;
      case "Wallet":
        return <Wallet setSelectedComponent={setSelectedComponent} />;
      default:
        return <Menu setSelectedComponent={setSelectedComponent} />;
    }
  };

  return (
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
  );
};

export default Main;
