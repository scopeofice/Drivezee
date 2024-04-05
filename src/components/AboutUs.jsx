import React from "react";
import Step2 from "./Step2";
import Faq from "./Faq";
import banner from "../../public/aboutBanner.jpg";
import logo from "../../public/logo.png";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16 mt-20">
      {/* Banner with text */}
      <div className="relative">
        <img
          className="w-full h-64 object-cover animate-slideInDown"
          src={banner}
          alt="Banner"
        />
        <div className="absolute inset-0 flex items-center justify-start px-8">
          <h1 className="text-primaryBlue text-4xl font-bold text-left animate-fadeIn ">
            Drivezee !, an online driving school <br />
            in Toronto, Canada
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <h1 className="text-primaryBlue text-4xl font-bold animate-slideInDown">
            About Us
          </h1>
          <div className="bg-white rounded-lg p-6">
            <p className="text-gray-700 mb-6 text-xl text-left animate-slideInRight">
              Drivezee is revolutionizing the way new drivers learn to navigate
              the roads. Our hand-picked, MTO certified instructors are
              dedicated to providing the best learning experience behind the
              wheel, instilling confidence, clarity about road/traffic rules,
              and essential defensive driving skills. Our lessons are designed
              to be fun, informative, and progressive, ensuring a top-notch
              learning experience for every student.
            </p>
            {/* Centered logo */}
            <div className="flex justify-center mb-4">
              <img
                className="object-cover animate-slideInLeft"
                src={logo}
                alt="Logo"
              />
            </div>
            <p className="text-gray-700 mb-6 text-xl text-left animate-slideInRight">
              As consultants, we go beyond just helping our students obtain
              their licenses. We provide valuable insights and tips for
              navigating the roads even after they're licensed.
            </p>
            <p className="text-gray-700 mb-6 text-xl text-left animate-slideInLeft">
              Our mission is to cultivate safe drivers who prioritize the
              well-being of other motorists, anticipate potential hazards, and
              drive with vigilance. By imparting safe driving habits, we aim to
              create safer roads for our communities.
            </p>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
};

export default AboutUs;
