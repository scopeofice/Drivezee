import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const [confirmLogout, setConfirmLogout] = useState(false);

  const handleLogout = () => {
    // Clear user data from session storage
    sessionStorage.removeItem("user");
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center">
      {confirmLogout ? (
        <div className="bg-gray-200 min-h-screen flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Logout</h2>
            <p className="text-gray-700 mb-4">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded mr-2"
              >
                Confirm Logout
              </button>
              <button
                onClick={() => setConfirmLogout(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setConfirmLogout(true)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded mr-2"
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Logout;
