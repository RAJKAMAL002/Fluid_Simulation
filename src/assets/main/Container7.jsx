import React from "react";
import img2 from "../../images/motionarteffect-img6.png";
import img3 from "../../images/motionarteffect-img7.png";
import img1 from "../../images/motionarteffect-img9.png";
import { Con7_con } from "./con5/Con7_con";
const Imgarr = [
  {
    img: img1,
    head: "Light Weight",
    para: "Motion Art for Elementor is designed to be lightweight.",
  },
  {
    img: img2,
    head: "100% Responsive",
    para: "Create a consistent visual experience across all devices.",
  },
  {
    img: img3,
    head: "User Friendly Interface",
    para: "Ensure a smooth experience for both applicants and administrators.",
  },
];

export const Container7 = () => {
  return (
    <div
      className=" flex items-center text-[#EEE5FFBD] relative my-32 flex-col"
      style={{ fontFamily: ' "Sora", sans-serif' }}
    >
      <p className=" text-[35px] max-md:w-full text-white font-semibold w-[50%] text-center mb-5">
        An All-Round Plugin With Powerful Features
      </p>
      <p className=" w-[55%] max-md:w-full text-center mb-16 leading-loose">
        Whether you're a seasoned web designer or just starting out, Motion Art
        for Elementor seamlessly integrates with the Elementor platform,
        providing you with a seamless and intuitive experience.
      </p>
      <div className=" flex justify-between items-center max-md:flex-col">
        {Imgarr.map((card) => {
          return <Con7_con cardData={card} />;
        })}
      </div>
    </div>
  );
};
