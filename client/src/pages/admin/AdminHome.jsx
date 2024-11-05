// src/components/DashboardLayout.js
import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white h-screen shadow-lg p-5">
      <h1 className="text-3xl font-bold text-pink-600 mb-8">The Bar&Cafe</h1>
      <nav>
        <NavLink to="/dashboard" className="block py-2 text-gray-600 hover:text-pink-600">
          Dashboard
        </NavLink>
        <NavLink to="/menu" className="block py-2 text-gray-600 hover:text-pink-600">
          Menu
        </NavLink>
        <NavLink to="/orders" className="block py-2 text-gray-600 hover:text-pink-600">
          Orders
        </NavLink>
        <NavLink to="/customers" className="block py-2 text-gray-600 hover:text-pink-600">
          Customers
        </NavLink>
        <NavLink to="/analytics" className="block py-2 text-gray-600 hover:text-pink-600">
          Analytics
        </NavLink>
        <NavLink to="/chat" className="block py-2 text-gray-600 hover:text-pink-600">
          Chat
        </NavLink>
        <NavLink to="/settings" className="block py-2 text-gray-600 hover:text-pink-600">
          Settings
        </NavLink>
      </nav>
    </aside>

      {/* Main Content */}
      <div className="flex-grow">
        {/* Navbar */}
        <header className="flex justify-between items-center p-6 bg-white shadow">
          <div className="flex items-center space-x-4">
            <FiSearch className="text-gray-600" />
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg p-2 w-80 focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
            <FiBell className="text-gray-600" />
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="grid grid-cols-4 gap-6 mb-6">
            {/* Statistic Cards */}
            <div className="col-span-1 bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-700">Orders</h2>
              <p className="text-2xl font-bold text-pink-600">1,248</p>
            </div>
            <div className="col-span-1 bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-700">Customers</h2>
              <p className="text-2xl font-bold text-pink-600">9,445</p>
            </div>
            <div className="col-span-1 bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
              <p className="text-2xl font-bold text-pink-600">539</p>
            </div>
            <div className="col-span-1 bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-700">Income</h2>
              <p className="text-2xl font-bold text-pink-600">$18,445</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Sales Figures */}
            <div className="col-span-2 bg-white p-6 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-700">Sales Figures</h2>
              <div className="h-40 bg-gray-200 mt-4 rounded-lg"></div>
            </div>

            {/* Popular Food */}
            <div className="col-span-1 bg-white p-6 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-700">Popular Food</h2>
              <div className="h-40 bg-gray-200 mt-4 rounded-lg"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Daily Target Income */}
            <div className="col-span-1 bg-white p-6 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-700">Daily Target Income</h2>
              <div className="h-40 bg-gray-200 mt-4 rounded-lg"></div>
            </div>

            {/* Favorite Items */}
            <div className="col-span-1 bg-white p-6 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-700">Most Favourite Items</h2>
              <div className="flex space-x-4 mt-4">
                <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
                <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
                <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminHome;
