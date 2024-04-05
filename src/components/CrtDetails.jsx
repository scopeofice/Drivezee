import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL,API_KEY } from "../components/util/Constant";

const CrtDetails = ({ bookingData }) => {
  const navigate = useNavigate();


  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const bookingId = localStorage.getItem("booking_id");

      try {
        const response = await axios.post(API_URL, {
          action: "get_bde",
          key: API_KEY,
          booking_id: bookingId,
          course_type: "CRT",
        });
        if (!response.data.error) {
          setDetails(response.data.data);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchDetails();
  }, []);

  const handleReschedule = (rowId) => {
    console.log("Rescheduling booking with ID:", rowId);
    localStorage.setItem("redirect", "reschedule");
    localStorage.setItem("row_id", rowId);
    navigate(`/postalcodeupdate`);
  };

  const handleCancel = async (rowId, bookingId, updatedAt) => {
    console.log("Cancelling booking with ID:", rowId, bookingId, updatedAt);

    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmed) {
      return; // If user cancels, do nothing
    }

    try {
      const response = await axios.post(apiEndpoint, {
        action: "cancel_crt",
        key: API_KEY,
        row_id: rowId,
        booking_id: bookingId,
        updated_at: updatedAt,
      });
      console.log("Response:", response.data);
      if (!response.data.error) {
        console.log("Booking cancelled successfully.");
        setShowPopup({ success: true, message: response.data.message });
        setTimeout(() => {
          setShowPopup({ success: false, message: "" });
        }, 3000);
      } else {
        console.error("Error cancelling booking:", response.data.message);
        setShowPopup({ success: false, message: response.data.message });
        setTimeout(() => {
          setShowPopup({ success: false, message: "" });
        }, 3000);
      }
    } catch (error) {
      console.error("Error cancelling booking:", error);
      setShowPopup({ success: false, message: error.message });
      setTimeout(() => {
        setShowPopup({ success: false, message: "" });
      }, 3000);
    }
  };

  const handleBack = () => {
    navigate("/dashboard"); // Navigate back one step in history
  };

  const renderActionButtons = (status, rowId, bookingId, updatedAt) => {
    switch (status) {
      case "0":
        return (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleReschedule(rowId)}
          >
            Reschedule
          </button>
        );
      case "1":
        return (
          <>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => handleReschedule(rowId)}
            >
              Reschedule
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleCancel(rowId, bookingId, updatedAt)}
            >
              Cancel
            </button>
          </>
        );
      case "2":
        return <span className="text-green-600 font-bold">Completed</span>;
      default:
        return null;
    }
  };

  return (
    <div className="w-[80%] mx-auto px-4 py-8 mt-20">
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleBack}
        >
          &lt; Back
        </button>
        <h2 className="text-2xl font-bold">Booking Details</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-primarySky shadow-md">
          <thead>
            <tr className="bg-primaryBlue text-white">
              <th className="px-4 py-2 border border-primarySky">Instructor</th>

              <th className="px-4 py-2 border border-primarySky">
                Booking Date
              </th>
              <th className="px-4 py-2 border border-primarySky">
                Booking Time
              </th>
              <th className="px-4 py-2 border border-primarySky">Address</th>
              <th className="px-4 py-2 border border-primarySky">
                Booking Day
              </th>
              <th className="px-4 py-2 border border-primarySky">Action</th>
            </tr>
          </thead>
          <tbody>
            {details.map((booking) => (
              <tr key={booking.id}>
                <td className="border border-primarySky px-4 py-2">
                  {booking.instructor_name}
                </td>

                <td className="border border-primarySky px-4 py-2">
                  {booking.booking_date}
                </td>
                <td className="border border-primarySky px-4 py-2">
                  {booking.booking_time}
                </td>
                <td className="border border-primarySky px-4 py-2">
                  {booking.address}
                </td>

                <td className="border border-primarySky px-4 py-2">
                  {booking.booking_day}
                </td>

                <td className="border border-primarySky px-4 py-2 flex justify-center">
                  {renderActionButtons(
                    booking.status,
                    booking.id,
                    booking.booking_id,
                    booking.updated_at
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div
          className={`fixed bottom-0 right-0 mb-4 mr-4 p-4 rounded text-white ${
            showPopup.success ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {showPopup.message}
        </div>
      )}
    </div>
  );
};

export default CrtDetails;
