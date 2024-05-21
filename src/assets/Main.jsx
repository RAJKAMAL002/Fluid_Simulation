import React, { useContext } from "react";
import img2 from "../images/motionarteffect-img1.png";
import img1 from "../images/motionarteffect-img2.png";
import img3 from "../images/motionarteffect-img3.png";
import wand from "../images/motionarteffect-img5.png";
import stars from "../images/motionarteffect-img4.png";
import logo from "../images/MotionArtEffect-logo.png";
import secImg from "../images/motionarteffect-img11.png";
import pageImg from "../images/motionarteffect-img10.png";
import { Container1 } from "./main/Container1";
import { Container2 } from "./main/Container2";
import { Container3 } from "./main/Container3";
import { Container4 } from "./main/Container4";
import { Container5 } from "./main/Container5";
import { contextData } from "../../Context/Context";
import { Container6 } from "./main/Container6";
import { Container7 } from "./main/Container7";
export const Main = () => {
  return (
    <div className=" bg-black h-full min-h-screen flex justify-center">
      <div className=" w-[80%] max-md:w-[90%]">
        <contextData.Provider value={[secImg, pageImg]}>
          <Container1 img={logo} />
          <Container2 />
          <Container3 imgs={[img1, img2, img3]} stars={stars} />
          <Container4 wand={wand} />
          <Container5 />
          <Container6 />
          <Container7 />
        </contextData.Provider>
      </div>
    </div>
  );
};
