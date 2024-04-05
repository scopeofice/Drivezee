import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { API_URL,API_KEY } from "../components/util/Constant";
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption
import { secretKey } from "./util/Constant";
export default function BookingStatus() {
  const [status, setStatus] = useState("");
  const [respMsg, setRespMsg] = useState("");
  const [txnId, setTxnId] = useState("");

  const extractUrlParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const statusParam = searchParams.get("status");
    const respMsgParam = searchParams.get("msg");
    const txnIdParam = searchParams.get("txnId");
    setStatus(statusParam);
    setRespMsg(respMsgParam);
    setTxnId(txnIdParam);
  };

  useEffect(() => {
    extractUrlParams();
  }, []);

  useEffect(() => {
    if (status !== "") {
      saveBookingData();
      console.log("inside useEffect'");
    }
  }, [status]);

  const saveBookingData = async () => {
    try {
      const encryptedUserData = localStorage.getItem("userData");
      const decryptedUserData = CryptoJS.AES.decrypt(
        encryptedUserData,
        secretKey
      ).toString(CryptoJS.enc.Utf8);
      const userData = decryptedUserData ? JSON.parse(decryptedUserData) : null;

      const encryptedSelectedData = localStorage.getItem("selectedData");
      const decryptedSelectedData = CryptoJS.AES.decrypt(
        encryptedSelectedData,
        secretKey
      ).toString(CryptoJS.enc.Utf8);
      const selectedData = decryptedSelectedData
        ? JSON.parse(decryptedSelectedData)
        : null;

      const encryptedPickupAddress = localStorage.getItem("pickupAddress");
      const decryptedPickupAddress = CryptoJS.AES.decrypt(
        encryptedPickupAddress,
        secretKey
      ).toString(CryptoJS.enc.Utf8);
      const pickupAddress = decryptedPickupAddress
        ? decryptedPickupAddress
        : null;

      const encryptedZipcode = localStorage.getItem("zipcode");
      const decryptedZipcode = CryptoJS.AES.decrypt(
        encryptedZipcode,
        secretKey
      ).toString(CryptoJS.enc.Utf8);
      const zipcode = decryptedZipcode ? decryptedZipcode : null;

      if (status === "TXN_SUCCESS") {
        const selectedSlotString = localStorage.getItem("selectedSlot");
        const selectedSlot = JSON.parse(selectedSlotString);
        const fullDate = selectedSlot.date;
        const [day, date] = fullDate.split(", ");

        // API call to save booking information
        const bookingResponse = await axios.post(API_URL, {
          action: "booking_success",
          key: API_KEY,
          user_id: userData.id,
          instructor_id: selectedSlot.instructorId,
          booking_date: selectedSlot.date,
          booking_time: selectedSlot.time,
          booking_day: day,
          postal_code: zipcode,
          address: pickupAddress,
          course_type: selectedData.type,
          hours: selectedData.hours,
          need_car: selectedData.needsCar ? 1 : 0,
          course_amt: courseAmt,
          total_amt: totalAmt,
          payment_id: txnId,
          del_flg: 1,
        });

        // Update del_flg for the user
        const updateResponse = await axios.post(API_URL, {
          action: "update_del_flg",
          key: API_KEY,
          user_id: userData.id,
        });

        console.log("Booking and del_flg update were successful!!");
        console.log("Booking response:", bookingResponse.data.booking_id);
        console.log("Update response:", updateResponse.data);
      } else {
        console.log("Payment was Failed !!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Booking Status</h1>
      <p>Status: {status}</p>
      <p>Response Message: {respMsg}</p>
      <p>{status === "TXN_SUCCESS" ? "Booking is done" : "Booking failed"}</p>
      <Link to="/dashboard" className="mt-4 text-blue-500 underline">
        Back to Home
      </Link>
    </div>
  );
}
