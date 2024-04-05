import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL,API_KEY } from "../components/util/Constant";
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption
import { secretKey } from "./util/Constant";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    pass: "",
    confirmpass: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Check if confirmation password matches password
    if (name === "confirmpass") {
      setPasswordMatch(formData.pass === value);
    }
  };

  const handleInsert = (e) => {
    e.preventDefault();

    // Check if confirmation password matches password
    if (!passwordMatch) {
      setError("Passwords do not match");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    // Send form data to the server
    axios
      .post(API_URL, {
        action: "add",
        key: API_KEY,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        pass: formData.pass,
      })
      .then((response) => {
        // Handle response from the server
        if (!response.data.error) {
          // Registration successful
          console.log(response.data);

          // Store userId and fullName in localStorage as userData object
          const userData = {
            id: response.data.userId,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
          };
          const encryptedUserData = CryptoJS.AES.encrypt(
            JSON.stringify(userData),
            secretKey
          ).toString(); // Encrypt userData

          localStorage.setItem("userData", encryptedUserData);

          navigate("/payment"); // Redirect to payment page
        } else {
          // Registration failed
          console.error(response.data.message);
          setError(response.data.message);
          setTimeout(() => {
            setError("");
          }, 3000);
        }
      })
      .catch((error) => {
        // Handle error if request fails
        console.error("Error registering:", error);
        setError("Error registering. Please try again later.");
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  };

  return (
    <div className="mt-20 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-primaryBlue">
            Registration Form
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleInsert}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm ">
            <div className="mb-3">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pass" className="sr-only">
                Password
              </label>
              <input
                id="pass"
                name="pass"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.pass}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmpass" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmpass"
                name="confirmpass"
                type="password"
                autoComplete="new-password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  passwordMatch ? "border-gray-300" : "border-red-500"
                } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue focus:z-10 sm:text-sm`}
                placeholder="Confirm Password"
                value={formData.confirmpass}
                onChange={handleChange}
              />
              {/* Show red cross icon if passwords don't match */}
              {!passwordMatch && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg
                    className="h-5 w-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414l4.95-4.95-1.414-1.414L10 5.586l-3.536-3.536-1.414 1.414L8.414 7.4 3.464 12.35l1.414 1.414L10 9.414l4.95 4.95 1.414-1.414L11.414 8.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          {error && (
            <div className="text-red-500 text-center mb-3">{error}</div>
          )}
          <div>
            <button
              type="submit"
              className="bg-primaryBlue  py-2 px-4 text-white font-bold rounded mb-2 hover:bg-bgc hover:text-primaryBlue w-[100%] hover:border-primaryBlue border-2 border-transparent transition ease-in duration-300 "
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
