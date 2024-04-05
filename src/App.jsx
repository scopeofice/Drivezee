import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Profile from "./components/Profile";
import ChangePassword from "./components/ChangePassword";
import Test from "./components/Test";
import Payment from "./components/Payment";
import Quiz from "./components/Quiz";
import Faq from "./components/Faq";
import PostalCode from "./components/PostalCode";
import CourseSelection from "./components/CourseSelection";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import SlotSelection from "./components/SlotSelection";
import LocalStorage from "./components/LocalStorage";
import PaymentComponent from "./components/PaymentComponent";
import BookingStatus from "./components/BookingStatus";
import BdeDetails from "./components/BdeDetails";
import IndividualLessons from "./components/IndividualLessons";
import PostalCodeUpdate from "./components/PostalCodeUpdate";
import SlotSelectionUpdate from "./components/SlotSelectionUpdate";
import Reschedule from "./components/Reschedule";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AddInstructor from "./components/Admin/AddInstructor ";
import InstructorsList from "./components/Admin/InstructorsList";
import IlDetails from "./components/IlDetails";
import CrtDetails from "./components/CrtDetails";
import Transactions from "./components/Transactions";
import UsersList from "./components/Admin/UsersList";
import AllBookings from "./components/Admin/AllBookings";
import Navbar_sg from "./components/Navbar_sg";

function App() {
  const location = useLocation();

  // Check if the user is on the AdminLogin page or the dashboard
  const isAdminLogin = location.pathname === "/admin";
  const isDashboard = location.pathname === "/dashboard";
  const isTransactions = location.pathname === "/transactions";

  // Check if Navbar should be hidden for specific routes
  const hideNavbar = [
    "/bdedetails",
    "/ildetails",
    "/crtdetails",
    "/postalcode",
    "/slotselection",
    "/payment",
    "/bookingstatus",
    "/instructorslist",
    "/userslist",
    "/allbookings",
  ].includes(location.pathname);

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!isAdminLogin && !isDashboard && !isTransactions && !hideNavbar && (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/testkro" element={<Test />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/postalcode" element={<PostalCode />} />
        <Route path="/courseselection" element={<CourseSelection />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/slotselection" element={<SlotSelection />} />
        <Route path="/localstorage" element={<LocalStorage />} />
        <Route path="/pc" element={<PaymentComponent />} />
        <Route path="/bs" element={<BookingStatus />} />
        <Route path="/bdedetails" element={<BdeDetails />} />
        <Route path="/ildetails" element={<IlDetails />} />
        <Route path="/crtdetails" element={<CrtDetails />} />
        <Route path="/il" element={<IndividualLessons />} />
        <Route path="/postalcodeupdate" element={<PostalCodeUpdate />} />
        <Route path="/slotselectionupdate" element={<SlotSelectionUpdate />} />
        <Route path="/reschedule" element={<Reschedule />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/addinstructor" element={<AddInstructor />} />
        <Route path="/instructorslist" element={<InstructorsList />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path={`/userslist`} element={<UsersList />} />
        <Route path={`/allbookings`} element={<AllBookings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
