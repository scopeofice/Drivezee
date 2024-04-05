import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL,API_KEY } from "../components/util/Constant";
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption
import { secretKey } from "./util/Constant";

const Reschedule = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  // Retrieve encrypted data from localStorage
  const zipcodeUpdate = localStorage.getItem("zipcodeUpdate");
  const pickupAddressUpdate = localStorage.getItem("pickupAddressUpdate");
  const selectedSlotUpdate = localStorage.getItem("selectedSlotUpdate");
  const address = localStorage.getItem("address");
  const rescheduleBookingId = localStorage.getItem("booking_id");
  const rowId = localStorage.getItem("row_id");
  const redirect = localStorage.getItem("redirect");
  const course = localStorage.getItem("course");

  // Decrypt and parse data
  const decryptedZipcodeUpdate = CryptoJS.AES.decrypt(
    zipcodeUpdate || "",
    secretKey
  ).toString(CryptoJS.enc.Utf8);
  const decryptedPickupAddressUpdate = CryptoJS.AES.decrypt(
    pickupAddressUpdate || "",
    secretKey
  ).toString(CryptoJS.enc.Utf8);
  const decryptedSelectedSlotUpdate = JSON.parse(
    CryptoJS.AES.decrypt(selectedSlotUpdate || "", secretKey).toString(
      CryptoJS.enc.Utf8
    )
  );
  const decryptedAddress = CryptoJS.AES.decrypt(
    address || "",
    secretKey
  ).toString(CryptoJS.enc.Utf8);

  // Function to handle rescheduling
  const handleReschedule = async () => {
    if (
      !decryptedZipcodeUpdate ||
      !decryptedPickupAddressUpdate ||
      !decryptedSelectedSlotUpdate ||
      !decryptedSelectedSlotUpdate.date ||
      !decryptedSelectedSlotUpdate.time ||
      !decryptedSelectedSlotUpdate.day ||
      !rescheduleBookingId ||
      !rowId
    ) {
      setMessage("Error: Missing data for rescheduling.");
      return;
    }

    const data = {
      action: "reschedule",
      key: API_KEY,
      booking_id: rescheduleBookingId,
      booking_date: decryptedSelectedSlotUpdate.date,
      booking_time: decryptedSelectedSlotUpdate.time,
      booking_day: decryptedSelectedSlotUpdate.day,
      address: decryptedPickupAddressUpdate,
      postalCode: decryptedZipcodeUpdate,
      row_id: rowId,
    };

    try {
      const response = await axios.post(API_URL, data);

      if (!response.data.error) {
        setMessage(
          `${redirect === "reschedule" ? "Reschedule" : "Schedule"} successful!`
        );
        localStorage.removeItem("redirect");
        localStorage.removeItem("course");

        setTimeout(() => {
          navigate("/" + course.toLowerCase() + "details");
        }, 2000);
      } else {
        setMessage(
          `Failed to ${
            redirect === "reschedule" ? "Reschedule" : "Schedule"
          }: ${response.data.message}`
        );
      }
    } catch (error) {
      console.error("Error rescheduling: ", error);
      setMessage(
        `An error occurred while ${
          redirect === "reschedule" ? "rescheduling" : "scheduling"
        }. Please try again later.`
      );
    }
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">
        {redirect === "reschedule" ? "Reschedule" : "Schedule"}
      </h1>
      <div className="mb-4">
        <p>
          <strong>ZIP Code Update:</strong> {decryptedZipcodeUpdate}
        </p>
        <p>
          <strong>Address Update:</strong> {decryptedAddress}
        </p>
        <p>
          <strong>Pickup Address Update:</strong> {decryptedPickupAddressUpdate}
        </p>
        {decryptedSelectedSlotUpdate && (
          <p>
            <strong>Selected Slot:</strong> Date:{" "}
            {decryptedSelectedSlotUpdate.date}, Time:{" "}
            {decryptedSelectedSlotUpdate.time}, Day:{" "}
            {decryptedSelectedSlotUpdate.day}
          </p>
        )}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleReschedule}
      >
        {redirect === "reschedule" ? "Reschedule" : "Schedule"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Reschedule;
