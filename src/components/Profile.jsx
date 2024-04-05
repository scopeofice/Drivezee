import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL,API_KEY } from "../components/util/Constant";

function Profile({ onProfileUpdate }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const storedUsers = sessionStorage.getItem("users");
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      setUsers(parsedUsers);
      setFormData({
        id: parsedUsers.id,
        first_name: parsedUsers?.first_name || "",
        last_name: parsedUsers?.last_name || "",
        email: parsedUsers?.email || "",
        phone: parsedUsers?.phone || "",
      });
    }
  }, [navigate]);

  const handleProfile = async (e) => {
    e.preventDefault();

    try {
      // Sending edit profile request to the backend
      const ProfileResponse = await axios.post(API_URL, {
        action: "update",
        key: API_KEY,
        id: formData.id,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
      });

      if (!ProfileResponse.data.error) {
        // Update session storage with the new profile data
        const updatedUser = {
          id: formData.id,
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
        };
        sessionStorage.setItem("users", JSON.stringify(updatedUser));

        alert("Profile Updated");
        navigate("/dashboard");
      } else {
        // Display appropriate error message to the user
        alert(ProfileResponse.data.message);
      }
    } catch (error) {
      console.error("Error occurred while editing profile:", error);
      alert(
        "An error occurred while Updating profile. Please try again later."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Edit Profile
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleProfile}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="first_name" className="sr-only">
                First Name
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                autoComplete="given-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black font-bold rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="last_name" className="sr-only">
                Last Name
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                autoComplete="family-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
