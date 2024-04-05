import React from "react";

export default function ItemContainer() {
  return (
    <div className="grid grid-cols-4 gap-0 ml-20 mr-20 lg:grid-cols-2 sm:grid-cols-1 sm:text-left px-5 py-16">
      <div>
        <ul>
          <li>
            <img
              src="../../public/logo.png"
              alt="logo"
              className="bg-white rounded-lg overflow-hidden"
            />
          </li>
          <li className="text-primaryBlue">Kruzee</li>
        </ul>
      </div>

      <div>
        <ul className="text-center">
          <li className="mb-2 hover:text-primarySky hover:cursor-pointer">
            <strong>Services</strong>
          </li>
          <li className="mb-2 hover:text-primarySky hover:cursor-pointer">
            Service 1
          </li>
          <li className="mb-2 hover:text-primarySky hover:cursor-pointer">
            Service 2
          </li>
          <li className="mb-2 hover:text-primarySky hover:cursor-pointer">
            Service 3
          </li>
        </ul>
      </div>

      <div>
        <ul className="text-center">
          <li className="mb-2 hover:text-primarySky hover:cursor-pointer">
            <strong>Company</strong>
          </li>
          <li className="mb-2 hover:text-primarySky hover:cursor-pointer">
            About Us
          </li>
          <li className="mb-2 hover:text-primarySky hover:cursor-pointer">
            Blog
          </li>
        </ul>
      </div>
      <div>
        <ul className="text-center">
          <li className="mb-2 hover:text-primarySky hover:cursor-pointer">
            <strong>Contact</strong>
          </li>
          <li className="mb-2 hover:text-primarySky hover:cursor-pointer">
            +91 123456789
          </li>
          <li className="mb-2 hover:text-primarySky hover:cursor-pointer">
            sample@gmail.com
          </li>
          <li className="mb-2 hover:text-primarySky hover:cursor-pointer">
            104 Crockford Blvd Scarborough, Ontario
          </li>
        </ul>
      </div>
    </div>
  );
}
