import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL,API_KEY } from "../components/util/Constant";

function ChangePassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "", // Replace "user_id" with the actual user ID
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const storedUsers = sessionStorage.getItem("users");
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      if (parsedUsers && parsedUsers.id) {
        setFormData((prevState) => ({
          ...prevState,
          id: parsedUsers.id,
        }));
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      setErrorMessage("New password and confirm password do not match.");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000); // Clear error message after 5 seconds
      return;
    }


    try {
      const changePasswordResponse = await axios.post(API_URL, {
        action: "change_password",
        key: API_KEY,
        ...formData,
      });

      if (!changePasswordResponse.data.error) {
        alert("Password Changed Successfully");
        handleView("Home");
        setFormData({
          ...formData,
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        setErrorMessage(
          changePasswordResponse.data.message || "Failed to change password"
        );
        setTimeout(() => {
          setErrorMessage("");
        }, 5000); // Clear error message after 5 seconds
      }
    } catch (error) {
      console.error("Error occurred while changing password:", error);
      setErrorMessage(
        "An error occurred while changing password. Please try again later."
      );
      setTimeout(() => {
        setErrorMessage("");
      }, 5000); // Clear error message after 5 seconds
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Change Password
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleChangePassword}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="oldPassword" className="sr-only">
                Old Password
              </label>
              <input
                id="oldPassword"
                name="oldPassword"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Old Password"
                value={formData.oldPassword}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="sr-only">
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="New Password"
                value={formData.newPassword}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
