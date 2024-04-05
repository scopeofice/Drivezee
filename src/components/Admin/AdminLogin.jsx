import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_KEY, API_URL } from "../util/Constant";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sending login request to the backend
      const loginResponse = await axios.post(API_URL, {
        action: "login_admin",
        key: API_KEY,
        email: formData.email,
        pass: formData.pass,
      });

      console.log(loginResponse.data);

      // Set user data in session storage if login is successful
      if (!loginResponse.data.error) {
        sessionStorage.setItem(
          "admin",
          JSON.stringify(loginResponse.data.user)
        );
        navigate("/admin-dashboard");
      } else {
        // Display appropriate error message to the user
        alert(
          loginResponse.data.message ||
            "An error occurred while logging in. Please try again later."
        );

        // If error is true, send back to /admin
        if (loginResponse.data.error) {
          navigate("/admin");
        }
      }
    } catch (error) {
      console.error("Error occurred while logging in:", error);
      alert("An error occurred while logging in. Please try again later.");
    }
  };


  return (
    <div className="flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-md w-full space-y-4 mt-8 mb-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-primaryBlue">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="pass"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.pass}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primaryBlue hover:bg-primarySky focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryBlue"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
