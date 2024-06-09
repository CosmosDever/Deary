"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import "./page.css";
import Swal from "sweetalert2";
import { resolve } from "path";
import { error } from "console";
import { rejects } from "assert";

// Section
function Section({
  index,
  data,
  onTextChange,
  onSaveText,
  onEditText,
  onImageUpload,
  onDeleteImage,
  onDeleteText,
  onDeleteSection,
}) {
  const { text, savedText, image, saveimg, showDeleteButton, currentDateTime } =
    data;

  const confirmDeleteSection = () => {
    if (window.confirm("Are you sure you want to delete this section?")) {
      onDeleteSection(index);
    }
  };

  const confirmDeleteText = () => {
    if (window.confirm("Are you sure you want to delete this text?")) {
      onDeleteText(index);
    }
  };
  const [from_dairy, setfrom_dairy] = useState({
    newText: "",
    mood: "",
    image: "none",
  });
  const params = useSearchParams();
  useEffect(() => {
    const feeling = params.get("feeling");

    setfrom_dairy((prev) => ({
      ...prev,
      mood: String(feeling),
      newText: String(savedText),
      image: saveimg,
    }));

    // console.log(from_dairy);
  });
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear().toString().slice(-2)}/${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}, ${currentDate
    .getHours()
    .toString()
    .padStart(2, "0")}:${currentDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${currentDate.getSeconds().toString().padStart(2, "0")}`;
  let datePart: string = formattedDate.split(",")[0];
  let formattedDateSimple: string = datePart.replace(/\//g, "_");
  const [id, setId] = useState("");
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

  useEffect(() => {
    fetch_id();
  }, []);
  const handleNextPage = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/Diary/${id}/${formattedDateSimple}/addpage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newText: from_dairy.newText,
            mood: from_dairy.mood,
            image: from_dairy.image,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.success === true) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "your page added successfully!",
        }).then(() => {
          window.location.href = "/year-total";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        return;
      }
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[1000px] h-auto bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-6 md:p-10 md:px-12 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto">
    <div className="flex flex-col w-[1000px] h-auto bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-10 px-12 rounded-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      <div className="flex flex-row justify-between">
        <h1 className="flex justify-start text-[#363636] text-[18px] sm:text-[20px] md:text-[25px] font-semibold">
        <h1 className="flex justify-start text-[#363636] text-[25px] font-semibold">
          {currentDateTime}
        </h1>
      </div>
  

      {/* feeling */}
      <div className="container flex flex-col justify-center items-center">
        {from_dairy.mood === "happy" && (
        {from_dairy.mood === "happy" ? (
          <>
            <div className="Happy_orb mt-[20px] md:mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
            <div className="Happy_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
              <div className="reflection"></div>
              <div className="inner-glow"></div>
            </div>
            <h2 className="text mt-[10px]">Happy</h2>
          </>
        )}
        {from_dairy.mood === "excited" && (
        ) : null}

        {from_dairy.mood === "excited" ? (
          <>
            <div className="Excited_orb mt-[20px] md:mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
            <div className="Excited_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
              <div className="reflection"></div>
              <div className="inner-glow"></div>
            </div>
            <h2 className="text mt-[10px]">Excited</h2>
          </>
        )}
        {from_dairy.mood === "loved" && (
        ) : null}

        {from_dairy.mood === "loved" ? (
          <>
            <div className="Loved_orb mt-[20px] md:mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
            <div className="Loved_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
              <div className="reflection"></div>
              <div className="inner-glow"></div>
            </div>
            <h2 className="text mt-[10px]">Loved</h2>
          </>
        )}
        {from_dairy.mood === "calm" && (
        ) : null}

        {from_dairy.mood === "calm" ? (
          <>
            <div className="Calm_orb mt-[20px] md:mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
            <div className="Calm_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
              <div className="reflection"></div>
              <div className="inner-glow"></div>
            </div>
            <h2 className="text mt-[10px]">Calm</h2>
          </>
        )}
        {from_dairy.mood === "indifferent" && (
        ) : null}

        {from_dairy.mood === "indifferent" ? (
          <>
            <div className="Indifferent_orb mt-[20px] md:mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
            <div className="Indifferent_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
              <div className="reflection"></div>
              <div className="inner-glow"></div>
            </div>
            <h2 className="text mt-[10px]">Indifferent</h2>
          </>
        )}
        {from_dairy.mood === "worry" && (
        ) : null}

        {from_dairy.mood === "worry" ? (
          <>
            <div className="Worry_orb mt-[20px] md:mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
            <div className="Worry_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
              <div className="reflection"></div>
              <div className="inner-glow"></div>
            </div>
            <h2 className="text mt-[10px]">Worry</h2>
          </>
        )}
        {from_dairy.mood === "tired" && (
        ) : null}

        {from_dairy.mood === "tired" ? (
          <>
            <div className="Tired_orb mt-[20px] md:mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
            <div className="Tired_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient ">
              <div className="reflection"></div>
              <div className="inner-glow"></div>
            </div>
            <h2 className="text mt-[10px]">Tired</h2>
          </>
        )}
        {from_dairy.mood === "sad" && (
        ) : null}
        {from_dairy.mood === "sad" ? (
          <>
            <div className="Sad_orb mt-[20px] md:mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
            <div className="Sad_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
              <div className="reflection"></div>
              <div className="inner-glow"></div>
            </div>
            <h2 className="text mt-[10px]">Sad</h2>
          </>
        )}
        {from_dairy.mood === "moody" && (
        ) : null}
        {from_dairy.mood === "moody" ? (
          <>
            <div className="Moody_orb mt-[20px] md:mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
            <div className="Moody_orb mt-[40px] drop-shadow-lg hover:animate-bounce animate-gradient">
              <div className="reflection"></div>
              <div className="inner-glow"></div>
            </div>
            <h2 className="text mt-[10px]">Moody</h2>
          </>
        )}
        ) : null}
      </div>
  

      {/* text */}
      {!savedText ? (
        <div className="flex justify-center items-center w-full md:w-[700px] lg:w-[900px] h-auto mt-[20px] md:mt-[40px]">
          <div className="relative w-full min-w-[125px] sm:min-w-[250px] md:min-w-[500px]">
        <div className="flex justify-center items-center w-[900px] h-auto mt-[40px]">
          <div className="relative w-full min-w-[500px]">
            <textarea
              rows={9}
              className="peer h-auto w-full text-center resize-none rounded-[7px] border border-gray-700 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-[16px] md:text-[18px] font-normal text-[#363636] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-gray-50"
              className="peer h-auto w-full text-center resize-none rounded-[7px] border border-gray-700 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-[18px] font-normal text-[#363636] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-gray-50"
              placeholder=" "
              value={text}
              onChange={(e) => onTextChange(e, index)}
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[16px] md:text-[18px] font-normal leading-tight text-gray-700 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[18px] font-normal leading-tight text-gray-700 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
              Tell me something...
            </label>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full md:w-[900px] h-auto mt-[20px] md:mt-[40px]">
          <p className="text-[#363636] text-[16px] md:text-[18px]">{savedText}</p>
        <div className="flex justify-center items-center w-[900px] h-auto mt-[40px]">
          <p className="text-[#363636] text-[18px]">{savedText}</p>
        </div>
      )}
<<<<<<< HEAD
      {image && (
        <div className="relative flex justify-center items-center w-auto h-auto mt-[20px]">
          <img
            src={image}
            alt="Uploaded"
            className="max-w-full max-h-[300px] object-contain rounded-2xl"
          />
          {showDeleteButton && (
            <img
              className="absolute top-2 right-2 w-[35px] h-[35px] cursor-pointer "
              src="image/delete.png"
              onClick={() => onDeleteImage(index)}
            />
          )}
        </div>
      )}

      <div className="flex justify-end gap-5 mt-10">
        {!savedText ? (
          <div className="flex justify-between w-full">
            <div>
              {" "}
              <label
                htmlFor={`file-input-${index}`}
                className="cursor-pointer flex justify-start w-[40px] h-[40px]"
              >
                <img src="image/pic.png" alt="Image" />
                <input
                  id={`file-input-${index}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => onImageUpload(e, index)}
                />
              </label>
            </div>

