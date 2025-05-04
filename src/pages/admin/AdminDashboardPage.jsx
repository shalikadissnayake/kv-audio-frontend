import React from "react";
import { BsGraphUp, BsBoxSeam } from "react-icons/bs";
import { FaUsers, FaClipboardList } from "react-icons/fa";
import axios from "axios";

export default function AdminDashboardPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4">
          <BsGraphUp className="text-blue-600 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold text-blue-700">Total Sales</h2>
            <p className="text-sm text-gray-500">LKR 12,345</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4">
          <BsBoxSeam className="text-green-600 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold text-blue-700">Products</h2>
            <p className="text-sm text-gray-500">320 items</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4">
          <FaUsers className="text-purple-600 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold text-blue-700">Users</h2>
            <p className="text-sm text-gray-500">158 users</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4">
          <FaClipboardList className="text-yellow-600 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold text-blue-700">Orders</h2>
            <p className="text-sm text-gray-500">85 orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}
