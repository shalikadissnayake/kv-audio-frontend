import {
  BsGraphDown,
  BsBell,
  BsSun,
  BsMoon,
} from "react-icons/bs";
import { FaRegBookmark, FaRegUser, FaPowerOff } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { NavLink, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminItemsPage from "./adminItemsPage";
import AddItemPage from "./addItemPage";
import UpdateItemPage from "./updateItemPage";
import AdminUsersPage from "./adminUsersPage";
import AdminOrdersPage from "./adminBookingPage";
import AdminDashboardPage from "./AdminDashboardPage";

export default function AdminPage() {
  const [userValidated, setUserValidated] = useState(false);
  const [admin, setAdmin] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/login";

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const user = res.data;
        if (user.role === "admin") {
          setAdmin(user);
          setUserValidated(true);
        } else {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.error(err);
        setUserValidated(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const linkClasses =
    "flex items-center gap-2 px-4 py-2 text-lg font-medium hover:bg-blue-300 transition rounded";
  const activeLink = "bg-blue-500 text-white shadow";

  return (
    <div className={`flex h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gradient-to-br from-blue-500 to-black text-black"}`}>
      {/* Sidebar */}
      <aside className="w-60 bg-blue-200 dark:bg-gray-800 p-4 shadow-lg flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-center text-blue-900 dark:text-white mb-6">
            Admin Panel
          </h2>
          <div className="space-y-2">
            <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? `${linkClasses} ${activeLink}` : linkClasses}>
              <BsGraphDown /> Dashboard
            </NavLink>
            <NavLink to="/admin/orders" className={({ isActive }) => isActive ? `${linkClasses} ${activeLink}` : linkClasses}>
              <FaRegBookmark />
              Orders
              <span className="ml-auto text-xs bg-red-600 text-white px-2 rounded-full">12</span>
            </NavLink>
            <NavLink to="/admin/items" className={({ isActive }) => isActive ? `${linkClasses} ${activeLink}` : linkClasses}>
              <MdOutlineSpeaker />
              Items
            </NavLink>
            <NavLink to="/admin/users" className={({ isActive }) => isActive ? `${linkClasses} ${activeLink}` : linkClasses}>
              <FaRegUser /> Users
            </NavLink>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="space-y-4">
          <button
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-center gap-2 bg-gray-500 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {darkMode ? <BsSun /> : <BsMoon />} {darkMode ? "Light" : "Dark"} Mode
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            <FaPowerOff /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {userValidated && (
          <>
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold">
                  Welcome, {admin.firstName || "Admin"}
                </h1>
                <p className="text-sm text-gray-200 dark:text-gray-400">Manage your store below</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="relative">
                  <BsBell className="text-2xl" />
                  <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full animate-ping"></span>
                </button>
                <img
                  src={admin.profilePicture || "https://vectorified.com/images/default-user-icon-33.jpg"}
                  alt="admin"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
              </div>
            </div>

            {/* Routes */}
            <Routes>
              <Route path="/dashboard" element={<AdminDashboardPage />} />
              <Route path="/orders" element={<AdminOrdersPage />} />
              <Route path="/users" element={<AdminUsersPage />} />
              <Route path="/items" element={<AdminItemsPage />} />
              <Route path="/items/add" element={<AddItemPage />} />
              <Route path="/items/edit" element={<UpdateItemPage />} />
            </Routes>
          </>
        )}
      </main>
    </div>
  );
}
