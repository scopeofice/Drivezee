import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { API_URL,API_KEY } from "../util/Constant";

const AddInstructorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    bio: "",
    address: "",
    languages: [],
    lang_json: "",
    del_flg: 1,
  });

  // Define state for error handling
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLanguageChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData((prevState) => ({
        ...prevState,
        languages: [...prevState.languages, name],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        languages: prevState.languages.filter((lang) => lang !== name),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the server
    axios
      .post(API_URL, {
        action: "add_instructor",
        key : API_KEY,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        gender: formData.gender,
        bio: formData.bio,
        address: formData.address,
        languages: formData.languages,
        lang: formData.languages.join(),
        del_flg: formData.del_flg,
      })
      .then((response) => {
        // Handle response from the server
        if (!response.data.error) {
          // Instructor addition successful
          console.log(response.data);
          // Redirect to "/instructorlist"
          navigate("/instructorslist");
        } else {
          // Error occurred while adding instructor
          console.error(response.data.message);
          setError(response.data.message);
        }
      })
      .catch((error) => {
        // Handle error if request fails
        console.error("Error adding instructor:", error);
        setError("Error adding instructor. Please try again later.");
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-20 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-center text-3xl font-extrabold text-primaryBlue mb-6">
        Add Instructor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <input
          id="instructorName"
          name="name"
          type="text"
          autoComplete="given-name"
          required
          className="w-full appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm"
          placeholder="Instructor Name"
          onChange={handleChange}
        />
        {/* Phone Field */}
        <input
          id="instructorPhone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className="w-full appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm"
          placeholder="Phone"
          onChange={handleChange}
        />
        {/* Email Field */}
        <input
          id="instructorEmail"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm"
          placeholder="Email"
          onChange={handleChange}
        />

        {/* Gender Field */}
        <select
          id="instructorGender"
          name="gender"
          className="w-full appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm"
          onChange={handleChange}
          defaultValue="Male"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {/* Bio Field */}
        <textarea
          id="instructorBio"
          name="bio"
          className="w-full appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm"
          placeholder="Bio"
          onChange={handleChange}
        ></textarea>
        {/* Address Field */}
        <input
          id="instructorAddress"
          name="address"
          type="text"
          autoComplete="street-address"
          required
          className="w-full appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm"
          placeholder="Address"
          onChange={handleChange}
        />

        {/* Language Selection */}
        <div className="space-y-2">
          <input
            type="checkbox"
            id="english"
            name="English"
            value="English"
            checked={formData.languages.includes("English")}
            onChange={handleLanguageChange}
            className="mr-1 ml-3"
          />
          <label htmlFor="english" className="checkbox-label">
            English
          </label>

          <input
            type="checkbox"
            id="french"
            name="French"
            value="French"
            checked={formData.languages.includes("French")}
            onChange={handleLanguageChange}
            className="mr-1 ml-3"
          />
          <label htmlFor="french" className="checkbox-label">
            French
          </label>

          <input
            type="checkbox"
            id="punjabi"
            name="Punjabi"
            value="Punjabi"
            checked={formData.languages.includes("Punjabi")}
            onChange={handleLanguageChange}
            className="mr-1 ml-3"
          />
          <label htmlFor="punjabi" className="checkbox-label">
            Punjabi
          </label>

          <input
            type="checkbox"
            id="chinese"
            name="Chinese"
            value="Chinese"
            checked={formData.languages.includes("Chinese")}
            onChange={handleLanguageChange}
            className="mr-1 ml-3"
          />
          <label htmlFor="chinese" className="checkbox-label">
            Chinese
          </label>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primaryBlue hover:bg-primarySky text-white font-bold py-2 px-4 rounded"
        >
          Add Instructor
        </button>
      </form>
    </div>
  );
};

export default AddInstructorForm;
