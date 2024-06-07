"use client";
import { useState, useEffect } from "react";
import { json } from "stream/consumers";
import "./page.css";
export default function Page() {
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const fetch_id = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/Account/Gettoken", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data_id = await res.json();
      if (data_id.message === "No token found") {
        window.location.href = "/sign-in";
        return;
      }
      setId(data_id.id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
      setData(data.diaryEntries);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetch_id();
    fetch_data(id);
  }, [id, data]);
  const keys = Object.keys(data);

  const pages = keys.flatMap((key) => {
    const dateData = data[key];
    const pageKeys = Object.keys(dateData.page);
    return pageKeys.map((pageKey) => dateData.page[pageKey]);
  });

  return (
    <main className="flex flex-col w-screen h-auto bg-[url('/image/gridbg.png')] font-mitr text-[#212121]">
      <div className="w-screen flex justify-center">
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-[50px] font-semibold">All Your Memory</h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {pages.map((page, index) => (
              <div
                key={index}
                className="w-[350px] h-[300px] bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-10 rounded-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              >
                <div className="flex flex-row justify-between">
                  <h1 className="text-[25px] font-semibold">
                    {page.dateandtime}
                  </h1>
                  {/* feeling */}
                  <div className="container flex flex-col justify-center items-center">
                    {page.mood === "happy" ? (
                      <>
                        <div className="Happy_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
                          <div className="reflection"></div>
                          <div className="inner-glow"></div>
                        </div>
                        <h2 className="text mt-[10px]">Happy</h2>
                      </>
                    ) : null}

                    {page.mood === "excited" ? (
                      <>
                        <div className="Excited_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
                          <div className="reflection"></div>
                          <div className="inner-glow"></div>
                        </div>
                        <h2 className="text mt-[10px]">Excited</h2>
                      </>
                    ) : null}

                    {page.mood === "loved" ? (
                      <>
                        <div className="Loved_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
                          <div className="reflection"></div>
                          <div className="inner-glow"></div>
                        </div>
                        <h2 className="text mt-[10px]">Loved</h2>
                      </>
                    ) : null}

                    {page.mood === "calm" ? (
                      <>
                        <div className="Calm_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
                          <div className="reflection"></div>
                          <div className="inner-glow"></div>
                        </div>
                        <h2 className="text mt-[10px]">Calm</h2>
                      </>
                    ) : null}

                    {page.mood === "indifferent" ? (
                      <>
                        <div className="Indifferent_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
                          <div className="reflection"></div>
                          <div className="inner-glow"></div>
                        </div>
                        <h2 className="text mt-[10px]">Indifferent</h2>
                      </>
                    ) : null}

                    {page.mood === "worry" ? (
                      <>
                        <div className="Worry_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
                          <div className="reflection"></div>
                          <div className="inner-glow"></div>
                        </div>
                        <h2 className="text mt-[10px]">Worry</h2>
                      </>
                    ) : null}

                    {page.mood === "tired" ? (
                      <>
                        <div className="Tired_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient ">
                          <div className="reflection"></div>
                          <div className="inner-glow"></div>
                        </div>
                        <h2 className="text mt-[10px]">Tired</h2>
                      </>
                    ) : null}
                    {page.mood === "sad" ? (
                      <>
                        <div className="Sad_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
                          <div className="reflection"></div>
                          <div className="inner-glow"></div>
                        </div>
                        <h2 className="text mt-[10px]">Sad</h2>
                      </>
                    ) : null}
                    {page.mood === "moody" ? (
                      <>
                        <div className="Moody_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
                          <div className="reflection"></div>
                          <div className="inner-glow"></div>
                        </div>
                        <h2 className="text mt-[10px]">Moody</h2>
                      </>
                    ) : null}
                  </div>
                </div>
                <h1 className="text-[25px] font-semibold">{page.text}</h1>
              </div>
            ))}
          </div>
        </div>

        <a href="/select-feeling">
          <button
            className="fixed bottom-2 right-5 flex flex-row justify-center items-center gap-2 bg-[#6C2BB8] w-[110px] rounded-[100px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100"
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
