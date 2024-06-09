"use client";
import "./page.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Page() {
    const router = useRouter();
    const [feeling, setFeeling] = useState("");

    const handleFeelingClick = (feeling: string) => {
        if (feeling === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please select a feeling!",
            });
            return;
        }
        router.push(`/note?feeling=${feeling}`);
    };
    return (
        <main className="flex flex-col w-screen h-auto  bg-[url('/image/gridbg.png')] font-mitr mt-[75px] ">
            <div className="flex min-h-screen flex-col items-center p-10">
                <h1 className="text-[45px] font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-[#662DC0] to-[#A01790] mb-[25px] ">
                    How are you feeling?
                </h1>

                <div className="flex flex-col justify-center  gap-5 text-[#212121]">
                    <div className="flex flex-row justify-center gap-7">
                        <div className="flex flex-col items-center">
                            <div className={`Happy_orb drop-shadow-lg hover:animate-bounce animate-gradient cursor-pointer transition-transform duration-300 ${feeling === 'happy' ? 'ring-4 ring-[#6C2BB8] border-2 border-[#6C2BB8]' : ''}`}
                            onClick={() => setFeeling("happy")}
                        >
                                <div className="reflection"></div>
                                <div className="inner-glow"></div>
                            </div>
                            <h2 className="text mt-[10px] ">Happy</h2>
                        </div>


                        <div className="flex flex-col items-center">
                            <div className={`Excited_orb drop-shadow-lg hover:animate-bounce animate-gradient cursor-pointer transition-transform duration-300 ${feeling === 'excited' ? 'ring-4 ring-[#6C2BB8] border-2 border-[#6C2BB8]' : ''}`}
                            onClick={() => setFeeling("excited")}
                        >
                                <div className="reflection"></div>
                                <div className="inner-glow"></div>
                            </div>
                            <h2 className="text mt-[10px] ">Excited</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className={`Loved_orb drop-shadow-lg hover:animate-bounce animate-gradient cursor-pointer transition-transform duration-300 ${feeling === 'loved' ? 'ring-4 ring-[#6C2BB8] border-2 border-[#6C2BB8]' : ''}`}
                            onClick={() => setFeeling("loved")}
                        >
                                <div className="reflection"></div>
                                <div className="inner-glow"></div>
                            </div>
                            <h2 className="text mt-[10px] ">Loved</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className={`Calm_orb drop-shadow-lg hover:animate-bounce animate-gradient cursor-pointer transition-transform duration-300 ${feeling === 'calm' ? 'ring-4 ring-[#6C2BB8] border-2 border-[#6C2BB8]' : ''}`}
                            onClick={() => setFeeling("calm")}
                        >
                                <div className="reflection"></div>
                                <div className="inner-glow"></div>
                            </div>
                            <h2 className="text mt-[10px] ">Calm</h2>
                        </div>
                        
                        <div className="flex flex-col items-center">
                            <div className={`Indifferent_orb drop-shadow-lg hover:animate-bounce animate-gradient cursor-pointer transition-transform duration-300 ${feeling === 'indifferent' ? 'ring-4 ring-[#6C2BB8] border-2 border-[#6C2BB8]' : ''}`}
                            onClick={() => setFeeling("indifferent")}
                        >
                                <div className="reflection"></div>
                                <div className="inner-glow"></div>
                            </div>
                            <h2 className="text mt-[10px] ">Indifferent</h2>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center gap-7">
                        <div className="flex flex-col items-center">
                            <div className={`Worry_orb drop-shadow-lg hover:animate-bounce animate-gradient cursor-pointer transition-transform duration-300 ${feeling === 'worry' ? 'ring-4 ring-[#6C2BB8] border-2 border-[#6C2BB8]' : ''}`}
                            onClick={() => setFeeling("worry")}
                        >
                                <div className="reflection"></div>
                                <div className="inner-glow"></div>
                            </div>
                            <h2 className="text mt-[10px] ">Worry</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className={`Tired_orb drop-shadow-lg hover:animate-bounce animate-gradient cursor-pointer transition-transform duration-300 ${feeling === 'tired' ? 'ring-4 ring-[#6C2BB8] border-2 border-[#6C2BB8]' : ''}`}
                            onClick={() => setFeeling("tired")}
                        >
                                <div className="reflection"></div>
                                <div className="inner-glow"></div>
                            </div>
                            <h2 className="text mt-[10px] ">Tired</h2>
                        </div>


                        <div className="flex flex-col items-center">
                            <div className={`Sad_orb drop-shadow-lg hover:animate-bounce animate-gradient cursor-pointer transition-transform duration-300 ${feeling === 'sad' ? 'ring-4 ring-[#6C2BB8] border-2 border-[#6C2BB8]' : ''}`}
                            onClick={() => setFeeling("sad")}
                        >
                                <div className="reflection"></div>
                                <div className="inner-glow"></div>
                            </div>
                            <h2 className="text mt-[10px] ">Sad</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className={`Moody_orb drop-shadow-lg hover:animate-bounce animate-gradient cursor-pointer transition-transform duration-300 ${feeling === 'moody' ? 'ring-4 ring-[#6C2BB8] border-2 border-[#6C2BB8]' : ''}`}
                            onClick={() => setFeeling("moody")}
                        >
                                <div className="reflection"></div>
                                <div className="inner-glow"></div>
                            </div>
                            <h2 className="text mt-[10px] ">Moody</h2>
                        </div>
                    </div>
                </div>


                {/* button */}
                <div className="flex flex-row justify-center gap-5">
                    <a href="/year-total">
                        <button
                            className=" bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
                            transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 mt-10 "
                            type="button"
                        >
                            Back
                        </button>
                    </a>
                    <a>
                        <button
                            className=" bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
                            transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 mt-10 "
                            type="button"
                            onClick={() => handleFeelingClick(feeling)}
                        >
                            Next
                        </button>
                    </a>
                </div>
            </div>
        </main>
    );
}
