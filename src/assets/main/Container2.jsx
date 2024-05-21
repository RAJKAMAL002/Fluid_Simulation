import React from "react";

export const Container2 = () => {
  return (
    <div
      className=" grid grid-cols-custom-layout mt-16 max-md:grid-cols-1"
      style={{ fontFamily: ' "Sora", sans-serif' }}
    >
      <span className=" text-[18px] font-[500] max-md:text-center max-md:mb-5">
        <div className=" mb-2 custom-gradient-text">
          Transform <br /> your Website
        </div>
        <div className=" text-[#EEE5FFBD]">
          With Motion Art <br /> Effect
        </div>
      </span>
      <span className=" w-50% max-md:w-full">
        <div className=" text-[65px] font-[500] max-md:text-[40px] max-md:mb-5">
          <div className=" text-[#EEE5FFBD] mb-3 text-wrap">
            Attract Your Visitors Attention With Colorful
            <br />
            <span className="custom-gradient-text">Motion Art Effect</span>
          </div>
        </div>

        <div className=" text-[18px] text-[#EEE5FFBD]">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.
        </div>
      </span>
    </div>
  );
};
