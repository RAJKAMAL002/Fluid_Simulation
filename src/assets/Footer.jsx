import React from "react";

export const Footer = () => {
  return (
    <div className=" flex items-center max-md:flex-col-reverse relative h-14 bg-custom-gradient text-[#EEE5FFBD] text-[14px] max-md:justify-center">
      <p className=" ml-[10rem] max-md:ml-[0rem]">
        © 2023 Copywrite. All rights reserved by QodeMatrix
      </p>
      <div className=" flex items-center max-md:relative max-md:right-0 absolute right-40 justify-between w-[12%] max-md:w-[25%] max-md:mb-[5px]">
        <span>Documentation</span>
        <span>Support</span>
      </div>
    </div>
  );
};
