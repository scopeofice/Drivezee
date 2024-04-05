import React from "react";
import banner from "../../public/bde-banner.svg"; // Import the image

export default function IndividualLessons() {
  return (
    <div className="mt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primaryBlue mb-6">
          Individual Lessons
        </h1>
        <img src={banner} className="p-5 justify-center" />{" "}
        <div className="bg-primaryBlue shadow-md rounded-lg p-8">
          {/* Image added here */}
          <h2 className="text-5xl font-bold text-primaryYellow mb-4">
            Boost Your Confidence with Individual Lessons
          </h2>
          <p className="text-white text-xl mb-6">
            Looking to take refresher lessons to boost confidence, clarity of
            road/traffic rules, or preparing for the road test? Our team of
            expert instructors are here to help you achieve your goal.
          </p>
          <ul className="list-disc pl-6 mb-6 text-left text-white">
            <li className="mb-2">
              Personalized instruction tailored to your specific needs
            </li>
            <li className="mb-2">
              Flexible scheduling to fit your busy lifestyle
            </li>
            <li className="mb-2">
              Expert guidance to improve your driving skills and confidence
            </li>
            <li className="mb-2">
              Focused training to clarify road and traffic rules
            </li>
          </ul>
          <p className="font-bold text-3xl text-primaryYellow">
            Get Started Today!
          </p>
          <button className="bg-white text-primaryBlue py-2 px-4 rounded mt-6  hover:bg-primaryBlue hover:text-white w-[50vw] hover:border-white border-2 border-transparent transition ease-in duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
