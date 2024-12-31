import React from "react";

const TechStack = () => {
  return (
    <div className="container mt-[10rem]">
      <h1 className="text-center text-xl font-bold text-custom-purple">
        OUR TECHSTACK
      </h1>
      <p className=" text-gray-500 text-center">
        Trying to heal people with Technologies!
      </p>

      <div className="mt-10 grid grid-cols-4 lg:grid-cols-2">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src="/logo/axios.webp" alt="" className="h-[100px] w-[100px]" />
          <h1 className="mt-4 text-center text-[16px] font-bold text-custom-purple">
            Axios
          </h1>
        </div>

        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src="/logo/flask.png" alt="" className="h-[100px] w-[100px]" />
          <h1 className="mt-4 text-center text-[16px] font-bold text-custom-purple">
            Flask
          </h1>
        </div>

        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src="/logo/react.png" alt="" className="h-[100px] w-[100px]" />
          <h1 className="mt-4 text-center text-[16px] font-bold text-custom-purple">
            React
          </h1>
        </div>

        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src="/logo/tsf.png" alt="" className="h-[100px] w-[100px]" />
          <h1 className="mt-4 text-center text-[16px] font-bold text-custom-purple">
            TensorFlow
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
