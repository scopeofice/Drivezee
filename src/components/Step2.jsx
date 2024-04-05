import React from "react";

const Step2 = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-primaryBlue text-center mb-12">
          Master Driving with Canada's Finest Instructors
        </h2>
        <div className="flex flex-wrap justify-center items-start gap-8">
          <div className="flex flex-col items-center text-center max-w-md">
            <div className="text-4xl text-secondaryGreen mb-4">&#x2605;</div>
            <h3 className="text-lg font-medium text-primaryBlue mb-4">
              Top-rated professionals ready for any scenario
            </h3>
            <p className="text-base text-primaryBlue mb-8">
              Our instructors are among the best in Canada, equipped to handle
              any driving situation with professionalism and expertise.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-md">
            <div className="text-4xl text-secondaryGreen mb-4">&#x2605;</div>
            <h3 className="text-lg font-medium text-primaryBlue mb-4">
              Top-rated professionals ready for any scenario
            </h3>
            <p className="text-base text-primaryBlue mb-8">
              Our instructors are among the best in Canada, equipped to handle
              any driving situation with professionalism and expertise.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-md">
            <div className="text-4xl text-secondaryGreen mb-4">&#x1F393;</div>
            <h3 className="text-lg font-medium text-primaryBlue mb-4">
              Government-certified and comprehensively insured
            </h3>
            <p className="text-base text-primaryBlue mb-8">
              Rest assured, our instructors are fully certified by the
              government and comprehensively insured for your safety and peace
              of mind.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-md">
            <div className="text-4xl text-secondaryGreen mb-4">&#x1F91D;</div>
            <h3 className="text-lg font-medium text-primaryBlue mb-4">
              Carefully selected for their patience and integrity
            </h3>
            <p className="text-base text-primaryBlue mb-8">
              We handpick instructors who not only excel in teaching but also
              demonstrate the utmost patience and integrity in every
              interaction.
            </p>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-primaryBlue text-white py-2 px-4 rounded hover:bg-bgc hover:text-primaryBlue w-[60%] hover:border-primaryBlue border-2 border-transparent transition ease-in duration-300">
            Secure Your Spot Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
