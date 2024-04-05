// MenuPopup.js
import React from "react";
import { Link } from "react-router-dom";

const MenuPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/instructorslist"
              className="text-blue-600 hover:text-blue-800"
            >
              Instructors
            </Link>
          </li>
          <li>
            <Link to="/users" className="text-blue-600 hover:text-blue-800">
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/transactions"
              className="text-blue-600 hover:text-blue-800"
            >
              Transactions
            </Link>
          </li>
          <li>
            <Link to="/bde" className="text-blue-600 hover:text-blue-800">
              BDE
            </Link>
          </li>
          <li>
            <Link to="/il" className="text-blue-600 hover:text-blue-800">
              IL
            </Link>
          </li>
          <li>
            <Link to="/crt" className="text-blue-600 hover:text-blue-800">
              CRT
            </Link>
          </li>
        </ul>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MenuPopup;
