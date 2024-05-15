
'use client'

export default function Diary() {
  return (
    <main className="flex flex-col items-center w-screen bg-[url('/image/gridbg.png')]  ">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className=" ">Diary</h1>
        <a href="/select-feel">
          <button className='flex flex-row justify-center items-center gap-2 bg-[#6C2BB8] w-[110px] rounded-[100px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 ' 
          type="button"><img className="w-[15px] h-auto" src="image/plus.png"/>NEW</button>
        </a>
      </div>
    </main>
  );
}