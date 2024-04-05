import React from "react";
import header from "../../public/header.png";
import car from "../../public/car.png";

export default function Header() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 justify-between lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:text-left px-5 py-16">
        <div className="mx-10 animate-slideInLeft">
          <h1 className="text-5xl text-left items-center font-bold mb-4 text-primaryBlue ">
            Driving Made Easy?
          </h1>
          <div className="text-left">
            <span>
              Discover DriveZee, your premier destination for driving education.
              With expert instructors, flexible scheduling, and convenient
              online access, we're committed to your success on the road. Join
              us and embark on your driving journey today.
            </span>
          </div>
          <ul className="mb-5 mt-5 ml-10 list-disc text-left text-primaryBlue">
            <li>Online Virtual and In-car Lessons</li>
            <li>Hand Picked Best instructors to serve near you </li>
            <li>
              Sign-up for our BDE Course & start saving on your Auto-insurance
            </li>
          </ul>
          <button className="bg-primaryBlue text-white px-6 py-3 rounded font-bold hover:bg-bgc hover:text-primaryBlue w-[100%] hover:border-primaryBlue border-2 border-transparent transition ease-in duration-300">
            Schedule Now
          </button>
        </div>
        <div className="p-4 flex justify-center items-center animate-slideInRight">
          <img
            src={car}
            alt="driving school"
            className="w-[150%] max-w-md rounded-xl "
          />
        </div>
      </div>
      <div className="py-10 bg-gray-950">
        <h1 className="text-6xl font-bold mb-4 text-white">
          Driving School Simplified <br />
          <span className="text-primaryYellow text-3xl">
            Book Your Lessons In Just Three Simple Steps
          </span>
        </h1>
        <p className="text-xl text-slate-200 text-left">
          Find out why countless students entrust us with their driver’s
          education.
        </p>
      </div>
    </div>
  );
}
