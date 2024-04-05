import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL,API_KEY } from "../components/util/Constant";
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption
import { secretKey } from "./util/Constant";


const PopupWindow = ({
  selectedDate,
  selectedTime,
  selectedDay,
  onNext,
  onBack,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="font-bold text-lg mb-2">Selected Slot:</h2>
        <p>
          <strong>Date:</strong> {selectedDate}
        </p>
        <p>
          <strong>Day:</strong> {selectedDay}
        </p>
        <p>
          <strong>Time:</strong> {selectedTime}
        </p>
        <div className="mt-4 flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onBack}
          >
            Back
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onNext(selectedDay)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const SlotSelectionUpdate = () => {
  const [availableSlots, setAvailableSlots] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      const instructorId = localStorage.getItem("instructor_id");
      try {
        const response = await axios.post(API_URL, {
          action: "get_instructor_slots",
          key: API_KEY,
          instructor_id: instructorId,
        });
        if (!response.data.error) {
          setAvailableSlots(response.data.data);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching available slots:", error);
      }
    };
    fetchAvailableSlots();
  }, [API_URL]);

  const handleSlotSelect = (date, time, day) => {
    setSelectedSlot({ date, time });
    setSelectedDay(day); // Set the selected day here
    setShowPopup(true);
  };

  const handleBack = () => {
    setSelectedSlot(null);
    setSelectedDay(null); // Reset the selected day
    setShowPopup(false);
  };

 const handleNext = () => {
   if (selectedSlot && selectedDay) {
     const { date, time } = selectedSlot;
     const selectedSlotDetails = { date, time, day: selectedDay };

     // Encrypt selectedSlotDetails before storing in localStorage
     const encryptedSlotDetails = CryptoJS.AES.encrypt(
       JSON.stringify(selectedSlotDetails),
       secretKey
     ).toString();

     localStorage.setItem("selectedSlotUpdate", encryptedSlotDetails);
     navigate("/reschedule");
   }
 };

  // Function to get day from date
  const getDayFromDate = (dateString) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  return (
    <div className="p-4 mt-20">
      {showPopup && selectedSlot && (
        <PopupWindow
          selectedDate={selectedSlot.date}
          selectedTime={selectedSlot.time}
          selectedDay={selectedDay} // Pass the selected day here
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      <div className="space-y-4">
        {availableSlots &&
          Object.entries(availableSlots).map(([date, timeSlots]) => (
            <div key={date}>
              <h2 className="font-bold text-lg">
                Date: {date} ({getDayFromDate(date)})
              </h2>
              {Object.entries(timeSlots).map(([time, slotDetails]) => (
                <div key={time} className="bg-white rounded-lg shadow-md p-4">
                  <p className="font-bold text-lg">Time: {time}</p>
                  <div className="flex items-center">
                    <p className="text-gray-800">
                      {/* Display slot details here */}
                    </p>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
                      onClick={() =>
                        handleSlotSelect(date, time, getDayFromDate(date))
                      }
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SlotSelectionUpdate;
