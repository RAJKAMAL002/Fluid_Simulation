import React from "react";
export const Con5_con = ({ heading, para, img }) => {
  return (
    <div className=" w-full bg-custom-gradient1 px-10 py-10 flex items-center justify-center flex-col rounded-3xl shadow-sm shadow-white">
      <div className=" text-[25px] font-semibold pb-5 w-full">
        <p className=" text-white">{heading}</p>
      </div>
      <div className=" pb-8 leading-loose">{para}</div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};
