"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = async (e: any) => {
    if (!username || !password || !email) {
      Swal.fire({
        icon: "error",
        title: "Sign Up Failed!",
        text: "Please fill in all fields.",
      });
      return;
    }

    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Sign Up Failed!",
        text: "Password must be at least 8 characters long.",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Sign Up Failed!",
        text: "Please enter a valid email address.",
      });
      return;
    }

    try {
      e.preventDefault();
      const res = await fetch(`http://localhost:3000/api/Account/Signup`, {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Sign Up Successful!",
          text: "Your account has been created successfully.",
        }).then(() => {
          window.location.href = "/sign-in";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Sign Up Failed!",
          text: "Username is already taken. Please choose another username.",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="flex flex-col w-screen h-screen  bg-[url('/image/gridbg.png')] font-mitr mt-[75px]">
      <div className="flex flex-col items-center justify-center font-mitr mt-[40px] ">
        <div className="flex flex-col min-[321px]:flex-col md:flex-row items-center justify-center bg-[#FFFFFF] bg-opacity-[20%] backdrop-blur-sm p-8 min-[321px]:p-8 md:p-10 px-8 min-[321px]::px-12 md:px-16 rounded-[50px] gap-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
          <div className="hidden md:block md:w-[300px] md:h-[300px] lg:w-[368px] lg:h-[368px]">
            <img src="image/robot.png" />
          </div>

          <div>
            <h1 className="text-[30px] min-[321px]:text-[35px] md:text-[40px] lg:text-[50px] text-[#212121] font-semibold text-center ">
              Create Account
            </h1>
            <form className=" w-full flex flex-col justify-center items-center text-[12px] sm:text-[14px] md:text-[16px] ">
              <label className="text-[#212121] w-[230px] min-[321px]:w-[250px] sm:w-[300px] md:w-[350px] mt-2">
                Username
                <br />
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
              <label className="text-[#212121] w-[230px] min-[321px]:w-[250px] sm:w-[300px] md:w-[350px] mt-2">                
                Email
                <br />
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
              <label className="text-[#212121] w-[230px] min-[321px]:w-[250px] sm:w-[300px] md:w-[350px] mt-2">
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
              </label>
              <br />
              <button
                className="bg-[#6C2BB8] w-[100px] sm:w-[120px] md:w-[130px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100"
                type="button"
                onClick={handleSignup}
              >
                Sign Up
              </button>
              <p className="text-[#212121] self-center flex gap-1 mt-4">
                Already have an account?
                <a className="font-semibold underline" href="/sign-in">
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
