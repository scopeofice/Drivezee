import React, { useState } from "react";
import down from "../../public/down.svg";
import bars from "../../public/bars.svg";
import close from "../../public/close.svg";
import { Link } from "react-router-dom";

export default function NavbarSm({ logoDrivezee }) {
  const [toggle, setToggle] = useState(false);

  const switchToggle = () => {
    setToggle(!toggle);
  };

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
    <>
      <div className="relative 2xl:hidden xl:hidden lg:block ">
        <div className="flex justify-between">
          <Link path="/">
            <img src={logoDrivezee} alt="logo" className="w-40 py-1" />
          </Link>
          {toggle ? (
            <img
              src={close}
              alt="bars"
              className="w-7"
              onClick={switchToggle}
            />
          ) : (
            <img src={bars} alt="bars" className="w-7" onClick={switchToggle} />
          )}
        </div>
        <div className="overflow-hidden ">
          <div
            id="list"
            className={`w-[50vw] border border-gray-300  ${
              toggle
                ? "transition-transform duration-500 transform -translate-x-[-40vw] "
                : "transition-transform duration-500 transform translate-x-[100vw]"
            }`}
          >
            <ul className="text-left ml-3">
              <li
                className="flex items-start mr-5 text-lg py-2 px-4  relative flex-col"
                onClick={toggleServicesMenu}
              >
                <div className="hover:text-secondaryGreen flex items-center ">
                  <span>Services</span>
                  <span
                    className={`ml-2 transition-transform transform ${
                      showServicesMenu ? "rotate-180" : ""
                    } duration-200 ease-in-out`}
                  >
                    <img src={down} alt="down" />
                  </span>
                </div>
                {showServicesMenu && (
                  <div className="relative bg-white top-full left-0 w-full ">
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                        <Link to="/service1">Service 1</Link>
                      </li>
                      <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                        <Link to="/service2">Service 2</Link>
                      </li>
                      <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                        <Link to="/service3">Service 3</Link>
                      </li>
                      <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                        <Link to="/service4">Service 4</Link>
                      </li>
                      <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                        <Link to="/service5">Service 5</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li
                className="flex items-start mr-5 text-lg py-2 px-4  relative flex-col"
                onClick={toggleCitiesMenu}
              >
                <div className="hover:text-secondaryGreen flex items-center ">
                  <span>Cities</span>
                  <span
                    className={`ml-2 transition-transform transform ${
                      showCitiesMenu ? "rotate-180" : ""
                    } duration-200 ease-in-out`}
                  >
                    <img src={down} alt="down" />
                  </span>
                </div>
                {showCitiesMenu && (
                  <div className="relative bg-white top-full left-0 w-full ">
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
              <li className="text-lg py-2 hover:bg-secondaryGreen hover:text-white text-white font-bold rounded">
                <div className="flex py-1 px-2 justify-center ml-3 w-20 bg-secondaryGreen hover:bg-primaryBlue hover:text-white font-bold rounded">
                  <Link to="/register">Signup</Link>
                </div>
              </li>
              <li className="mr-5 text-lg py-2 px-4 hover:text-secondaryGreen">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
