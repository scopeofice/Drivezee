import React from "react";
import step1 from "../../public/1.png";
import step2 from "../../public/2.png";
import step3 from "../../public/3.png";

export default function EffecortLessBooking() {
  return (
    <div className="">
      <div className="pl-10 w-[full] absolute">
        <span className="text-white  text-9xl text-opacity-20 text-right">
          01
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 justify-between items-center bg-primaryBlue lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:text-left px-16 py-16">
        <div className="mx-10">
          <h1 className="text-4xl text-left items-center font-bold mb-4 text-white">
            Sign up to select your preferred location and instructor.
            <br />
          </h1>
        </div>
        <div className="p-4 flex justify-center items-center">
          <img
            src={step1}
            alt="driving school"
            className="w-[50%] max-w-md rounded-xl shadow-md"
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4 justify-between bg-primaryYellow items-center lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:text-left px-5 py-16">
          <div className="p-4 flex justify-center items-center">
            <img
              src={step2}
              alt="driving school"
              className=" w-[50%] max-w-md rounded-xl shadow-md"
            />
          </div>
          <div className="pl-10 w-[full] absolute justify-start">
            <span className="text-primaryBlue  text-9xl text-opacity-20 text-right">
              02
            </span>
          </div>
          <div className="mx-10">
            <h1 className="text-4xl text-left items-center font-bold mb-4 text-primaryBlue">
              Start booking lessons instantly with on-demand scheduling.
              <br />
            </h1>
          </div>
        </div>
      </div>{" "}
      <div className="grid grid-cols-2 gap-4 justify-between items-center lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:text-left px-5 py-16">
        <div className="mx-10">
          <h1 className="text-4xl text-left items-center font-bold mb-4 text-primaryBlue">
            Get behind the wheel with ease and convenience.
            <br />
          </h1>
        </div>
        <div className="p-4 flex justify-center items-center">
          <img
            src={step3}
            alt="driving school"
            className="w-[30%] max-w-md rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
