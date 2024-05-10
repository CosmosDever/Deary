
'use client'
import React from 'react'
import gridbg from '@/imalge/gridbg.png'; 
import rocket from '@/image/rocket.png';
import pencil from '@/image/pencil.png';

export default function Home() {
  return (
    <main className="flex flex-col  w-screen bg-[url('/image/gridbg.png')] ">
      <div className=' w-screen'> {/*section1*/}
          <div className='flex justify-between w-screen'>
          <div className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-600  mt-20'>
            <h1>How was your day?</h1> <br />
            <p>Welcome to Deary</p> 
            <p>the safest place for your thoughts.</p>
            <p>Let’s keep your memory and your mood!</p>
            <button className='bg-[#6C2BB8] w-[160px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 mt-[15px]'>Get started</button>
          </div>

          <div>
            <img className='w-[586px] h-[586px]' src="image/rocket.png" />
          </div>
          </div>
      
        <div className='flex flex-row mt-10 gap-10'> {/*section2*/}
          <div className='bg-[#FDF9F2] p-5 rounded-[15px] border-4 border-black flex'>
              <div className=''>
                <p>Keep a private and free online diary</p>
                <p>You want to keep your thoughts in a place </p>
                <p>where no one can find them? </p>
                <p>Or capture great ideas so they do not get lost?</p>
                <p>The online diary Deary offers you a safe place </p>
                <p>for your very personal topics.</p><br />
              </div>
              <div>
                <img className='w-[222px] h-[242px]' src="image/pencil.png"  />
              </div>
          </div>

          <div className='bg-[#FDF9F2] p-5 rounded-[15px] border-4 border-black'>
            <p>Mood-Tracking</p>
            <p>Take note of your feelings while  </p>
            <p>journaling, and keep track of how </p>
            <p>your mood fluctuates across your </p>
            <p>journal entries.</p>
          </div>
        </div>

        <div className='w-screen'> {/*section3*/}
          <div className='bg-[#FDF9F2] mt-10'>
            <div>
              <img src="" alt="" />
            </div>
            <div className='text-center'>
              <p>Secret and private</p>
              <p>The use of Deary is private only. There is no feature to make entries</p>
              <p>publicly viewable. This ensures that your secret diary remains safe from</p>
              <p>prying eyes. Just like in a good old paper diary.</p>
            </div>
          </div>

          <div className='bg-[#FDF9F2] mt-5'>
            <div className='text-center'>
              <p>Keep your mood</p>
              <p>Deary can keep your daily emotions in a crystal ball. </p>
              <p>So you can see your overall past mood. </p>
              <p>This allows you to explore yourself and get to know yourself more.</p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          
          <div className='bg-[#FDF9F2] mt-5'>
            <div>
                <img src="" alt="" />
            </div>
            <div className='text-center'>
              <p>Access via Internet</p>
              <p>To use Deary all you need is a computer with Internet access. </p>
              <p>Whether you are at home or on the move if you have a sudden urge to write, </p>
              <p>you can access your data at any time and from anywhere.</p>
            </div>
          </div>
        </div>
        <footer className='bg-[#363636] h-20 mt-10 w-screen'>
        <p className='text-white'>Follow us</p>
        <div>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
        </div>
      </footer>
      </div>


      
    </main>
  );
}
