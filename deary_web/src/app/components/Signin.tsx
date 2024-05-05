
'use client'

export default function Signin() {
  return (
    <main className="flex flex-row items-center justify-center relative font-mitr mt-[40px]">
      <div className="flex flew-row  items-center justify-center bg-black bg-opacity-[30%] backdrop-blur-sm p-10 rounded-[50px] gap-[90px]">
        
        <div>
          <h1>picture</h1>
          <img src="" alt="" />
        </div>

        <div>
            <h1 className="text-[55px] font-semibold text-black ">Welcome Back!</h1>
            <form className=" w-full flex flex-col justify-center items-center">
                    <label className="text-[#000000] w-[350px] mt-2">
                        Email<br />
                        <input 
                            type="email"
                            placeholder="example@gmail.com"
                            className="mt-2 p-3 rounded-[15px] border-2 border-[#363636] w-full"
                        />
                    </label>
                <label className="text-[#000000] w-[350px] mt-2 "> 
                    Password <br />
                    <input 
                        type="password"
                        placeholder="Enter password"
                        className="mt-2 p-3 rounded-[15px] border-2 border-[#363636] w-full"
                    />
                </label><br />
                <button className='signin-button bg-[#6C2BB8] w-[130px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] ' 
                    type="button">Sign In</button>
                <p  className="text-black self-center flex gap-1 mt-4">
                Don’t have an account?<a className="font-semibold underline" href="/sign-up">Sign Up</a>
                </p>
            </form>
        </div>

      </div>
    </main>
  );
}