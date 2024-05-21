import React from "react";
import img from "../../images/motionarteffect-img8.png";

export const Container6 = () => {
  return (
    <div className=" bg-custom-gradient1 mt-28 px-20 py-12 text-[#EEE5FFBD] flex flex-col justify-center items-center rounded-2xl shadow-sm shadow-white">
      <p className=" text-[28px] text-center font-semibold mb-5 text-white">
        Supported by All Popular Browsers
      </p>
      <p className=" mb-8 text-[17px] w-[40%] max-md:w-full text-center">
        Rest assured, Motion Art is designed to be compatible with all major web
        browsers.
      </p>
      <img src={img} alt="" />
    </div>
  );
};
