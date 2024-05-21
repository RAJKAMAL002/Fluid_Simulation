import React from "react";
import { pagaLogo } from "./pagaLogo";
export const Navbar = () => {
  return (
    <div className=" bg-[#262626] flex items-center h-[54px] relative">
      <span className="pl-[18px]">
        <span>
          <pagaLogo />
        </span>
        <span>
          <span className=" text-white">envato</span>
          <span className=" text-[#82b440]">market</span>
        </span>
      </span>
      <span>
        <a
          href=""
          className=' bg-[#82b440] hover:bg-[#6f9a37] text-[14px] py-[5px] px-[20px] rounded-[4px] text-[white] absolute right-[18px] cursor-pointer text-center bottom-3 font-semibold font-["Helvetica Neue", Helvetica, Arial, sans-serif]'
        >
          Buy now
        </a>
      </span>
    </div>
  );
};
