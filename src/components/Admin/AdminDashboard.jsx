import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuPopup from "./MenuPopup";


const AdminDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const session = sessionStorage.getItem("admin");
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /admin if session is not set
    if (!session) {
      navigate("/admin");
    }
  }, [session, navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      // Clear session and redirect to /admin
      sessionStorage.removeItem("admin");
      navigate("/admin");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/instructorslist" className="dashboard-card">
            <div className="flex items-center justify-center h-20 bg-blue-500 text-white rounded-lg shadow-lg">
              Instructors
            </div>
          </Link>
          <Link to="/userslist" className="dashboard-card">
            <div className="flex items-center justify-center h-20 bg-green-500 text-white rounded-lg shadow-lg">
              Users
            </div>
          </Link>
          <Link to="/allbookings" className="dashboard-card">
            <div className="flex items-center justify-center h-20 bg-yellow-500 text-white rounded-lg shadow-lg">
              Bookings
            </div>
          </Link>
          <Link to="/bde" className="dashboard-card">
            <div className="flex items-center justify-center h-20 bg-purple-500 text-white rounded-lg shadow-lg">
              BDE
            </div>
          </Link>
          <Link to="/il" className="dashboard-card">
            <div className="flex items-center justify-center h-20 bg-red-500 text-white rounded-lg shadow-lg">
              IL
            </div>
          </Link>
          <Link to="/crt" className="dashboard-card">
            <div className="flex items-center justify-center h-20 bg-indigo-500 text-white rounded-lg shadow-lg">
              CRT
            </div>
          </Link>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
