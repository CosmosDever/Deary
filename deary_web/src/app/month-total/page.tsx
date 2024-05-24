
'use client'

export default function Page() {
return (
    <main className="flex flex-col w-screen h-auto  bg-[url('/image/gridbg.png')] font-mitr ">
    <div className="w-screen flex  justify-center ">
        <div className="flex flex-col items-center mt-10">
            <div className="flex flex-col items-center w-[1000px] h-[550px] bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-6 px-16 rounded-[50px]  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#662DC0] to-[#A01790] ">November</h1>
                <p className="text-[30px] text-[#212121] font-semibold ">2024</p>
            </div>
            
            {/* button */}
            <div className="fixed top-20 right-10 flex flex-row justify-center ">
                <a href="/diary">
                <button className='bg-[#6C2BB8] w-[110px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] 
                                    transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 mt-10 ' 
                type="button">Next</button>
                </a>
            </div>
        </div>
        
    </div>
    </main>
);
}