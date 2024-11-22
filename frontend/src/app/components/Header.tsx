import React from "react";
import Link from "next/link";
import styles from "@/app/styles/Header.module.css";

const Header = () => {
  return (
    <header className="bg-blue-700 shadow-md">
      {/* { Top Header Section } */}
      <div className="bg-orange-300 shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <h5>Mahendra Health Care! Need Help ? Call us at +91 999999990.</h5>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
          {/* <span className="text-white text-xl font-bold">
            Mahendra Healthcare
          </span> */}
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
            Upload Prescription
          </button>
          <div className="flex items-center text-white space-x-2">
            <span>Login/Sign-up</span>
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
