import React from "react";

const NavBar = ({ flexBetween, selectedPage, setSelectedPage }) => {
  return (
    <header class="flex shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
      <div class="flex flex-wrap items-center justify-between gap-4 w-full">
        <div
          id="collapseMenu"
          class="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black  max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <ul class="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li class="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="/"
                class="hover:text-[#007bff] text-[#007bff] font-bold block text-base"
              >
                Home
              </a>
            </li>
            <li class="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="/etherium"
                class="hover:text-[#007bff] text-[#007bff] font-bold block text-base"
              >
                Etherium
              </a>
            </li>
            <li class="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="/celo"
                class="hover:text-[#007bff] text-[#007bff] font-bold block text-base"
              >
                Celo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
