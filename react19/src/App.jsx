"use client";

import React, { useState } from "react";
import {
  Home,
  LayoutDashboard,
  Users,
  User,
  Settings,
  Menu
} from "lucide-react";
/* eslint-disable no-unused-vars */
import {motion,AnimatePresence } from "framer-motion";

const SidebarItem = ({ icon, label, active, onClick }) => (
  <div
    className={`flex items-center px-4 py-2 cursor-pointer hover:bg-blue-100 rounded-lg transition-colors duration-200 ${active ? "bg-blue-100" : ""}`}
    onClick={onClick}
  >
    {icon}
    <span className={`ml-2 ${active ? "text-blue-600" : "text-gray-700"}`}>{label}</span>
  </div>
);

const Dropdown = ({ options }) => (
  <motion.div
    className="absolute left-full top-0 ml-2 mt-2 bg-white shadow-lg rounded-lg p-2 z-10"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
  >
    {options.map((option, i) => (
      <div
        key={i}
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded whitespace-nowrap"
      >
        {option}
      </div>
    ))}
  </motion.div>
);

export default function NavigationMenu() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [showDropdown, setShowDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { label: "Home", icon: <Home size={18} /> },
    { label: "Dashboards", icon: <LayoutDashboard size={18} /> },
    { label: "Segments", icon: <Users size={18} /> },
    { label: "Account", icon: <User size={18} /> },
    { label: "Settings", icon: <Settings size={18} /> },
  ];

  const handleMenuClick = (label) => {
    setActiveMenu(label);
    setShowDropdown(label);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-blue-500 flex">
      {/* Mobile Menu Toggle */}
      <div className="absolute top-4 left-4 md:hidden z-20">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white">
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || typeof window !== 'undefined') && (
          <motion.div
            className="bg-white text-black p-2 flex flex-col items-center space-y-4 w-16 md:w-auto md:p-4 md:items-start md:space-y-2 fixed md:static z-10 h-full shadow-lg"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="p-2 hover:bg-blue-100 rounded-full md:flex md:items-center md:rounded-lg md:px-4 md:py-2"
                onClick={() => handleMenuClick(item.label)}
              >
                {item.icon}
                <span className="hidden md:inline ml-2">{item.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 p-6 text-white relative">
        <h1 className="text-2xl font-bold">{activeMenu}</h1>
        <p className="mt-2 text-sm">You selected: {activeMenu}</p>

        {/* Dropdown */}
        <AnimatePresence>
          {showDropdown && (
            <Dropdown options={["Option 1", "Option 2", "Option 3", "Option 4"]} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}  
