import React from "react";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
  handleViewHome,
  handleViewProfile,
  handleViewTransactions,
  handleViewChangePassword,
  handleLogout,
}) => {
  const mainContentClass = isSidebarOpen ? "mr-64" : "";

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 bg-gray-800 text-white w-64 h-full py-6 px-4 transition-all duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-2xl font-bold mt-10">Dashboard</h2>
        <ul className="mt-6">
          <li className="mb-4" onClick={handleViewHome}>
            <button className="block w-full py-2 px-4 rounded-md bg-gray-900 hover:bg-gray-700">
              Home
            </button>
          </li>
          <li className="mb-4" onClick={handleViewProfile}>
            <button className="block w-full py-2 px-4 rounded-md bg-gray-900 hover:bg-gray-700">
              Profile
            </button>
          </li>
          <li className="mb-4" onClick={handleViewTransactions}>
            <button className="block w-full py-2 px-4 rounded-md bg-gray-900 hover:bg-gray-700">
              All Transactions
            </button>
          </li>
          <li className="mb-4" onClick={handleViewChangePassword}>
            <button className="block w-full py-2 px-4 rounded-md bg-gray-900 hover:bg-gray-700">
              Change Password
            </button>
          </li>
          <li>
            <button
              className="block w-full py-2 px-4 rounded-md bg-red-600 hover:bg-red-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      {/* Main content */}
      <div className={`mr-0 ${mainContentClass} transition-all duration-300`}>
        {/* Your main content components here */}
      </div>
    </div>
  );
};

export default Sidebar;
