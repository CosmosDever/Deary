
'use client'

export default function Diary() {
return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-[45px] font-semibold text-black">How are you feeling?</h1>
        <div className="flex flex-row items-center gap-5">
            <div className="flex flex-col items-center">  
                <div className="w-24 h-24 bg-blue-300 rounded-full mt-[40px]"></div>
                <h2 className="mt-[10px]">Sad</h2>
            </div>
            <div className="flex flex-col items-center">  
                <div className="w-24 h-24 bg-blue-300 rounded-full mt-[40px]"></div>
                <h2 className="mt-[10px]">Sad</h2>
            </div>
            <div className="flex flex-col items-center">  
                <div className="w-24 h-24 bg-blue-300 rounded-full mt-[40px]"></div>
                <h2 className="mt-[10px]">Sad</h2>
            </div>
            <div className="flex flex-col items-center">  
                <div className="w-24 h-24 bg-blue-300 rounded-full mt-[40px]"></div>
                <h2 className="mt-[10px]">Sad</h2>
            </div>
            <div className="flex flex-col items-center">  
                <div className="w-24 h-24 bg-blue-300 rounded-full mt-[40px]"></div>
                <h2 className="mt-[10px]">Sad</h2>
            </div>
        </div>
        
        <a href="/note">
        <button className='signin-button bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
                            transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 mt-10 ' 
        type="button">Next</button>
        </a>
    </main>
);
}