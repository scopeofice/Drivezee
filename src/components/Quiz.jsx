import React, { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
      correctAnswer: "Mitochondria",
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Stephen King"],
      correctAnswer: "Harper Lee",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      correctAnswer: "H2O",
    },
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    setCurrentQuestion(currentQuestion + 1);
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    return (score / questions.length) * 100; // Calculate score as a percentage
  };

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-lg font-bold mb-4">Questions</h2>
        <ul>
          {questions.map((_, index) => (
            <li
              key={index}
              className={`cursor-pointer py-2 px-4 mb-2 rounded ${
                currentQuestion === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentQuestion(index)}
            >
              Question {index + 1}
            </li>
          ))}
        </ul>
      </div>
      {/* Right Side */}
      <div className="w-3/4 p-4">
        {currentQuestion < questions.length ? (
          <>
            <h1 className="text-2xl font-bold mb-4">
              {questions[currentQuestion].question}
            </h1>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mb-2 rounded"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Quiz completed!</h1>
            <p className="text-lg">
              Your score: {calculateScore().toFixed(2)}%
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded">
              Buy More Than 300 Questions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
