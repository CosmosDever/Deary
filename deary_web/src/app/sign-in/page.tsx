
'use client'
import { useState } from "react";
// import { AxiosLib } from '../../lib/axios'
import Swal from 'sweetalert2'

export default function Page() {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignin = async() => {
      try {
        const res = await fetch(
            `http://localhost:3000/api/Account/Signin`,
            {
                method: 'POST',
                body: JSON.stringify({ username : username, password : password }),
            }
        );
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
} 

  return (
    <main className="flex flex-col w-screen h-screen  bg-[url('/image/gridbg.png')] font-mitr">
      <div className="flex flex-row items-center justify-center relative font-mitr mt-[40px]">
        <div className="flex flew-col items-center justify-center bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-10 px-16 rounded-[50px] gap-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">

          <div>
            <img src="image/uni.png" />
          </div>

          <div>
            <h1 className="text-[55px] font-semibold text-[#212121] ">Welcome Back!</h1>
            <form className=" w-full flex flex-col justify-center items-center" onSubmit={handleSignin}>
              <label className="text-[#212121] w-[350px] mt-2">
                Username<br />
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
              <label className="text-[#212121] w-[350px] mt-2 ">
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
                <a className="flex justify-end font-semibold underline mt-2" href="/change-pass">Forget Password</a>
              </label><br />
              <button className='bg-[#6C2BB8] w-[130px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100'
                type="submit"
                
                >Sign In</button>
              <p className="text-[#212121] self-center flex gap-1 mt-4">
                Don’t have an account?<a className="font-semibold underline" href="/sign-up">Sign Up</a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
};