import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption
import { secretKey } from "./util/Constant";

export default function PostalCode() {
  const navigate = useNavigate();
  const [inputCodes, setInputCodes] = useState(["", "", "", "", "", ""]);
  const [showTextBox, setShowTextBox] = useState(false);
  const [pickupAddress, setPickupAddress] = useState("");
  const [invalidPostalCode, setInvalidPostalCode] = useState(false); // State to manage invalid postal code message
  const postalCodes = [
    "M5A1A1",
    "M5B2C3",
    "M5C3D4",
    "M5E4E5",
    "M5G5F6",
    "M5H6G7",
    "M5J7H8",
    "M5K8I9",
    "M5L9J0",
    "M5M1K2",
    "111111",
  ];

  const inputRefs = useRef([]);
  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleInputChange = (index, value) => {
    const newInputCodes = [...inputCodes];
    newInputCodes[index] = value.toUpperCase();
    setInputCodes(newInputCodes);

    if (value.length === 1 && index < inputCodes.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newInputCodes.join("").length === 6) {
      const postalCode = newInputCodes.join("");
      setShowTextBox(postalCodes.includes(postalCode));
      setInvalidPostalCode(!postalCodes.includes(postalCode)); // Set invalidPostalCode if postal code does not match
    } else {
      setInvalidPostalCode(false); // Reset invalidPostalCode if the length is not 6
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && inputCodes[index] === "") {
      event.preventDefault();
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (index, event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("Text").toUpperCase();
    if (pastedData.length === 6) {
      const newInputCodes = [...pastedData];
      setInputCodes(newInputCodes.slice(0, 6));

      const postalCode = newInputCodes.join("");
      setShowTextBox(postalCodes.includes(postalCode));
      setInvalidPostalCode(!postalCodes.includes(postalCode)); // Set invalidPostalCode if postal code does not match

      inputRefs.current[Math.min(index + 5, 5)].focus();
    }
  };

  const handlePickupAddressChange = (event) => {
    setPickupAddress(event.target.value);
  };

  const handleNextButtonClick = () => {
    if (!showTextBox) {
      // Display error message if postal code is invalid
      setInvalidPostalCode(true);
    } else {
      const encryptedPostalCode = CryptoJS.AES.encrypt(
        inputCodes.join(""),
        secretKey
      ).toString(); // Encrypt postal code
      const encryptedPickupAddress = CryptoJS.AES.encrypt(
        pickupAddress,
        secretKey
      ).toString(); // Encrypt pickup address
      localStorage.setItem("zipcode", encryptedPostalCode);
      localStorage.setItem("pickupAddress", encryptedPickupAddress);
      console.log(
        CryptoJS.AES.decrypt(encryptedPostalCode, secretKey).toString(
          CryptoJS.enc.Utf8
        )
      );
      navigate("/courseselection");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-4">
        <p className="mb-4 text-center text-primaryBlue text-4xl">
          <strong>Please enter your postal code to proceed:</strong>
        </p>
        <div className="flex justify-center mb-4">
          {inputCodes.map((code, index) => (
            <input
              key={index}
              ref={(input) => (inputRefs.current[index] = input)}
              type="text"
              className="p-2 rounded-md mr-2 text-3xl w-20 h-20 text-center shadow-md border border-primaryBlue"
              maxLength={1}
              value={code}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={(e) => handlePaste(index, e)}
            />
          ))}
        </div>

        {invalidPostalCode && ( // Display error message if postal code is invalid
          <p className="text-red-500 mb-4 text-center">
            Sorry, we are not able to serve in that area.
          </p>
        )}

        {showTextBox && (
          <div className="flex flex-col items-center">
            <input
              type="text"
              className=" shadow-md border border-primaryBlue p-2 rounded-md mb-2 w-[60%] h-20 text-center"
              placeholder="Enter your pickup address..."
              value={pickupAddress}
              onChange={handlePickupAddressChange}
            />
            <button
              className="bg-primaryBlue text-white py-2 px-4 rounded hover:bg-bgc hover:text-primaryBlue w-[60%] hover:border-primaryBlue border-2 border-transparent transition ease-in duration-300"
              onClick={handleNextButtonClick}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
