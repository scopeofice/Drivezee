import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item relative mb-8 px-5 mt-2">
      <button
        className="flex justify-between items-center w-full bg-gray-200 text-gray-700 p-8 rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        <div className="hover:text-secondaryGreen flex items-center">
          <span
            className={`ml-2 transition-transform transform ${
              isOpen ? "rotate-180" : ""
            } duration-200 ease-in-out`}
          >
            <FaAngleDown />
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 z-10 top-10 bg-white rounded-md shadow-md p-4 mt-12">
          <p className="text-lg">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <div className="space-y-4 items-center justify-center w-full mx-auto mb-5">
      <div className="flex justify-center">
        <div className="w-[80%]">
          <FaqItem question="Question 1?" answer="Answer 1." />
          <FaqItem question="Question 2?" answer="Answer 2." />
          <FaqItem question="Question 3?" answer="Answer 3." />
          <FaqItem question="Question 4?" answer="Answer 4." />
          <FaqItem question="Question 5?" answer="Answer 5." />
        </div>
      </div>
    </div>
  );
};

export default Faq;
