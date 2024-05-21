import React from "react";

export const Con7_con = ({ cardData }) => {
  return (
    <div className=" bg-custom-gradient1 px-10 py-12 w-[32%] max-md:w-full max-md:my-5 rounded-2xl shadow-sm shadow-white">
      <img src={cardData.img} />
      <p className=" text-[25px] text-white font-semibold mb-5">
        {cardData.head}
      </p>
      <p className=" leading-loose">{cardData.para}</p>
    </div>
  );
};
