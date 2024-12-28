import Spline from "@splinetool/react-spline";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="mt-20 min-h-screen grid grid-cols-2 lg:grid-cols-1 relative w-full container place-items-center"
      style={{
        backgroundImage: "url('assets/mainBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="text-xl font-bold">Your Health, Our Mission</h1>
        <p className="text-gray-400 mt-5">
          Making Healthcare Accessible for Everyone
        </p>
        <Link to={"/strokecheckup"}>
          <div className="mt-5 px-8 py-2 rounded-full  border-2 text-custom-white  bg-custom-purple">
            Try It Out!
          </div>
        </Link>
      </div>

      <div className="relative items-start w-full lg:hidden">
        <div className="z-[100] relative right-10 w-[417px] h-[617px] border-[10px] rounded-xl border-custom-purple">
          <img
            className="  w-[400px] h-[600px]"
            src="/assets/mask.jpg"
            alt=""
          />
        </div>
        <div className="z-[50]  absolute top-[20rem] right-5 border-[10px] rounded-xl border-custom-purple">
          <img
            className=" w-[350px] h-[550px]"
            src="/assets/doctor.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
