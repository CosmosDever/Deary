
'use client'

export default function Diary() {
return (
    <main className="flex min-h-screen flex-col items-center p-16 gap-10">
        {/* เขียนเสร็จแล้ว */}
        <div className="flex flex-col items-center w-[1000px] h-auto bg-black bg-opacity-[30%] backdrop-blur-sm p-10 rounded-[50px] shadow-lg ">
            <h1 className=" ">Friday, 19 April 2024, 12:30 PM</h1>
            <div className="w-24 h-24 bg-blue-300 rounded-full mt-[40px]"></div>
            <h2 className="mt-[10px]">Sad</h2>
            <p className="mt-[40px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>


        {/* เริ่มเขียน */}
        <div className="flex flex-col items-center w-[1000px] h-auto bg-black bg-opacity-[30%] backdrop-blur-sm p-10 rounded-[50px] shadow-lg">
            <h1 className=" ">Friday, 19 April 2024, 12:30 PM</h1>
            <div className="w-24 h-24 bg-blue-300 rounded-full mt-[40px]"></div>
            <h2 className="mt-[10px]">Sad</h2>
            <p className="mt-[40px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='signin-button bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
                        transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 mt-[40px]  ' 
                type="button">Done</button>
        </div>

        {/* กำลังเขียน */}



            <a href="/month-total">
                <button className='signin-button bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
                        transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 mt-[40px]  ' 
                type="button">Next</button>
            </a>
    </main>
);
}