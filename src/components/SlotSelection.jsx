import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL,API_KEY } from "../components/util/Constant";
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption
import { secretKey } from "./util/Constant";


// PopupWindow component to display the selected date, day, and time
const PopupWindow = ({
  selectedDate,
  selectedTime,
  selectedInstructor,
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
        <p>
          <strong>Instructor ID:</strong> {selectedInstructor}
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
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default function SlotSelection() {
  const [availableSlots, setAvailableSlots] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const response = await axios.post(API_URL, {
          action: "free_slots",
          key: API_KEY,
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

  const handleSlotSelect = (date, time, instructors) => {
    const randomIndex = Math.floor(Math.random() * instructors.length);
    const selectedInstructor = instructors[randomIndex].instructor;
    const day = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
    });
    setSelectedSlot({ date, time, instructorId: selectedInstructor, day });
    setShowPopup(true);
  };

  const handleBack = () => {
    setSelectedSlot(null);
    setShowPopup(false);
  };


const handleNext = () => {
  if (selectedSlot) {
    const { date, time, instructorId } = selectedSlot;
    const selectedDay = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
    });
    const selectedSlotDetails = { date, time, instructorId, selectedDay };

    // Encrypt the selected slot details
    const encryptedSlotDetails = CryptoJS.AES.encrypt(
      JSON.stringify(selectedSlotDetails),
      secretKey
    ).toString();

    // Store the encrypted slot details in localStorage
    localStorage.setItem("selectedSlot", encryptedSlotDetails);

    // Encrypt the user data
    const userSession = JSON.parse(sessionStorage.getItem("users"));
    if (!userSession) {
      navigate("/register");
    } else {
      const { first_name, last_name, id } = userSession;
      const userData = { first_name, last_name, id };

      // Encrypt the user data
      const encryptedUserData = CryptoJS.AES.encrypt(
        JSON.stringify(userData),
        secretKey
      ).toString();

      // Store the encrypted user data in localStorage
      localStorage.setItem("userData", encryptedUserData);

      navigate("/payment");
    }
  }
};


  return (
    <div className="p-4 mt-20 flex flex-col items-center justify-center">
      {showPopup && selectedSlot && (
        <PopupWindow
          selectedDate={selectedSlot.date}
          selectedTime={selectedSlot.time}
          selectedInstructor={selectedSlot.instructorId}
          selectedDay={selectedSlot.day}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      <div className="space-y-4 text-center">
        {availableSlots &&
          Object.entries(availableSlots).map(([date, timeSlots]) => (
            <div key={date} className="mb-4">
              <h2 className="font-bold text-lg">Date: {date}</h2>
              <div className="flex justify-center">
                {Object.entries(timeSlots).map(([time, instructors]) => (
                  <div
                    key={time}
                    className="bg-white rounded-lg shadow-md p-4 mr-4"
                  >
                    <p className="font-bold text-lg">Time: {time}</p>
                    <div className="flex items-center justify-center mt-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        onClick={() =>
                          handleSlotSelect(date, time, instructors)
                        }
                      >
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}




