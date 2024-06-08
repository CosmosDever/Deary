"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e: any) => {
    try {
      e.preventDefault();
      const res = await fetch(`http://localhost:3000/api/Account/Signin`, {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'You have successfully logged in.',
        }).then(() => {
          window.location.href = "/year-total"; 
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          text: 'Invalid username or password. Please try again.',
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="flex flex-col w-screen h-screen  bg-[url('/image/gridbg.png')] font-mitr">
      <div className="flex flex-row items-center justify-center relative font-mitr mt-[40px]">
        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-8 sm:p-8 md:p-10 px-10 sm:px-12 md:px-16 rounded-[50px] gap-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
        <div className="hidden md:block md:w-[300px] md:h-[300px] lg:w-[368px] lg:h-[368px]">
            <img src="image/uni.png" />
          </div>

          <div>
            <h1 className="text-[35px] md:text-[40px] lg:text-[50px] text-[#212121] font-semibold text-center ">
              Welcome Back!
            </h1>
            <form
              className=" w-full flex flex-col justify-center items-center text-[12px] sm:text-[14px] md:text-[16px] "
              onSubmit={handleSignin}
            >
              <label className="text-[#212121] w-[250px] sm:w-[300px] md:w-[350px] mt-2">
                Username
                <br />
                <input
                  type="username"
                  placeholder="Enter username"
                  className="mt-2 p-3 rounded-[15px] border-2 border-[#363636] w-full"
                  required
                  id="username"
                  name="username"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label className="text-[#212121] w-[250px] sm:w-[300px] md:w-[350px] mt-2 ">
                Password <br />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="mt-2 p-3 rounded-[15px] border-2 border-[#363636] w-full"
                  required
                  id="password"
                  name="password"
                  autoFocus
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <a
                  className="flex justify-end font-semibold underline mt-2"
                  href="/change-pass"
                >
                  Forget Password
                </a>
              </label>
              <br />
              <button
                className="bg-[#6C2BB8] w-[100px] sm:w-[120px] md:w-[130px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100"
                type="submit"
              >
                Sign In
              </button>
              <p className="text-[#212121] self-center flex gap-1 mt-4">
                Don’t have an account?
                <a className="font-semibold underline" href="/sign-up">
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import Swal from 'sweetalert2';

// interface LoginPageProps {
//   setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const LoginPage: React.FC<LoginPageProps> = ({ setIsAuthenticated }) => {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`http://localhost:3000/api/Account/Signin`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();

//       if (data.success) {
//         const token = data.token;
//         localStorage.setItem('token', token);
//         setIsAuthenticated(true);
//         Swal.fire({
//           icon: 'success',
//           title: 'Login Successful!',
//           text: 'You have successfully logged in.',
//         }).then(() => {
//           router.push('/year-total'); 
//         });
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Login Failed!',
//           text: 'Invalid username or password. Please try again.',
//         });
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };


//   return (
//     <main className="flex flex-col w-screen h-screen  bg-[url('/image/gridbg.png')] font-mitr">
//       <div className="flex flex-row items-center justify-center relative font-mitr mt-[40px]">
//         <div className="flex flew-col items-center justify-center bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-10 px-16 rounded-[50px] gap-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
//           <div>
//             <img src="image/uni.png" />
//           </div>

//           <div>
//             <h1 className="text-[55px] font-semibold text-[#212121] ">
//               Welcome Back!
//             </h1>
//             <form
//               className=" w-full flex flex-col justify-center items-center"
//               onSubmit={handleSignin}
//             >
//               <label className="text-[#212121] w-[350px] mt-2">
//                 Username
//                 <br />
//                 <input
//                   type="username"
//                   placeholder="Enter username"
//                   className="mt-2 p-3 rounded-[15px] border-2 border-[#363636] w-full"
//                   required
//                   id="username"
//                   name="username"
//                   autoFocus
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </label>
//               <label className="text-[#212121] w-[350px] mt-2 ">
//                 Password <br />
//                 <input
//                   type="password"
//                   placeholder="Enter password"
//                   className="mt-2 p-3 rounded-[15px] border-2 border-[#363636] w-full"
//                   required
//                   id="password"
//                   name="password"
//                   autoFocus
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <a
//                   className="flex justify-end font-semibold underline mt-2"
//                   href="/change-pass"
//                 >
//                   Forget Password
//                 </a>
//               </label>
//               <br />
//               <button
//                 className="bg-[#6C2BB8] w-[130px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100"
//                 type="submit"
//               >
//                 Sign In
//               </button>
//               <p className="text-[#212121] self-center flex gap-1 mt-4">
//                 Don’t have an account?
//                 <a className="font-semibold underline" href="/sign-up">
//                   Sign Up
//                 </a>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default LoginPage;
