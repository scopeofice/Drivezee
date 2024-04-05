import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarLg({ logoDrivezee }) {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showCitiesMenu, setShowCitiesMenu] = useState(false);

  const toggleServicesMenu = () => {
    setShowServicesMenu(!showServicesMenu);
    setShowCitiesMenu(false);
  };

  const toggleCitiesMenu = () => {
    setShowCitiesMenu(!showCitiesMenu);
    setShowServicesMenu(false);
  };

  return (
    <div className="shadow-lg fixed top-0 left-0 right-0 bg-white z-50">
      <div className="relative lg:hidden m-2">
        <div className="flex justify-between align-middle">
          <Link to="/">
            <img src={logoDrivezee} alt="logo" className="w-60 py-1" />
          </Link>
          <div className="w-[80vw] flex justify-end">
            <ul className="flex align-baseline  ">
              <li
                className="flex items-center mr-5 text-lg py-2 px-4  cursor-pointer relative"
                onClick={toggleServicesMenu}
              >
                <div className="hover:text-secondaryGreen flex items-center ">
                  <span>Services</span>
                  <span
                    className={`ml-2 transition-transform transform ${
                      showServicesMenu ? "rotate-180" : ""
                    } duration-200 ease-in-out`}
                  >
                    <FaAngleDown />
                  </span>
                </div>
                {showServicesMenu && (
                  <div className="absolute bg-white shadow-md top-full left-0 w-[300px] z-10 animate-fadeIn">
                    <ul className="py-2 text-left">
                      <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                        <Link to="/bde">Beginner Driver Education (BDE)</Link>
                      </li>
                      <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                        <Link to="/il">Hourly Driving Lessons</Link>
                      </li>
                      <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                        <Link to="/service3">Vehicle for Road Test</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="flex items-center mr-5 text-lg py-2 px-4  cursor-pointer relative"
                onClick={toggleCitiesMenu}
              >
                <div className="hover:text-secondaryGreen flex items-center ">
                  <span>Cities</span>
                  <span
                    className={`ml-2 transition-transform transform ${
                      showCitiesMenu ? "rotate-180" : ""
                    } duration-200 ease-in-out`}
                  >
                    <FaAngleDown />
                  </span>
                </div>
                {showCitiesMenu && (
                  <div className="absolute bg-white shadow-md top-full left-0 w-full z-10 animate-fadeIn">
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                        <Link to="/city1">City 1</Link>
                      </li>
                      <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                        <Link to="/city2">City 2</Link>
                      </li>
                      <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                        <Link to="/city3">City 3</Link>
                      </li>
                      <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                        <Link to="/city4">City 4</Link>
                      </li>
                      <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                        <Link to="/city5">City 5</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="mr-5 text-lg py-2 px-4 hover:text-secondaryGreen">
                <Link to="/aboutus">About Us</Link>
              </li>
              <li className="mr-5 text-lg py-2 px-4 hover:text-secondaryGreen">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="mr-5 text-lg py-2 px-4 bg-primaryBlue hover:bg-secondaryGreen hover:text-white text-white font-bold rounded">
                <Link to="/register">Signup</Link>
              </li>
              <li className="mr-5 text-lg py-2 px-4 hover:text-secondaryGreen">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
