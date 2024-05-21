import React, { useContext } from "react";
import { Con5_con } from "./con5/Con5_con";
import { contextData } from "../../../Context/Context";

export const Container5 = () => {
  const a = useContext(contextData);
  return (
    <div
      className=" flex items-center text-[#EEE5FFBD] relative mt-28 flex-col"
      style={{ fontFamily: ' "Sora", sans-serif' }}
    >
      <div className=" text-[40px] font-semibold w-full flex justify-center mb-20">
        <p className="text-center w-[55%] max-md:w-full text-white">
          Apply On Any Section Or Enable For Whole Page
        </p>
      </div>
      <div className="w-full">
        <div className=" w-full flex max-md:flex-col justify-between">
          <div className=" w-[49%] max-md:w-full">
            <Con5_con
              heading={"Apply On Section"}
              para={
                "Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. "
              }
              img={a[0]}
            />
          </div>
          <div className="w-[49%] max-md:w-full mt-20 max-md:mt-10">
            <Con5_con
              heading={"Apply On Page"}
              para={
                "Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation. "
              }
              img={a[1]}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
