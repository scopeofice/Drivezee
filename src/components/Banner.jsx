import React from "react";
import step1 from "../../public/step1.mp4";

export default function Banner() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 justify-between lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:text-left px-5 py-16">
        <div className="p-4 flex justify-center items-center">
          <div
            className="py-10 rounded border border-Sky"
            style={{ boxShadow: "8px 8px 0px 0px rgba(34, 158, 188, 0.5)", backgroundColor: "#023047" }}
          >
            <h1 className="text-6xl font-bold mb-4 text-Sky"> {/* Applying Sky Color */}
              Book lessons <br /> in three easy steps
            </h1>
            <p className="text-xl ml-3 mr-3 text-Sky"> {/* Applying Sky Color */}
              See why thousands of students are choosing us for their driver’s
              education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
