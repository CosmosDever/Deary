
'use client'

export default function Diary() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Diary</h1>
      <a href="/select-feel">
        <button className='signin-button bg-[#6C2BB8] w-[130px] rounded-[100px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 ' 
        type="button"><img src="" alt="" />NEW</button>
      </a>
    </main>
  );
}