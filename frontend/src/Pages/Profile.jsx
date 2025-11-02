import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

function Profile() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const [editUser, setEditUser] = useState(false);
  const [editSecurity, setEditSecurity] = useState(false);

  const [formData, setFormData] = useState({
    FullName: user?.FullName || "",
    Email: user?.Email || "",
    Password: "",
  });

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Please log in first
        </h2>
        <button
          onClick={() => navigate("/login")}
          className="bg-black text-white px-8 py-2 rounded-full text-sm tracking-wide hover:bg-gray-800 transition-all"
        >
          Go to Login
        </button>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (type) => {
    // Later connect this with backend API
    console.log("Updated:", type, formData);
    alert(`${type} details updated successfully!`);

    if (type === "User") setEditUser(false);
    if (type === "Security") setEditSecurity(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <FaUserCircle className="text-gray-400 text-8xl mb-3" />
          <h2 className="text-3xl font-semibold text-gray-800">My Profile</h2>
          <p className="text-gray-500 text-sm mt-1">
            Manage your Samsung Account
          </p>
        </div>

        {/* User Info Section */}
        <div className="border border-gray-200 rounded-xl p-6 mb-6">
          <div className="flex items-center mb-4">
            <FaUserCircle className="text-gray-600 text-xl mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">
              User Information
            </h3>
          </div>

          {/* Current User Name */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-500">Current Full Name</p>
            <p className="text-base font-medium text-gray-800">
              {user.FullName}
            </p>
          </div>

          {/* Editable Field */}
          {editUser && (
            <div className="space-y-4">
              <div>
                <label className="text-gray-500 text-xs uppercase tracking-wider">
                  New Full Name
                </label>
                <input
                  type="text"
                  name="FullName"
                  value={formData.FullName}
                  onChange={handleChange}
                  placeholder="Enter new full name"
                  className="mt-1 w-full border rounded-lg px-3 py-2 text-gray-800 focus:ring-1 focus:ring-black outline-none"
                />
              </div>
            </div>
          )}

          <div className="mt-6 flex gap-3">
            {editUser ? (
              <>
                <button
                  onClick={() => handleUpdate("User")}
                  className="flex-1 bg-black text-white py-2 rounded-full font-medium hover:bg-gray-800 transition-all"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditUser(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-full font-medium hover:bg-gray-200 transition-all"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditUser(true)}
                className="w-full bg-black text-white py-2 rounded-full font-medium hover:bg-gray-800 transition-all"
              >
                Edit User Info
              </button>
            )}
          </div>
        </div>

        {/* Security Section */}
        <div className="border border-gray-200 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <MdOutlineSecurity className="text-gray-600 text-xl mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">
              Security Information
            </h3>
          </div>

          {/* Current Email */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-500">Current Email</p>
            <p className="text-base font-medium text-gray-800">{user.Email}</p>
          </div>

          {/* Editable Fields */}
          {editSecurity && (
            <div className="space-y-4">
              <div>
                <label className="text-gray-500 text-xs uppercase tracking-wider">
                  New Email
                </label>
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  placeholder="Enter new email"
                  className="mt-1 w-full border rounded-lg px-3 py-2 text-gray-800 focus:ring-1 focus:ring-black outline-none"
                />
              </div>

              <div>
                <label className="text-gray-500 text-xs uppercase tracking-wider">
                  New Password
                </label>
                <input
                  type="password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  className="mt-1 w-full border rounded-lg px-3 py-2 text-gray-800 focus:ring-1 focus:ring-black outline-none"
                />
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            {editSecurity ? (
              <>
                <button
                  onClick={() => handleUpdate("Security")}
                  className="flex-1 bg-black text-white py-2 rounded-full font-medium hover:bg-gray-800 transition-all"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditSecurity(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-full font-medium hover:bg-gray-200 transition-all"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditSecurity(true)}
                className="w-full bg-black text-white py-2 rounded-full font-medium hover:bg-gray-800 transition-all"
              >
                Manage Security
              </button>
            )}
          </div>
        </div>

        {/* Logout */}
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-3 rounded-full font-medium hover:bg-red-600 transition-all"
          >
            Logout
          </button>
        </div>
      </div>

      <p className="text-gray-400 text-xs mt-8">© Samsung Electronics</p>
    </div>
  );
}

export default Profile;