=======

      <div className="flex justify-end gap-5 mt-10">
        {!savedText ? (
          <>
>>>>>>> parent of 45fc330 (responsive)
            <button
              className="bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100"
              type="button"
              onClick={() => onSaveText(index)}
            >
              Done
            </button>
<<<<<<< HEAD
          </div>
=======
          </>
>>>>>>> parent of 45fc330 (responsive)
        ) : (
          <div className="flex gap-3 justify-between w-full">
            <div className="flex gap-3">
              <img
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer ml-auto"
                className="w-[40px] h-[40px] cursor-pointer ml-auto"
                src="image/edit.png"
                alt="Edit"
                onClick={() => onEditText(index)}
              />
              {/* <img
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer"
              <img
                className="w-[40px] h-[40px] cursor-pointer"
                src="image/bin.png"
                alt="Delete"
                onClick={confirmDeleteSection}
              /> */}
              />
            </div>
            <div>
              <button
                className="signin-button bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
                                        transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100"
                type="button"
                onClick={() => handleNextPage()}
              >
                Next
              </button>
            </div>
            <button
              className="bg-[#6C2BB8] w-[100px] md:w-[110px] rounded-[10px] p-2 text-white border-black border-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100"
              type="button"
              onClick={() => handleNextPage()}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
  
}

export default function Page() {
  const [sections, setSections] = useState([
    {
      text: "",
      savedText: null,
      image: null,
      saveimg: null,
      showDeleteButton: true,
      currentDateTime: new Date().toLocaleString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }),
    },
  ]);

  const handleTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newSections = sections.slice();
    newSections[index].text = e.target.value || "";

    setSections(newSections);
  };

  const handleSaveText = (index: number) => {
    const newSections = sections.slice();
    newSections[index].savedText = newSections[index].text || "...";
    newSections[index].showDeleteButton = false;
    setSections(newSections);
  };

  const handleEditText = (index: number) => {
    const newSections = sections.slice();
    newSections[index].text = newSections[index].savedText || "";
    newSections[index].savedText = null;
    newSections[index].showDeleteButton = true;
    setSections(newSections);
  };

  const handleDeleteText = (index: number) => {
    const newSections = sections.slice();
    newSections[index].savedText = null;
    newSections[index].showDeleteButton = true;
    setSections(newSections);
  };
  function convertToBase64(file) {
    return new Promise((resolve, rejects) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        rejects(error);
      };
    });
  }

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      console.log(base64);

      const reader = new FileReader();
      reader.onload = (e) => {
        const newSections = sections.slice();
        newSections[index].image = e.target?.result as string;
        newSections[index].saveimg = base64;
        setSections(newSections);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDeleteImage = (index: number) => {
    const newSections = sections.slice();
    newSections[index].image = null;
    setSections(newSections);
  };

  const handleAddSection = () => {
    const newSection = {
      text: "",
      savedText: null,
      image: null,
      showDeleteButton: true,
      currentDateTime: new Date().toLocaleString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }),
    };
    setSections([...sections, newSection]);
  };

  const handleDeleteSection = (index: number) => {
    if (index === 0) {
      const newSections = sections.slice();
      newSections[index] = {
        text: "",
        savedText: null,
        image: null,
        saveimg: null,
        showDeleteButton: true,
        currentDateTime: new Date().toLocaleString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      };
      setSections(newSections);
    } else {
      const newSections = sections.filter((_, i) => i !== index);
      setSections(newSections);
    }
  };

  return (
    <main className="flex flex-col w-screen h-auto text-[18px] bg-[url('/image/gridbg.png')] font-mitr">
      <div className="flex min-h-screen flex-col items-center p-10 gap-10">
        {sections.map((section, index) => (
          <Section
            key={index}
            index={index}
            data={section}
            onTextChange={handleTextChange}
            onSaveText={handleSaveText}
            onEditText={handleEditText}
            onImageUpload={handleImageUpload}
            onDeleteImage={handleDeleteImage}
            onDeleteText={handleDeleteText}
            onDeleteSection={handleDeleteSection}
          />
        ))}

        <div className="flex flex-row justify-center gap-5">
          <a href="/select-feeling">
            <button
              className="signin-button bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
                                        transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100  "
              type="button"
            >
              Back
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
