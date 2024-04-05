import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API_URL, API_KEY } from "../util/Constant";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  const [editedUser, setEditedUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5); // Set number of users per page

  useEffect(() => {
    axios
      .post(API_URL, {
        action: "get_users",
        key: API_KEY,
      })
      .then((response) => {
        if (!response.data.error) {
          // Concatenate first_name and last_name to form full name
          const formattedUsers = response.data.data.map((user) => ({
            ...user,
            name: `${user.first_name} ${user.last_name}`,
          }));
          setUsers(formattedUsers);
        } else {
          console.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [searchTerm]);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditedUser({ ...user });
  };

  const closeModal = () => {
    setSelectedUser(null);
    setEditedUser({
      name: "",
      email: "",
      phone: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, {
        action: "update_user",
        key: API_KEY,
        id: editedUser.id,
        email: editedUser.email,
        phone: editedUser.phone,
      });
      if (!response.data.error) {
        setSuccessMessage("User details updated successfully.");
        setTimeout(() => {
          closeModal();
          setSuccessMessage("");
          axios
            .post(API_URL, {
              action: "get_users",
              key: API_KEY,
            })
            .then((response) => {
              if (!response.data.error) {
                  const formattedUsers = response.data.data.map((user) => ({
                    ...user,
                    name: `${user.first_name} ${user.last_name}`,
                  }));
                setUsers(response.data.data);
              } else {
                console.error(response.data.message);
              }
            })
            .catch((error) => {
              console.error("Error fetching users:", error);
            });
        }, 2000);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .post(API_URL, {
          action: "delete_user",
          key: API_KEY,
          id: userId,
        })
        .then((response) => {
          if (!response.data.error) {
            axios
              .post(API_URL, {
                action: "get_users",
                key: API_KEY,
              })
              .then((response) => {
                if (!response.data.error) {
                  setUsers(response.data.data);
                } else {
                  console.error(response.data.message);
                }
              })
              .catch((error) => {
                console.error("Error fetching users:", error);
              });
          } else {
            console.error(response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  const handleBack = () => {
    navigate("/admin-dashboard");
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-[80%] mx-auto px-4 py-8 mt-20">
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleBack}
      >
        &lt; Back
      </button>

      <table className="w-full table-auto border-collapse border border-primarySky shadow-md">
        <thead>
          <tr className="bg-primaryBlue text-white font-semibold">
            <th className="px-4 py-2 border border-primarySky">S.No</th>
            <th className="px-4 py-2 border border-primarySky">Name</th>
            <th className="px-4 py-2 border border-primarySky">Email</th>
            <th className="px-4 py-2 border border-primarySky">Phone</th>
            <th className="px-4 py-2 border border-primarySky">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr
              key={user.id}
              className="text-primaryBlue border-b border-gray-200"
            >
              <td className="border border-primarySky px-4 py-2">
                {indexOfFirstUser + index + 1}
              </td>
              <td className="border border-primarySky px-4 py-2">
                {user.name}
              </td>
              <td className="border border-primarySky px-4 py-2">
                {user.email}
              </td>
              <td className="border border-primarySky px-4 py-2">
                {user.phone}
              </td>
              <td className="border border-primarySky px-4 py-2">
                <button
                  onClick={() => handleEditClick(user)}
                  className="text-primaryBlue hover:text-primaryDark"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
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
        {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map(
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
      {selectedUser && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-xl font-bold text-primaryBlue mb-4">
              Edit User
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
                  value={selectedUser.name}
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
                  value={editedUser.email}
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
                  value={editedUser.phone}
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

export default UsersList;
