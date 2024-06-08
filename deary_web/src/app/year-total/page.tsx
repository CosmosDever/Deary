"use client";
import { useState, useEffect, useRef } from "react";
import "./page.css";
import Swal from "sweetalert2";

export default function Page() {
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPageText, setSelectedPageText] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const dropdownRef = useRef(null);

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

  const fetch_data = async (params) => {
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
  const [mood, setMood] = useState([]);
  const getAllMoods = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/Diary/${id}/getmoods`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      if (data.success) {
        console.log("Moods:", data.moods);
        setMood(data.moods);
      } else {
        setMood([]);
        console.error("Failed to retrieve moods:", data.message);
      }
    } catch (error) {
      setMood([]);
      console.error("Error retrieving moods:", error);
    }
  };

  const deletePage = async (date, pageKey) => {
    Swal.fire({
      title: "Are you sure?",
      html: `
      <input type="text" id="confirmText" class="swal2-input" placeholder="Type 'delete' to confirm">
    `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6C2BB8",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      preConfirm: () => {
        const confirmText = document.getElementById("confirmText").value;
        if (confirmText.toLowerCase() !== "delete") {
          Swal.showValidationMessage("Please type 'delete' to confirm.");
        }
        return confirmText;
      },
    }).then(async (result) => {
      if (result.isConfirmed && result.value.toLowerCase() === "delete") {
        // Perform deletion
        try {
          const res = await fetch(
            `http://localhost:3000/api/Diary/${id}/${date}/${pageKey}/deletepage`,
            {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            }
          );

          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          Swal.fire({
            title: "Deleted!",
            text: "Your page has been deleted.",
            icon: "success",
          }).then(() => {
            window.location.reload();
          });
        } catch (error) {
          console.error("Error deleting page:", error);
        }
      }
    });
  };

  useEffect(() => {
    fetch_id();
    if (id) {
      fetch_data(id);
      getAllMoods(id);
    }
  }, [id]);

  const keys = Object.keys(data);

  const pages = keys.flatMap((key) => {
    const dateData = data[key];
    if (!dateData.page) return [];
    const pageKeys = Object.keys(dateData.page);
    return pageKeys.map((pageKey) => ({
      ...dateData.page[pageKey],
      date: key,
      pageKey,
    }));
  });

  const shouldShowReadMore = (text) => {
    const tempElement = document.createElement("div");
    tempElement.style.position = "absolute";
    tempElement.style.visibility = "hidden";
    tempElement.style.whiteSpace = "pre-wrap";
    tempElement.style.width = "450px";
    tempElement.className = "text-[22px] whitespace-pre-wrap break-words";
    tempElement.innerText = text;

    document.body.appendChild(tempElement);
    const lineHeight = parseInt(
      window.getComputedStyle(tempElement).lineHeight,
      10
    );
    const height = tempElement.clientHeight;
    document.body.removeChild(tempElement);

    return height / lineHeight > 4;
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const moodColors = {
    happy: "#ffdf0ff1",
    excited: "#ff820df1",
    loved: "#e13abcf1",
    calm: "#15ba30f1",
    indifferent: "#6e6e6ef1",
    worry: "#76337df1",
    tired: "#507ba0f1",
    sad: "#201359f1",
    moody: "#dd1717f1",
  };
  const moodCounts = mood.reduce((acc, mood) => {
    acc[mood] = (acc[mood] || 0) + 1;
    return acc;
  }, {});

  const totalMoods = mood.length;
  const moodPercentages = Object.keys(moodCounts).map((mood) => ({
    mood,
    percentage: (moodCounts[mood] / totalMoods) * 100,
    color: moodColors[mood],
  }));

  // Generate gradient string
  const gradientStops = moodPercentages.reduce(
    (acc, { percentage, color }, index) => {
      const previousPercentage = acc.length
        ? acc[acc.length - 1].percentage
        : 0;
      const newPercentage = previousPercentage + percentage;
      acc.push({ color, percentage: newPercentage });
      return acc;
    },
    []
  );

  let gradientString = "";
  if (moodPercentages.length > 0) {
    gradientString =
      moodPercentages.length > 1
        ? gradientStops
            .map(({ color, percentage }) => `${color} ${percentage}%`)
            .join(", ")
        : `${moodPercentages[0].color} 0%, ${moodPercentages[0].color} 100%`;
  }

  const orbStyles = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${gradientString})`,
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 0 30px 0px rgba(255, 255, 255, 0.5) inset",
  };

  return (
    <main className="flex flex-col w-screen min-h-screen bg-[url('/image/gridbg.png')] bg-repeat font-mitr text-[#212121]">
      <div className="w-screen flex justify-center">
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-[50px] font-semibold">All Your Memory</h1>
          {pages.length === 0 ? (
            <div className="flex justify-center items-center h-full mt-10">
              <h2 className="text-[22px] font-medium opacity-50 mt-20">
                No entries yet
              </h2>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div style={orbStyles}>
                {/* Render reflection effect */}
                <div
                  style={{
                    position: "absolute",
                    width: "45%",
                    height: "25%",
                    top: "10%",
                    left: "30%",
                    background:
                      "linear-gradient(to bottom, rgba(255, 255, 255, 0.6), transparent)",
                    zIndex: "2",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div className="w-full h-10 text-center mt-6 text-3xl font-medium">
                {" "}
                This Orb is all your mood!!
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
                {pages.map((page, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[450px] h-auto bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-10 rounded-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative"
                  >
                    <div className="flex flex-col justify-center ">
                      <div className="flex flex-row justify-between">
                        <h1 className="text-[25px] font-medium">
                          {page.dateandtime}
                        </h1>
                        <div className="flex justify-end">
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="relative"
                          >
                            <span className="text-[24px] opacity-50">x</span>
                          </button>
                          {dropdownOpen === index && (
                            <div
                              ref={dropdownRef}
                              className="absolute right-0 mt-2 w-[150px] bg-white shadow-lg rounded"
                            >
                              <button
                                className="w-full text-left px-4 py-2 text-[16px] text-red-600 hover:bg-gray-100"
                                onClick={() => {
                                  deletePage(page.date, page.pageKey);
                                  toggleDropdown(index);
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="container flex flex-col justify-center items-center">
                        {page.mood === "happy" && (
                          <>
                            <div className="Happy_orb mt-[20px] drop-shadow-lg hover:animate-bounce animate-gradient">
                              <div className="reflection"></div>
                              <div className="inner-glow"></div>
                            </div>
                            <h2 className="text-[18px] mt-[10px] font-medium">
                              Happy
                            </h2>
                          </>
                        )}
                        {page.mood === "excited" && (
                          <>
                            <div className="Excited_orb mt-[20px] drop-shadow-lg hover:animate-bounce animate-gradient">
                              <div className="reflection"></div>
                              <div className="inner-glow"></div>
                            </div>
                            <h2 className="text-[18px] mt-[10px] font-medium">
                              Excited
                            </h2>
                          </>
                        )}
                        {page.mood === "loved" && (
                          <>
                            <div className="Loved_orb mt-[20px] drop-shadow-lg hover:animate-bounce animate-gradient">
                              <div className="reflection"></div>
                              <div className="inner-glow"></div>
                            </div>
                            <h2 className="text-[18px] mt-[10px] font-medium">
                              Loved
                            </h2>
                          </>
                        )}
                        {page.mood === "calm" && (
                          <>
                            <div className="Calm_orb mt-[20px] drop-shadow-lg hover:animate-bounce animate-gradient">
                              <div className="reflection"></div>
                              <div className="inner-glow"></div>
                            </div>
                            <h2 className="text-[18px] mt-[10px] font-medium">
                              Calm
                            </h2>
                          </>
                        )}
                        {page.mood === "indifferent" && (
                          <>
                            <div className="Indifferent_orb mt-[20px] drop-shadow-lg hover:animate-bounce animate-gradient">
                              <div className="reflection"></div>
                              <div className="inner-glow"></div>
                            </div>
                            <h2 className="text-[18px] mt-[10px] font-medium">
                              Indifferent
                            </h2>
                          </>
                        )}
                        {page.mood === "worry" && (
                          <>
                            <div className="Worry_orb mt-[20px] drop-shadow-lg hover:animate-bounce animate-gradient">
                              <div className="reflection"></div>
                              <div className="inner-glow"></div>
                            </div>
                            <h2 className="text-[18px] mt-[10px] font-medium">
                              Worry
                            </h2>
                          </>
                        )}
                        {page.mood === "tired" && (
                          <>
                            <div className="Tired_orb mt-[20px] drop-shadow-lg hover:animate-bounce animate-gradient">
                              <div className="reflection"></div>
                              <div className="inner-glow"></div>
                            </div>
                            <h2 className="text-[18px] mt-[10px] font-medium">
                              Tired
                            </h2>
                          </>
                        )}
                        {page.mood === "sad" && (
                          <>
                            <div className="Sad_orb mt-[20px] drop-shadow-lg hover:animate-bounce animate-gradient">
                              <div className="reflection"></div>
                              <div className="inner-glow"></div>
                            </div>
                            <h2 className="text-[18px] font-medium mt-[10px]">
                              Sad
                            </h2>
                          </>
                        )}
                        {page.mood === "moody" && (
                          <>
                            <div className="Moody_orb mt-[20px] drop-shadow-lg hover:animate-bounce animate-gradient">
                              <div className="reflection"></div>
                              <div className="inner-glow"></div>
                            </div>
                            <h2 className="text-[18px] mt-[10px] font-medium">
                              Moody
                            </h2>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="text-[22px] mt-[10px] whitespace-pre-wrap break-words overflow-hidden relative">
                      <p className="line-clamp-4 text-center">{page.text}</p>
                      {shouldShowReadMore(page.text) && (
                        <div className="flex justify-end px-3">
                          <button
                            className="read-more-button flex justify-center items-center text-[18px] text-white bg-[#6C2BB8] w-[130px] rounded-[10px] p-2 border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 mt-3"
                            onClick={() => {
                              setSelectedPageText(page.text);
                              setShowPopup(true);
                            }}
                          >
                            Read More
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="max-w-lg bg-white p-8 rounded shadow-lg relative">
            <button
              className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowPopup(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p className="text-xl text-gray-800 break-words">
              {selectedPageText}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
