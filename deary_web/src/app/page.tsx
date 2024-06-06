// 'use client'

// export default function Page() {
//   return (
//     <main className="flex flex-col w-screen h-auto bg-[url('/image/gridbg.png')] font-mitr">
//       <section>
//         <div className='flex flex-row justify-center w-screen mt-5  gap-7 px-4 '> {/* section1 */}
//           <div className='text-transparent bg-clip-text bg-gradient-to-r from-[#662DC0] to-[#A01790] mt-20 text-left'>
//             <h1 className='text-[50px]  font-semibold'>How was your day?</h1> <br />
//             <p className='text-[25px] ]'>Welcome to Deary</p>
//             <p className='text-[25px] '>the safest place for your thoughts.</p>
//             <p className='text-[25px]  text-[#212121]'>Let’s keep your memory and your mood!</p>
//             <a href="/sign-in">
//               <button className='bg-[#6C2BB8] w-[180px] rounded-[10px] p-2 text-[20px]  text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 mt-[20px] md:mt-[30px]'>Get started</button>
//             </a>
//           </div>

//           <div className='flex justify-center'>
//             <img className='w-[480px] h-auto mt-7' src="image/rocket.png" />
//           </div>
//         </div>

//         <div className='flex flex-row justify-center mt-10 gap-10 text-[#212121] px-4'> {/* section2 */}
//           <div className='flex flex-row  bg-[#FDF9F2] p-7 rounded-[15px] border-4 border-[#363636]'>
//             <div>
//               <h1 className='text-[20px] font-medium'>Keep a private and free online diary</h1>
//               <div className='text-[16px] mt-4'>
//                 <p>You want to keep your thoughts in a place </p>
//                 <p>where no one can find them?</p>
//                 <p>Or capture great ideas so they do not get lost?</p>
//                 <p>The online diary Deary offers you a safe place </p>
//                 <p>for your very personal topics.</p><br />
//               </div>
//             </div>
//             <div className='flex justify-center'>
//               <img className='w-[180px] h-[190px]' src="image/pencil.png" />
//             </div>
//           </div>

//           <div className='flex flex-row bg-[#FDF9F2] p-7 rounded-[15px] gap-5 border-4 border-[#363636]'>
//             <div>
//               <h1 className='text-[20px]  font-medium'>Mood-Tracking</h1>
//               <p className='text-[16px]  mt-4'>Take note of your feelings while</p>
//               <p className='text-[16px] '>journaling, and keep track of how</p>
//               <p className='text-[16px] '>your mood fluctuates across your</p>
//               <p className='text-[16px] '>journal entries.</p>
//             </div>
//             <div className='flex justify-center'>
//               <img className='w-[190px] h-[190px]' src="image/smile2.png" />
//             </div>
//           </div>
//         </div>

//         <div className='w-screen'> {/* section3 */}
//           <div className='flex flex-row justify-center items-center gap-[40px]  bg-[#FDF9F2] mt-10 border-y-4 border-[#363636] text-[#212121] p-7'>
//             <div className='flex justify-center'>
//               <img className='w-[140px] h-[130px]' src="image/private.png" />
//             </div>
//             <div className='text-center text-[16px] '>
//               <p className='text-[20px] font-medium'>Secret and private</p>
//               <p className='mt-4'>The use of Deary is private only. There is no feature to make entries</p>
//               <p>publicly viewable. This ensures that your secret diary remains safe from</p>
//               <p>prying eyes. Just like in a good old paper diary.</p>
//             </div>
//           </div>

//           <div className='flex flex-row justify-center items-center gap-[40px]  bg-[#FDF9F2] mt-10 border-y-4 border-[#363636] text-[#212121] p-7'>
//             <div className='text-center text-[16px] '>
//               <p className='text-[20px]  font-medium'>Keep your mood</p>
//               <p className='mt-4'>Deary can keep your daily emotions in a crystal ball.</p>
//               <p>So you can see your overall past mood.</p>
//               <p>This allows you to explore yourself and get to know yourself more.</p>
//             </div>
//             <div className='flex justify-center'>
//               <img className='w-[100px]  h-[130px]' src="image/key.png" />
//             </div>
//           </div>

//           <div className='flex flex-row  justify-center items-center gap-[40px] bg-[#FDF9F2] mt-10 border-y-4 border-[#363636] text-[#212121] p-7'>
//             <div className='flex justify-center'>
//               <img className='w-[120px]  h-[140px]' src="image/accesss.png" />
//             </div>
//             <div className='text-center text-[16px] '>
//               <p className='text-[20px] font-medium'>Access via Internet</p>
//               <p className='mt-4'>To use Deary all you need is a computer with Internet access.</p>
//               <p>Whether you are at home or on the move if you have a sudden urge to write,</p>
//               <p>you can access your data at any time and from anywhere.</p>
//             </div>
//           </div>
//         </div>

//         <footer className='flex flex-col justify-center items-center bg-[#363636] h-[120px] mt-10 w-screen gap-3'>
//           <p className='text-white text-[16px] '>Follow us</p>
//           <div className='flex justify-center'>
//             <a href=""><img className='w-[120px]  h-auto' src="image/contact.png" /></a>
//           </div>
//         </footer>
//       </section>
//     </main>
//   );
// }

'use client'

