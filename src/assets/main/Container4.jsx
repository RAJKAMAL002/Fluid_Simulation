import React from "react";
export const Container4 = ({ wand }) => {
  return (
    <div
      className=" flex max-md:flex-col items-center text-[#EEE5FFBD] relative"
      style={{ fontFamily: ' "Sora", sans-serif' }}
    >
      <div className=" w-[60%] max-md:w-full">
        <div className=" text-[40px] font-semibold">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </div>
        <div className=" leading-loose mt-3">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </div>
        <div className=" max-md:w-full max-md:flex max-md:text-center max-md:justify-center">
          <div className=" mt-5 w-[20vw] max-md:w-[20rem] py-[16px] rounded-[20px] bg-custom-gradient flex items-center justify-center text-[20px]">
            <a href="">Purchase From Envato</a>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 max-md:relative max-md:mt-10">
        <img src={wand} alt="" />
      </div>
    </div>
  );
};
