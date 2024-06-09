"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./Nav.css";
import Swal from "sweetalert2";
export default function Nav() {
  const [username, setUsername] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  const fetch_id = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/Account/Gettoken", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data_id = await res.json();
      if (data_id.message === "No token found") {
        return;
      }
      setUsername(data_id.username);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSignOut = async () => {
    //signout
    Swal.fire({
      title: "Are you sure?",
      text: "You will be signed out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6C2BB8",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign out!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch("http://localhost:3000/api/Account/Signout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        window.location.href = "/";
      }
    });
  };

  useEffect(() => {
    fetch_id();
  }, []);
  return (
    <nav className=" fixed z-50 top-0 w-screen inset-x-0 h-[75px] bg-[#363636] font-mitr">
      <div className="flex items-center justify-between h-[75px]">
        <Link
          href="/"
          className="flex flex-row items-center gap-0 md:gap-2 text-white text-lg sm:text-xl md:text-2xl font-semibold ml-2 sm:ml-4 md:ml-6"
        >
          <img src="image/dearylogo.png" height="50px" width="50px" alt="Deary Logo" />
          Deary
        </Link>
        <div className="hidden min-[450px]:flex items-center justify-center space-x-2 min-[321px]:space-x-8 mr-6 sm:mr-8 md:mr-10">
          <Link
            href="/year-total"
            className="text-white hover:scale-110 duration-100 text-[12px] sm:text-[14px] md:text-[16px]"
          >
            Diary
          </Link>
          {username !== "" ? (
            <>
              <div className="circle">{username.charAt(0).toUpperCase()}</div>
              <button
                onClick={() => handleSignOut()}
                className="hidden min-[450px]:block justify-center items-center text-white bg-[#DB0361] w-[100px] rounded-[10px] p-2 border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#C60458] duration-100"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/sign-up"
                className="text-white hover:scale-110 duration-100 text-[12px] sm:text-[14px] md:text-[16px]"
              >
                Sign Up
              </Link>
              <Link
                href="/sign-in"
                className="flex justify-center items-center text-white bg-[#DB0361] w-[70px] min-[321px]:w-[80px] sm:w-[90px] md:w-[100px] rounded-[10px] p-1 min-[321px]:p-2 border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#C60458] duration-100 text-[12px] sm:text-[14px] md:text-[16px]"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
        <div className="flex  min-[450px]:hidden items-center mr-6 sm:mr-8">
          <button onClick={toggleDropdown} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {dropdownOpen && (
        <div className="sm:hidden bg-[#363636] text-white py-2 absolute top-[75px] right-0 w-full">
          <Link
            href="/year-total"
            className="block px-4 py-2 text-[12px] sm:text-[14px] hover:bg-gray-700"
          >
            Diary
          </Link>
          {username !== "" ? (
            <>
              <div className="flex items-center px-4 py-2">
                <div className="circle mr-2">{username.charAt(0).toUpperCase()}</div>
                <button
                  onClick={() => handleSignOut()}
                  className="w-full text-left px-4 py-2 text-[12px] sm:text-[14px] bg-[#DB0361] hover:bg-[#C60458] rounded-[10px]"
                >
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                href="/sign-up"
                className="block px-4 py-2 text-[12px] sm:text-[14px] hover:bg-gray-700"
              >
                Sign Up
              </Link>
              <Link
                href="/sign-in"
                className="block px-4 py-2 text-[12px] sm:text-[14px] hover:bg-gray-700 rounded-[10px]"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}