export default function Page() {
  return (
    <main className="flex flex-col w-screen h-auto bg-[url('/image/gridbg.png')] font-mitr">
      <section>
        <div className='flex flex-col md:flex-row md:justify-center md:items-center w-screen mt-5 gap-7 px-4 md:px-7 lg:px-7  '> {/* section1 */}
          <div className='text-transparent bg-clip-text bg-gradient-to-r from-[#662DC0] to-[#A01790] mt-20 sm:mt-10 text-center sm:text-center md:text-left lg:text-left'>
            <h1 className='text-[30px] md:text-[35px] lg:text-[50px] font-semibold'>How was your day?</h1> <br />
            <p className='text-[20px] md:text-[23px] lg:text-[25px]'>Welcome to Deary</p>
            <p className='text-[20px] md:text-[23px] lg:text-[25px]'>the safest place for your thoughts.</p>
            <p className='text-[20px] md:text-[23px] lg:text-[25px] text-[#212121]'>Let’s keep your memory and your mood!</p>
            <a href="/sign-in">
              <button className='bg-[#6C2BB8] w-[150px] md:w-[180px] rounded-[10px] p-2 text-[18px] md:text-[20px] text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 mt-[20px] md:mt-[30px]'>Get started</button>
            </a>
          </div>

          <div className='flex justify-center'>
            <img className='w-[240px] md:w-[360px] lg:w-[480px] h-auto mt-7' src="image/rocket.png" />
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center mt-10 gap-10 text-[#212121] px-4'> {/* section2 */}

          <div className='flex flex-col sm:flex-row sm:justify-center  md:flex-row bg-[#FDF9F2] p-7 rounded-[15px] border-4 border-[#363636] sm:gap-4'>
            <div className="text-center sm:text-left md:text-left">
              <h1 className='text-[20px] font-medium'>Keep a private and free online diary</h1>
              <div className='text-[16px] mt-4'>
                <p>You want to keep your thoughts in a place </p>
                <p>where no one can find them?</p>
                <p>Or capture great ideas so they do not get lost?</p>
                <p>The online diary Deary offers you a safe place </p>
                <p>for your very personal topics.</p><br />
              </div>
            </div>
            <div className='flex justify-center'>
              <img className='w-[140px] md:w-[180px] h-[150px] md:h-[190px]' src="image/pencil.png" />
            </div>
          </div>

          <div className='flex flex-col sm:flex-row sm:justify-center  md:flex-row bg-[#FDF9F2] p-7 rounded-[15px] gap-5 border-4 border-[#363636]'>
            <div className="text-center  sm:text-left md:text-left ">
              <h1 className='text-[20px] font-medium'>Mood-Tracking</h1>
              <p className='text-[16px] mt-4'>Take note of your feelings while</p>
              <p className='text-[16px]'>journaling, and keep track of how</p>
              <p className='text-[16px]'>your mood fluctuates across your</p>
              <p className='text-[16px]'>journal entries.</p>
            </div>
            <div className='flex justify-center'>
              <img className='w-[150px] md:w-[190px] h-[150px] md:h-[190px]' src="image/smile2.png" />
            </div>
          </div>
        </div>

        <div className='w-screen'> {/* section3 */}
          <div className='flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[40px] bg-[#FDF9F2] mt-10 border-y-4 border-[#363636] text-[#212121] p-7'>
            <div className='flex justify-center'>
              <img className='w-[100px] md:w-[140px] h-[100px] md:h-[130px]' src="image/private.png" />
            </div>
            <div className='text-center text-[16px]'>
              <p className='text-[20px] font-medium'>Secret and private</p>
              <p className='mt-4'>The use of Deary is private only. There is no feature to make entries</p>
              <p>publicly viewable. This ensures that your secret diary remains safe from</p>
              <p>prying eyes. Just like in a good old paper diary.</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[40px] bg-[#FDF9F2] mt-10 border-y-4 border-[#363636] text-[#212121] p-7'>
            <div className='text-center text-[16px]'>
              <p className='text-[20px] font-medium'>Keep your mood</p>
              <p className='mt-4'>Deary can keep your daily emotions in a crystal ball.</p>
              <p>So you can see your overall past mood.</p>
              <p>This allows you to explore yourself and get to know yourself more.</p>
            </div>
            <div className='flex justify-center'>
              <img className='w-[80px] md:w-[100px] h-[100px] md:h-[130px]' src="image/key.png" />
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[40px] bg-[#FDF9F2] mt-10 border-y-4 border-[#363636] text-[#212121] p-7'>
            <div className='flex justify-center'>
              <img className='w-[100px] md:w-[120px] h-[120px] md:h-[140px]' src="image/accesss.png" />
            </div>
            <div className='text-center text-[16px]'>
              <p className='text-[20px] font-medium'>Access via Internet</p>
              <p className='mt-4'>To use Deary all you need is a computer with Internet access.</p>
              <p>Whether you are at home or on the move if you have a sudden urge to write,</p>
              <p>you can access your data at any time and from anywhere.</p>
            </div>
          </div>
        </div>

        <footer className='flex flex-col justify-center items-center bg-[#363636] h-[120px] mt-10 w-screen gap-3'>
          <p className='text-white text-[16px]'>Follow us</p>
          <div className='flex justify-center'>
            <a href=""><img className='w-[100px] md:w-[120px] h-auto' src="image/contact.png" /></a>
          </div>
        </footer>
      </section>
    </main>
  );
}
