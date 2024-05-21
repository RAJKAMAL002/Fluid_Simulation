import React from "react";
export const Container3 = ({ imgs, stars }) => {
  return (
    <div className=" py-24" style={{ fontFamily: ' "Sora", sans-serif' }}>
      <p className=" text-[#EEE5FFBD] text-center pb-20 max-md:pb-10 text-[20px] font-semibold">
        Trusted by thousands of users around the world
      </p>
      <div className=" grid grid-cols-3 max-md:grid-cols-1">
        {imgs.map((img) => {
          return (
            <span className=" flex justify-self-center items-center max-md:my-5 ">
              <img src={img} alt="" />
              <div className=" pl-3">
                <img className=" pb-3" src={stars} alt="" />
                <div className=" text-[#EEE5FFBD] text-[14px]">
                  4.5 Score, 9 Reviews
                </div>
              </div>
            </span>
          );
        })}
      </div>
    </div>
  );
};
