import React from "react";

const CourseView = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primaryBlue mb-12">
          Our Courses
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Course 2 (Best Seller) - Shown first in mobile view */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-yellow-400 flex-1 max-w-sm relative">
            <h2 className="text-xl font-semibold mb-4 text-primaryBlue m-2">
              Beginner Driver Education (BDE)
            </h2>
            <p className="text-gray-600 mb-4">$695 + HST</p>

            <button className="bg-primaryBlue text-white py-2 px-4 rounded mb-2 hover:bg-bgc hover:text-primaryBlue w-full hover:border-primaryBlue border-2 border-transparent transition ease-in duration-300">
              Book Now
            </button>
            <button className="text-primaryBlue hover:underline w-full">
              Learn More
            </button>
            <hr className="border-t border-gray-300 my-4" />
            {/* Best Seller badge */}
            <div className="flex flex-col items-center text-gray-600 mb-4">
              {/* Check symbols */}
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-primaryBlue flex-shrink-0"
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
                </svg>
                <p>Payment plans available at checkout</p>{" "}
              </div>
              {/* Add more points here */}
            </div>
            <span className="absolute top-0 right-0 mt-1 mr-1 bg-yellow-400 text-white py-1 px-3 rounded-full uppercase text-xs font-semibold">
              Best Seller
            </span>
          </div>

          {/* Course 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex-1 max-w-sm relative">
            <h2 className="text-xl font-semibold mb-4">
              Hourly Driving Lessons
            </h2>
            <p className="text-gray-600 mb-4">$75/hr + HST</p>
            <button className="bg-primaryYellow text-white py-2 px-4 rounded mb-2 hover:bg-bgc hover:text-primaryBlue w-full hover:border-primaryBlue border-2 border-transparent transition ease-in duration-300">
              Book Now
            </button>
            <button className="text-primaryBlue hover:underline w-full">
              Learn More
            </button>
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex items-center text-gray-600 mb-4">
              <svg
                className="w-4 h-4 mr-2 text-primaryBlue flex-shrink-0"
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
              </svg>
              <p>Payment plans available at checkout</p>
            </div>
          </div>

          {/* Course 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex-1 max-w-sm">
            <h2 className="text-xl font-semibold mb-4">
                
            </h2>
            <p className="text-gray-600 mb-4">$295 + HST</p>

            <button className="bg-primaryYellow text-white py-2 px-4 rounded mb-2 hover:bg-bgc hover:text-primaryBlue w-full hover:border-primaryBlue border-2 border-transparent transition ease-in duration-300">
              Book Now
            </button>
            <button className="text-primaryBlue hover:underline w-full">
              Learn More
            </button>
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex items-center text-gray-600 mb-4">
              <svg
                className="w-4 h-4 mr-2 text-primaryBlue flex-shrink-0"
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
              </svg>
              <p>Payment plans available at checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
