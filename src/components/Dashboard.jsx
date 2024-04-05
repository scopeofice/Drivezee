import React, { useState,useEffect    } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import Transactions from "./Transactions";
import { API_URL,API_KEY } from "../components/util/Constant";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Check if session is set
    const session = sessionStorage.getItem("users");


    if (!session) {
      // Redirect to login page if session is not set
      navigate("/login");
      return;
    }
    const userId = JSON.parse(session).id;

    const fetchBookings = async () => {
      try {
        const response = await axios.post(API_URL, {
          action: "user_bookings",
          key: API_KEY,
          userId: userId,
        });
        console.log("main error", response.data);
        if (!response.data.error) {
          setBookings(response.data.data);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleView = (component) => {
    if (component === "profile") {
      setShowProfile(true);
      setShowChangePassword(false);
      setShowTransactions(false);
    } else if (component === "changePassword") {
      setShowProfile(false);
      setShowChangePassword(true);
      setShowTransactions(false);
    } else if (component === "transactions") {
      setShowProfile(false);
      setShowChangePassword(false);
      setShowTransactions(true);
    } else {
      setShowProfile(false);
      setShowChangePassword(false);
      setShowTransactions(false);
    }
  };

  const handleLogout = () => {
    // Clear all local storage data
    localStorage.clear();

    // Clear all session storage data
    sessionStorage.clear();
    navigate("/login");
  };

  const handleReschedule = (bookingId, bookings) => {
    if (!bookings) {
      console.error("Bookings array is empty or undefined.");
      return;
    }

    // Find the booking with the given ID
    const rescheduleBooking = bookings.find(
      (booking) => booking.id === bookingId
    );

    if (rescheduleBooking) {
      // Set the reschedule booking details to local storage
      localStorage.setItem("rescheduleBookingId", bookingId);
      localStorage.setItem("postal_code", rescheduleBooking.zipcode);
      localStorage.setItem("address", rescheduleBooking.address);
      localStorage.setItem("booking_time", rescheduleBooking.booking_time);
      localStorage.setItem("booking_date", rescheduleBooking.booking_date);
      localStorage.setItem("booking_day", rescheduleBooking.booking_day);

      console.log("Reschedule booking with ID:", bookingId);

      // Redirect to "/postalcodeupdate"
      // Implement the 'navigate' function according to your routing library
      navigate(`/postalcodeupdate`);
    } else {
      console.error("Booking ID not found in the bookings state");
    }
  };
  const handleCancel = (bookingId, rowId) => {
    // Create the data object to send in the request body
    const data = {
      action: "delete",
      booking_id: bookingId,
      row_id: rowId, // Include row_id in the data object
    };

    // Make the API call using Axios
    axios
      .post(API_URL, data)
      .then((response) => {
        // Handle the response from the server
        const responseData = response.data;
        if (!responseData.error) {
          // Show success alert
          alert("Booking cancelled successfully: ");
          // Reload dashboard component
          window.location.reload();
        } else {
          // Show error alert
          alert("Failed to cancel booking: ");
        }
      })
      .catch((error) => {
        console.error("An error occurred while cancelling booking:", error);
        // Show error alert for Axios errors
        alert(
          "An error occurred while cancelling booking. Please try again later."
        );
      });
  };

  const handleDetails = (booking_Id, instructor_Id, user_Id, course_type) => {
    // Set booking, instructor, and user IDs to state
    localStorage.setItem("booking_id", booking_Id);
    localStorage.setItem("user_id", user_Id);
    localStorage.setItem("instructor_id", instructor_Id);
    localStorage.setItem("course", course_type);

    // Determine the route based on the course type and navigate accordingly
    let route;
    switch (course_type) {
      case "BDE":
        route = "/bdedetails";
        break;
      case "IL":
        route = "/ildetails";
        break;
      case "CRT":
        route = "/crtdetails";
        break;
      default:
        // Default route or handle any other cases
        route = "/";
        break;
    }

    // Navigate to the determined route
    navigate(route);
  };

  const toggleBookingOptions = (bookingId) => {
    setSelectedBooking(selectedBooking === bookingId ? null : bookingId);
  };

  const handleBuyNewCourse = () => {
    navigate("/postalcode"); // Redirect to "/postalcode" route
  };

  return (
    <div
      className={`bg-gray-200 min-h-screen flex ${
        isSidebarOpen ? "overflow-hidden" : ""
      } transition-all duration-300 ease-in-out`}
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        handleViewProfile={() => handleView("profile")}
        handleViewChangePassword={() => handleView("changePassword")}
        handleViewHome={() => handleView("home")}
        handleViewTransactions={() => handleView("transactions")} // Updated to handleView("transactions")
        handleLogout={handleLogout}
        handleBuyNewCourse={handleBuyNewCourse}
      />
      <div className={`flex-1 ml-0 ${isSidebarOpen ? "mr-64" : "mr-0"}`}>
        <button
          className="fixed top-4 right-4 bg-gray-800 text-white px-3 py-2 rounded-md"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
        <div className="items-center">
          <div className="px-4 py-6 sm:px-0 items-center">
            {!showProfile && !showChangePassword && !showTransactions && (
              <div>
                <h2 className="text-2xl font-bold mb-4">User Bookings</h2>
                <div className="overflow-x-auto">
                  <table className="table-auto w-[60vw] mx-auto border-collapse border border-primarySky shadow-md">
                    <thead>
                      <tr className="bg-primaryBlue text-white">
                        <th className="px-4 py-2 border border-primarySky">
                          S.No
                        </th>
                        <th className="px-4 py-2 border border-primarySky">
                          Instructor
                        </th>
                        <th className="px-4 py-2 border border-primarySky">
                          Booking Date
                        </th>
                        <th className="px-4 py-2 border border-primarySky">
                          Booking Time
                        </th>
                        <th className="px-4 py-2 border border-primarySky">
                          Address
                        </th>
                        <th className="px-4 py-2 border border-primarySky">
                          Course Type
                        </th>
                        <th className="px-4 py-2 border border-primarySky">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking, index) => (
                        <tr
                          key={booking.id}
                          className={`${
                            index % 2 === 0 ? "bg-primarySky" : ""
                          } text-primaryBlue`}
                        >
                          <td className="border border-primarySky px-4 py-2">
                            {index + 1}
                          </td>
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
                            {booking.course_type}
                          </td>
                          <td className="border border-primarySky px-4 py-2">
                            <div className="relative">
                              <button
                                className="bg-gray-300 text-gray-600 py-2 px-4 rounded inline-flex items-center"
                                onClick={() =>
                                  handleDetails(
                                    booking.id,
                                    booking.instructor_id,
                                    booking.user_id,
                                    booking.course_type
                                  )
                                }
                              >
                                Details
                              </button>
                              {selectedBooking === booking.id && (
                                <div className="absolute right-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-xl">
                                  <ul>
                                    <li>
                                      <button
                                        onClick={() =>
                                          handleReschedule(booking.id, bookings)
                                        }
                                      >
                                        Reschedule
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => handleCancel(booking.id)}
                                      >
                                        Cancel
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {showProfile && <Profile />}
            {showChangePassword && <ChangePassword />}
            {showTransactions && <Transactions />}{" "}
            {/* Render Transactions component when showTransactions is true */}
            {/* Floating Button */}
            <button
              className="fixed bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={handleBuyNewCourse}
            >
              Buy New Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


