import React from "react";

function LocalStorage() {
  // Retrieve data from localStorage
  const zipCode = localStorage.getItem("zipcode");
  const selectedSlot = JSON.parse(localStorage.getItem("selectedSlot"));
  const pickupAddress = localStorage.getItem("pickupAddress");
  const selectedData = JSON.parse(localStorage.getItem("selectedData"));
  const registrationData = JSON.parse(localStorage.getItem("registrationData"));

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-xl font-semibold mb-4">Local Storage Data</h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p>
          <strong>Zip Code:</strong> {zipCode}
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p>
          <strong>Selected Slot:</strong>{" "}
          {selectedSlot &&
            `${selectedSlot.date}, ${selectedSlot.time}, Instructor: ${selectedSlot.instructor}`}
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p>
          <strong>Pickup Address:</strong> {pickupAddress}
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p>
          <strong>Selected Data:</strong>{" "}
          {selectedData &&
            `Title: ${selectedData.title}, Type: ${selectedData.type}, Hours: ${
              selectedData.hours
            }, Needs Car: ${selectedData.needsCar ? "Yes" : "No"}`}
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p>
          <strong>Registration Data:</strong>
        </p>
        <ul>
          <li>
            <strong>First Name:</strong>{" "}
            {registrationData && registrationData.firstName}
          </li>
          <li>
            <strong>Last Name:</strong>{" "}
            {registrationData && registrationData.lastName}
          </li>
          <li>
            <strong>Email:</strong> {registrationData && registrationData.email}
          </li>
          <li>
            <strong>Phone:</strong> {registrationData && registrationData.phone}
          </li>
          {/* You can add more fields as needed */}
        </ul>
      </div>
    </div>
  );
}

export default LocalStorage;
