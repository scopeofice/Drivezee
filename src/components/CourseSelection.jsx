import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption
import { secretKey } from "./util/Constant";

const CourseSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center text-primaryBlue mb-12 ">
          Our Courses
          <hr className="border-t border-red-800 my-4" />
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <CourseCard
            title="Beginner Drivers Education"
            description={[
              "Best package for new drivers with or without prior driving experience.",
              "Includes 10 hours of In-Car driving lessons with a top-rated instructor.",
              "30 hours of online, self-paced learning platform (online Theory, Quizzes, and homework).",
              "Ministry Certification which helps new drivers with discounts on Auto Insurances (up to 20%), faster eligibility for road test to 8 months.",
            ]}
            price="$650 + HST"
            type="BDE"
            navigate={navigate}
          />
          <CourseCard
            title="Individual Lessons"
            description={[
              "Perfect for those seeking flexible scheduling and tailored instruction.",
              "Customize the number of hours based on your needs.",
              "Ideal for refreshing driving skills or preparing for a road test.",
            ]}
            price="$75/hr + HST"
            type="IL"
            navigate={navigate}
          />
          <CourseCard
            title="Car for Road Test"
            description={[
              "Includes a 90-minute session before your scheduled road test.",
              "Assisted by our best instructors and use of car at the local test centre.",
            ]}
            price="$295 + HST"
            type="CRT"
            navigate={navigate}
          />
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ title, description, price, type, navigate }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [numHours, setNumHours] = useState(2);
  const [needsCar, setNeedsCar] = useState(false);

  const handleSelectCourse = () => {
    setSelectedCourse(title);
    setShowPopup(true);
    if (type !== "IL") {
      setNumHours(null);
    }
    if (type === "CRT") {
      setNeedsCar(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleHoursChange = (e) => {
    setNumHours(parseInt(e.target.value));
  };

  const handleCarChange = (e) => {
    setNeedsCar(e.target.checked);
  };

 const handleCheckButton = () => {
   const selectedData = {
     title: selectedCourse,
     type: type,
     hours: numHours,
     needsCar: needsCar,
   };

   if (!selectedData.title) {
     alert("Please select a course");
     return;
   }

   // Encrypt the selected data
   const encryptedData = CryptoJS.AES.encrypt(
     JSON.stringify(selectedData),
     secretKey
   ).toString();

   // Store the encrypted data in localStorage
   localStorage.setItem("selectedData", encryptedData);

   navigate("/slotselection");
 };

  return (
    <>
      <div className="w-80 h-90 overflow-hidden">
        <div className="bg-white rounded-lg overflow-hidden shadow-md h-full border border-primaryBlue">
          <div className="p-4 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold mb-2 bg-gray-200 px-2 py-1 rounded">
                {title}
              </h2>
              <div className="">
                <p className="text-gray-800 font-semibold m-2">{price}</p>
                <button
                  className="bg-primaryBlue text-white py-2 px-4 m-2 rounded hover:bg-bgc hover:text-primaryBlue w-[100%] hover:border-primaryBlue border-2 border-transparent transition ease-in duration-300"
                  onClick={handleSelectCourse}
                >
                  Select
                </button>
              </div>
              <div className="mb-4">
                <ul className="pl-5 text">
                  {description.map((point, index) => (
                    <li key={index} className="text-gray-700">
                      <div className="text-left flex justify-items-center  ">
                        <svg
                          className="w-4 h-4 mr-2 text-primaryBlue flex-shrink-0 mt-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>{" "}
                        {point}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="flex flex-col items-center ">
            <div className="bg-white p-8 rounded-lg w-96 h-96 flex flex-col justify-center items-center">
              <h3
                className="flex items-center mb-4 cursor-pointer"
                onClick={handleClosePopup}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <strong>Back</strong>
              </h3>
              <h2 className="text-lg font-bold mb-4">{selectedCourse}</h2>
              {type === "BDE" ? (
                <div>
                  <div className="mb-4">
                    <input
                      type="checkbox"
                      id="car"
                      name="car"
                      checked={needsCar}
                      onChange={handleCarChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="car"
                      className="text-sm font-medium text-gray-700"
                    >
                      Need a car for the session?
                    </label>
                  </div>
                </div>
              ) : type === "IL" ? (
                <div>
                  <div className="mb-4">
                    <label
                      htmlFor="hours"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Number of hours:
                    </label>
                    <select
                      id="hours"
                      name="hours"
                      value={numHours}
                      onChange={handleHoursChange}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    >
                      <option value="2">2 hours</option>
                      <option value="6">6 hours</option>
                      <option value="10">10 hours</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <input
                      type="checkbox"
                      id="car"
                      name="car"
                      checked={needsCar}
                      onChange={handleCarChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="car"
                      className="text-sm font-medium text-gray-700"
                    >
                      Need a car for the session?
                    </label>
                  </div>
                </div>
              ) : (
                <p></p>
              )}
              <div className="flex flex-col w-full">
                <button
                  className="bg-primaryBlue  py-2 px-4 text-white font-bold rounded mb-2 hover:bg-bgc hover:text-primaryBlue w-[100%] hover:border-primaryBlue border-2 border-transparent transition ease-in duration-300 "
                  onClick={handleCheckButton}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseSelection;
