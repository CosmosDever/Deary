
'use client'
import "./SelectFeel.css";

export default function Diary() {
return (
    <main className="flex flex-col w-screen h-auto  bg-[url('/image/gridbg.png')] ">
    <div className="flex min-h-screen flex-col items-center p-20">
        <h1 className="text-[45px] font-semibold text-black text-transparent bg-clip-text bg-gradient-to-r from-[#662DC0] to-[#A01790] ">How are you feeling?</h1>
        <div className="flex flex-row items-center gap-5">
            <div className="flex flex-col items-center">  
                <div className="Happy_orb mt-[40px] drop-shadow-lg"></div>
                <h2 className="mt-[10px]">Happy</h2>
            </div>

            <div className="flex flex-col items-center">  
                <div className="Excited_orb mt-[40px]"></div>
                <h2 className="mt-[10px]">Excited</h2>
            </div>

            <div className="flex flex-col items-center">  
                <div className="Loved_orb mt-[40px]"></div>
                <h2 className="mt-[10px]">Loved</h2>
            </div>

            <div className="flex flex-col items-center">  
                <div className="Calm_orb mt-[40px]"></div>
                <h2 className="mt-[10px]">Calm</h2>
            </div>

            <div className="flex flex-col items-center">  
                <div className="Indifferent_orb mt-[40px]"></div>
                <h2 className="mt-[10px]">Indifferent</h2>
            </div>
        </div>

        <div className="flex flex-row items-center gap-5">

            <div className="flex flex-col items-center">  
                <div className="Worry_orb mt-[40px]"></div>
                <h2 className="mt-[10px]">Worry</h2>
            </div>

            <div className="flex flex-col items-center">  
                <div className="Tired_orb mt-[40px] drop-shadow-xl"></div>
                <h2 className="mt-[10px]">Tired</h2>
            </div>

            <div className="flex flex-col items-center">  
                <div className="Sad_orb mt-[40px] drop-shadow-xl"></div>
                <h2 className="mt-[10px]">Sad</h2>
            </div>

            <div className="flex flex-col items-center">  
                <div className="Moody_orb mt-[40px]"></div>
                <h2 className="mt-[10px]">Moody</h2>
            </div>

        </div>
        
        <a href="/note">
        <button className='signin-button bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
                            transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 mt-10 ' 
        type="button">Next</button>
        </a>
    </div>
    </main>
);
}