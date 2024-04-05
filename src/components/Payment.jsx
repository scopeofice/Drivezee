import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // Importing useSelector
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption
import { secretKey } from "./util/Constant";

const Payment = () => {
  // State to store payment details and user's name
  const [paymentDetails, setPaymentDetails] = useState({});
  const [userName, setUserName] = useState("");
  const [courseAmt, setCourseAmt] = useState(0);
  const [hst, setHst] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("selectedData");
    if (storedData) {
      try {
        // Decrypt the stored data
        const decryptedData = CryptoJS.AES.decrypt(
          storedData,
          secretKey
        ).toString(CryptoJS.enc.Utf8);
        const data = JSON.parse(decryptedData);
        console.log(data);
        // Set the paymentDetails state
        setPaymentDetails(data);
      } catch (error) {
        console.error("Error decrypting payment details:", error);
      }
    }

    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const decryptedBytes = CryptoJS.AES.decrypt(storedUserData, secretKey);
      const decryptedData = JSON.parse(
        decryptedBytes.toString(CryptoJS.enc.Utf8)
      );

      if (decryptedData) {
        setUserData(decryptedData);
        setUserName(`${decryptedData.first_name} ${decryptedData.last_name}`);
      }
    }
  }, []);

  // Function to calculate total price including tax based on the selected course and needsCar
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    let coursePrice = 0;

    if (paymentDetails) {
      if (paymentDetails.type === "BDE") {
        coursePrice = 650;
        totalPrice += coursePrice;
        if (paymentDetails.needsCar) {
          coursePrice += 295;
          totalPrice += 295;
        }
      } else if (paymentDetails.type === "IL") {
        // Calculate based on number of hours
        coursePrice = 65 * paymentDetails.hours;
        totalPrice += coursePrice;
        if (paymentDetails.needsCar) {
          coursePrice += 295;
          totalPrice += 295;
        }
      } else if (paymentDetails.type === "CRT") {
        coursePrice = 0;
        if (paymentDetails.needsCar) {
          coursePrice += 295;
          totalPrice += 295;
        }
      }
    }
    const hstAmount = totalPrice * 0.13;
    setCourseAmt(coursePrice);
    setHst(hstAmount);
    setTotalAmt(totalPrice + hstAmount);

    localStorage.setItem("courseAmt", coursePrice.toFixed(2));
    localStorage.setItem("totalAmt", (totalPrice + hstAmount).toFixed(2));
  };
  useEffect(() => {
    calculateTotalPrice();
  }, [paymentDetails, userData]);

  const handleProceedToPay = () => {
    if (!userData) return; // userData should be available

    const amt = totalAmt.toFixed(2);
    const cid = userData.id;

    // Construct the payment gateway URL
    const paymentGatewayUrl = `http://localhost/PaytmKit/?amt=${1}&cid=${cid}`;

    // Redirect to the payment gateway URL in the same tab
    window.location.href = paymentGatewayUrl;
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-xl text-left">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Payment Details
      </h2>
      {paymentDetails && (
        <>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            User Name: <strong>{userName}</strong>
            <p>
              Selected Course:<strong> {paymentDetails.title}</strong>
            </p>
            <p>
              Type: <strong>{paymentDetails.type}</strong>
            </p>
            {paymentDetails.type === "IL" && (
              <p>
                Hours: <strong>{paymentDetails.hours}</strong>
              </p>
            )}
            <p>
              Needs Car:{" "}
              <strong>{paymentDetails.needsCar ? "Yes" : "No"}</strong>
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p>
              Course Amount:<strong> ${courseAmt.toFixed(2)}</strong>
            </p>
            <p>
              HST (13%): <strong>${hst.toFixed(2)}</strong>
            </p>
            <p>
              Total Amount: <strong>${totalAmt.toFixed(2)}</strong>
            </p>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleProceedToPay}
          >
            Proceed to Pay
          </button>
        </>
      )}
      {!paymentDetails && <p>No payment details found</p>}
    </div>
  );
};

export default Payment;
