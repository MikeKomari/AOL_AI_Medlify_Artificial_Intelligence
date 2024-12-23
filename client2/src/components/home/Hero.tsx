import Spline from "@splinetool/react-spline";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-20 min-h-screen flex justify-center items-center relative w-full">
      <div>
        <h1>Your Health, Our Mission</h1>
        <p>Making Healthcare Accessible for Everyone</p>
      </div>
      <div className="absolute w-full h-full">
        <Spline scene="https://prod.spline.design/PbuiihIc1IahRRgo/scene.splinecode" />
      </div>

      <div></div>
    </div>
  );
};

export default Hero;
