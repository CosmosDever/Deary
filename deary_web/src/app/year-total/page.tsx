"use client";
import { useState, useEffect } from "react";

const diary = [];
const fetch_data = async (params: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Diary/${params}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetch_data("65eb4f63337aa5f8a5af4a77");

export default function Page() {
  return (
    <main className="flex flex-col w-screen h-auto  bg-[url('/image/gridbg.png')] font-mitr text-[#212121]">
      <div className="w-screen flex  justify-center ">
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-[50px] font-semibold ">Year</h1>
          <div className="grid grid-cols-3 gap-5 mt-5">
            <div className="flex flex-col items-center w-[350px] h-[300px] bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-10 px-16 rounded-[50px] gap-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              month
            </div>
            <div className="flex flex-col items-center w-[350px] h-[300px] bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-10 px-16 rounded-[50px] gap-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              month
            </div>
            <div className="flex flex-col items-center w-[350px] h-[300px] bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-10 px-16 rounded-[50px] gap-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              month
            </div>
            <div className="flex flex-col items-center w-[350px] h-[300px] bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-10 px-16 rounded-[50px] gap-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              month
            </div>
            <div className="flex flex-col items-center w-[350px] h-[300px] bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-10 px-16 rounded-[50px] gap-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              month
            </div>
          </div>
        </div>

        <a href="/select-feeling">
          <button
            className="fixed bottom-2 right-5 flex flex-row justify-center items-center gap-2 bg-[#6C2BB8] w-[110px] rounded-[100px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 "
            type="button"
          >
            <img className="w-[15px] h-auto" src="image/plus.png" />
            NEW
          </button>
        </a>
      </div>
    </main>
  );
}
