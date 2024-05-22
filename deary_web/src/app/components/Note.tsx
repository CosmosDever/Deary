
'use client'

import "./Note.css";

export default function Diary() {
return (
    <main className="flex flex-col w-screen h-auto text-[18px] bg-[url('/image/gridbg.png')] ">
    <div className="relative flex min-h-screen flex-col items-center p-10 gap-10">
        <div className="flex flex-col w-[1000px] h-auto bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-10 px-12 rounded-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  ">
            
            <div className="flex flex-row justify-between">
                <h1 className="flex justify-start text-[#363636] text-[25px] font-semibold ">Friday, 19 April 2024, 12:30 PM</h1>
                <img className="flex justify-end w-[25px] h-[25px] " src="image/x.png" />
            </div>
            
            {/* feeling */}
            <div className="container flex flex-col justify-center items-center">  
                <div className="orb mt-[40px] drop-shadow-lg animate-gradient">
                    <div className="reflection" ></div>
                    <div className="inner-glow"></div>
                </div>
                <h2 className="text mt-[10px]">Sad</h2>
            </div>
            {/* text */}
            <div className="flex justify-center items-center w-[900px] h-auto mt-[40px]">
                <div className="relative w-full min-w-[500px]">
                    <textarea rows = {9}  className="peer h-auto w-full text-center  resize-none rounded-[7px] border border-gray-700 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-[18px] font-normal text-[#363636] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500  focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-gray-50"
                    placeholder=" ">
                    </textarea>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[18px] font-normal leading-tight text-gray-700 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-700 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                    Tell me something...
                    </label>
                </div>
            </div>
            {/* <p className="mt-[40px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
            
            
            <div className="flex flex-row justify-between mt-10">
                <div>
                    <img className="flex justify-start w-[40px]" src="image/pic.png" />
                </div>    
                <div className="flex justify-end ">
                <button className='bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2  shadow-[7px_6px_black] 
                    transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100  ' 
                    type="button">Done</button>
                </div>
            </div>
        </div>        
        

            {/* button */}
        <div className="flex flex-row justify-center gap-5">
            <a href="/select-feel">
            <button className='signin-button bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
                                transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100  ' 
            type="button">Back</button>
            </a>
            <a href="/month-total">
            <button className='signin-button bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
                                transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100' 
            type="button">Next</button> 
            </a>
        </div>

        <button className='fixed bottom-2 right-5 flex flex-row justify-center items-center gap-2 bg-[#6C2BB8] w-[60px] h-[60px] rounded-[100px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 ' 
            type="button"><img className="w-[15px] h-auto" src="image/plus.png"/></button>
    </div>
    </main>
);
}