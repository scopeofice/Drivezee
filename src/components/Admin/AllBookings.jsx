import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL, API_KEY } from "../util/Constant";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";

const BookingsTable = () => {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage] = useState(10);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(API_URL, {
        action: "get_all_bookings",
        key: API_KEY,
      })
      .then((response) => {
        if (!response.data.error) {
          setBookings(response.data.data);
        } else {
          console.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, []);

  const handleBack = () => {
    navigate("/admin-dashboard");
  };

  const handleDetailsClick = (booking) => {
    setSelectedBooking(booking);
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
  };

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = bookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const InvoiceDocument = ({ booking }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Booking Details</Text>
          <Text>User Name: {booking.user_name}</Text>
          <Text>Instructor Name: {booking.instructor_name}</Text>
          <Text>Booking Date: {booking.booking_date}</Text>
          <Text>Booking Time: {booking.booking_time}</Text>
          <Text>Course Type: {booking.course_type}</Text>
          <Text>Course Amount: {booking.course_amt}</Text>
          <Text>Total Amount: {booking.total_amt}</Text>
          <Text>Payment ID: {booking.payment_id}</Text>
        </View>
      </Page>
    </Document>
  );

  const handleDownloadInvoice = (booking) => {
    const MyDoc = () => <InvoiceDocument booking={booking} />;
    return (
      <PDFDownloadLink document={<MyDoc />} fileName="invoice.pdf">
        {({ blob, url, loading, error }) => (
          <button
            className="bg-primaryBlue hover:bg-primaryDark text-white font-bold py-2 px-4 rounded-md"
            disabled={loading}
          >
            {loading ? "Generating..." : "Download Invoice"}
          </button>
        )}
      </PDFDownloadLink>
    );
  };

  return (
    <div className="w-[80%] mx-auto px-4 py-8 mt-20">
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleBack}
          >
            &lt; Back
          </button>
          <h2 className="text-2xl font-bold">Bookings List</h2>
        </div>
        <table className="w-full table-auto border-collapse border border-primarySky shadow-md">
          <thead>
            <tr className="bg-primaryBlue text-white font-semibold">
              <th className="px-4 py-2 border border-primarySky">S.No</th>
              <th className="px-4 py-2 border border-primarySky">User Name</th>
              <th className="px-4 py-2 border border-primarySky">
                Instructor Name
              </th>
              <th className="px-4 py-2 border border-primarySky">
                Booking Date
              </th>
              <th className="px-4 py-2 border border-primarySky">
                Booking Time
              </th>
              <th className="px-4 py-2 border border-primarySky">
                Course Type
              </th>
              <th className="px-4 py-2 border border-primarySky">
                Total Amount
              </th>
              <th className="px-4 py-2 border border-primarySky">Payment ID</th>
              <th className="px-4 py-2 border border-primarySky">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentBookings.map((booking, index) => (
              <tr
                key={booking.id}
                className="text-primaryBlue border-b border-gray-200"
              >
                <td className="border border-primarySky px-4 py-2">
                  {indexOfFirstBooking + index + 1}
                </td>
                <td className="border border-primarySky px-4 py-2">
                  {booking.user_name}
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
                  {booking.course_type}
                </td>
                <td className="border border-primarySky px-4 py-2">
                  {booking.total_amt}
                </td>
                <td className="border border-primarySky px-4 py-2">
                  {booking.payment_id.substring(0, 8)}...
                </td>

                <td className="border border-primarySky px-4 py-2">
                  <button
                    onClick={() => handleDetailsClick(booking)}
                    className="bg-primaryBlue hover:bg-primaryDark text-white font-bold py-1 px-2 rounded"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
            {bookings.length === 0 && (
              <tr>
                <td colSpan="9">No bookings found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {selectedBooking && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-xl font-bold text-primaryBlue mb-4">
              Booking Details
            </h2>
            <div className="flex flex-col">
              <div className="mb-2">
                <strong>User Name:</strong> {selectedBooking.user_name}
              </div>
              <div className="mb-2">
                <strong>Instructor Name:</strong>{" "}
                {selectedBooking.instructor_name}
              </div>
              <div className="mb-2">
                <strong>Booking Date:</strong> {selectedBooking.booking_date}
              </div>
              <div className="mb-2">
                <strong>Booking Time:</strong> {selectedBooking.booking_time}
              </div>
              <div className="mb-2">
                <strong>Course Type:</strong> {selectedBooking.course_type}
              </div>
              <div className="mb-2">
                <strong>Total Amount:</strong> {selectedBooking.total_amt}
              </div>
              <div className="mb-2">
                <strong>Payment ID:</strong> {selectedBooking.payment_id}
              </div>
              <div className="flex justify-between mt-4">
                {handleDownloadInvoice(selectedBooking)}
                <button
                  onClick={handleCloseModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(bookings.length / bookingsPerPage)).keys()].map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber + 1)}
              className={`${
                pageNumber + 1 === currentPage
                  ? "bg-primaryBlue text-white"
                  : "bg-gray-300 text-gray-800"
              } font-bold py-2 px-4 rounded-md mr-2`}
            >
              {pageNumber + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default BookingsTable;

const styles = {
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
};
