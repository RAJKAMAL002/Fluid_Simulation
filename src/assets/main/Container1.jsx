import React from "react";
export const Container1 = ({ img }) => {
  return (
    <div className=" flex items-center justify-between pt-10">
      <span>
        <img src={img} alt="" className=" w-[240px]" />
      </span>
      <button className=" max-md:hidden bg-white rounded-[5px] px-[38px] py-[12px] border-[1px] border-[#FFFFFF] text-[18px] font-[400] hover:bg-transparent hover:text-white duration-200">
        Purchase Now
      </button>
    </div>
  );
};
