import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API_URL, API_KEY } from "../util/Constant";

const InstructorsList = () => {
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const navigate = useNavigate();
  const [editedInstructor, setEditedInstructor] = useState({
    name: "",
    email: "",
    phone: "",
    lang: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [instructorsPerPage] = useState(5); // Set number of instructors per page

  useEffect(() => {
    axios
      .post(API_URL, {
        action: "get_instructors",
        key: API_KEY,
      })
      .then((response) => {
        if (!response.data.error) {
          setInstructors(response.data.data);
        } else {
          console.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching instructors:", error);
      });
  }, []);

  const handleEditClick = (instructor) => {
    setSelectedInstructor(instructor);
    setEditedInstructor(instructor);
  };

  const closeModal = () => {
    setSelectedInstructor(null);
    setEditedInstructor({
      name: "",
      email: "",
      phone: "",
      lang: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedInstructor((prevInstructor) => ({
      ...prevInstructor,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, {
        action: "update_instructor",
        key: API_KEY,
        id: editedInstructor.id,
        email: editedInstructor.email,
        phone: editedInstructor.phone,
        lang: editedInstructor.lang,
      });
      if (!response.data.error) {
        setSuccessMessage("Instructor details updated successfully.");
        setTimeout(() => {
          closeModal();
          setSuccessMessage("");
          axios
            .post(API_URL, {
              action: "get_instructors",
              key: API_KEY,
            })
            .then((response) => {
              if (!response.data.error) {
                setInstructors(response.data.data);
              } else {
                console.error(response.data.message);
              }
            })
            .catch((error) => {
              console.error("Error fetching instructors:", error);
            });
        }, 2000);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating instructor:", error);
    }
  };

  const handleDelete = (instructorId) => {
    if (window.confirm("Are you sure you want to delete this instructor?")) {
      axios
        .post(API_URL, {
          action: "delete_instructor",
          key: API_KEY,
          id: instructorId,
        })
        .then((response) => {
          if (!response.data.error) {
            axios
              .post(API_URL, {
                action: "get_instructors",
              })
              .then((response) => {
                if (!response.data.error) {
                  setInstructors(response.data.data);
                } else {
                  console.error(response.data.message);
                }
              })
              .catch((error) => {
                console.error("Error fetching instructors:", error);
              });
          } else {
            console.error(response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error deleting instructor:", error);
        });
    }
  };

  const handleBack = () => {
    navigate("/admin-dashboard");
  };

  const indexOfLastInstructor = currentPage * instructorsPerPage;
  const indexOfFirstInstructor = indexOfLastInstructor - instructorsPerPage;
  const currentInstructors = instructors.slice(
    indexOfFirstInstructor,
    indexOfLastInstructor
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-[80%] mx-auto px-4 py-8 mt-20">
      <div className="overflow-x-auto">
        {successMessage && (
          <div className="text-green-600 font-semibold mb-4">
            {successMessage}
          </div>
        )}
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleBack}
          >
            &lt; Back
          </button>
          <Link to="/addinstructor">
            <button
              className="bg-primaryBlue hover:bg-primaryDark text-white font-bold py-2 px-4 rounded ml-4"
            >
              Add Instructor
            </button>
          </Link>
          <h2 className="text-2xl font-bold">Instructors List</h2>
        </div>
        <table className="w-full table-auto border-collapse border border-primarySky shadow-md">
          <thead>
            <tr className="bg-primaryBlue text-white font-semibold">
              <th className="px-4 py-2 border border-primarySky">S.No</th>
              <th className="px-4 py-2 border border-primarySky">Name</th>
              <th className="px-4 py-2 border border-primarySky">Email</th>
              <th className="px-4 py-2 border border-primarySky">Phone</th>
              <th className="px-4 py-2 border border-primarySky">Languages</th>
              <th className="px-4 py-2 border border-primarySky">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentInstructors.map((instructor, index) => (
              <tr
                key={instructor.id}
                className="text-primaryBlue border-b border-gray-200"
              >
                <td className="border border-primarySky px-4 py-2">
                  {indexOfFirstInstructor + index + 1}
                </td>
                <td className="border border-primarySky px-4 py-2">
                  {instructor.name}
                </td>
                <td className="border border-primarySky px-4 py-2">
                  {instructor.email}
                </td>
                <td className="border border-primarySky px-4 py-2">
                  {instructor.phone}
                </td>
                <td className="border border-primarySky px-4 py-2">
                  {instructor.lang}
                </td>
                <td className="border border-primarySky px-4 py-2">
                  <button
                    onClick={() => handleEditClick(instructor)}
                    className="text-primaryBlue hover:text-primaryDark"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(instructor.id)}
                    className="text-red-600 hover:text-red-800 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          {[
            ...Array(Math.ceil(instructors.length / instructorsPerPage)).keys(),
          ].map((pageNumber) => (
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
          ))}
        </div>
      </div>
      {selectedInstructor && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-xl font-bold text-primaryBlue mb-4">
              Edit Instructor
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-primaryBlue mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={selectedInstructor.name}
                  readOnly
                  className="border border-primarySky rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-primaryBlue mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={editedInstructor.email}
                  onChange={handleInputChange}
                  className="border border-primarySky rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-primaryBlue mb-1"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={editedInstructor.phone}
                  onChange={handleInputChange}
                  className="border border-primarySky rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lang"
                  className="block text-sm font-semibold text-primaryBlue mb-1"
                >
                  Languages
                </label>
                <input
                  type="text"
                  id="lang"
                  name="lang"
                  value={editedInstructor.lang}
                  onChange={handleInputChange}
                  className="border border-primarySky rounded-md px-4 py-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-primaryBlue hover:bg-primaryDark text-white font-bold py-2 px-4 rounded-md"
              >
                Save
              </button>
              <button
                onClick={closeModal}
                className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorsList;
