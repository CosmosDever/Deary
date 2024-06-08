"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./Nav.css";
export default function Nav() {
  const [username, setUsername] = useState("");
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
    const res = await fetch("http://localhost:3000/api/Account/Signout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const data = res.json();

    if (data.success === true) {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    fetch_id();
  }, []);
  return (
    <nav className="top-0 w-screen inset-x-0  h-[75px] bg-[#363636] font-mitr ">
      <div className="flex items-center justify-between h-[75px] ">
        <Link
          href="/"
          className="flex flex-row items-center gap-2 text-white text-2xl font-semibold ml-6"
        >
          <img src="image/dearylogo.png" height="50px" width="50px" />
          Deary
        </Link>
        <div className="flex items-center justify-center space-x-8 mr-10">
          <Link
            href="/year-total"
            className="text-white hover:scale-110 duration-100 "
          >
            Diary{" "}
          </Link>
          {username !== "" ? (
            <>
              <div className="circle">{username.charAt(0).toUpperCase()}</div>
              <button
                onClick={() => handleSignOut()}
                className="flex justify-center items-center text-white bg-[#DB0361] w-[100px] rounded-[10px] p-2 border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#C60458] duration-100"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/sign-up"
                className="text-white hover:scale-110 duration-100"
              >
                Sign Up
              </Link>
              <Link
                href="/sign-in"
                className="flex justify-center items-center text-white bg-[#DB0361] w-[100px] rounded-[10px] p-2 border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#C60458] duration-100"
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
