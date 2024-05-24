
'use client'
import { useState } from "react";

  const Signup = () => {
  
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSignup = () => {};

  return (
    <main className="flex flex-col w-screen h-screen  bg-[url('/image/gridbg.png')] font-mitr">
    <div className="flex flex-col items-center justify-center font-mitr mt-[40px] ">
      <div className="flex flew-col items-center justify-center bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-10 px-16 rounded-[50px] gap-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
        
        <div>
          <img src="image/robot.png"/>
        </div>

        <div>
            <h1 className="text-[55px] font-semibold text-[#212121] ">Create Account</h1>
            <form className=" w-full flex flex-col justify-center items-center">
                    <label className="text-[#212121] w-[350px] mt-2">
                        Username<br />
                        <input 
                            type="text"
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
                    <label className="text-[#212121] w-[350px] mt-2">
                        Email<br />
                        <input 
                            type="email"
                            placeholder="example@gmail.com"
                            className="mt-2 p-3 rounded-[15px] border-2 border-[#363636] w-full"
                            required
                            id="email"
                            name="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                </label><br />
                <button className='signin-button bg-[#6C2BB8] w-[130px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100 ' 
                    type="button"
                    onClick={handleSignup}>Sign Up</button>
                <p  className="text-[#212121] self-center flex gap-1 mt-4">
                    Already have an account?<a className="font-semibold underline" href="/sign-in">Sign in</a>
                </p>
            </form>
        </div>

      </div>
    </div>
    </main>
  );
}
export default Signup;