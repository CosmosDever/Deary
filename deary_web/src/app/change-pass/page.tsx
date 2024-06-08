'use client';
import { useState } from "react";
import Swal from "sweetalert2";

export default function Page() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const handleChangePassword = async (e: any) => {
        try {
            e.preventDefault();

            if (newPassword !== confirmNewPassword) {
                Swal.fire({
                    icon: 'error',
                    title: 'Change Password Failed!',
                    text: 'New password and confirm new password do not match.',
                });
                return;
            }

            const res = await fetch(`http://localhost:3000/api/Account/changePassword`, {
                method: "POST",
                body: JSON.stringify({ email: email, newPassword: newPassword }),
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            console.log(data);

            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Change Password Successful!',
                    text: 'Your password has been changed successfully.',
                }).then(() => {
                    window.location.href = "/sign-in";
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Change Password Failed!',
                    text: 'Invalid email or new password. Please try again.',
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
            <img src="image/change.png" />
        </div>

        <div>
            <h1 className="text-[35px] md:text-[40px] lg:text-[50px]  font-semibold text-[#212121] text-center ">Change Password</h1>
            <form className=" w-full flex flex-col justify-center items-center">
                    <label className="text-[#212121] w-[250px] sm:w-[270px] md:w-[300px] lg:w-[350px] mt-2 ">
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
                <label className="text-[#212121] w-[250px] sm:w-[270px] md:w-[300px] lg:w-[350px] mt-2 "> 
                    New Password <br />
                    <input 
                        type="password"
                        placeholder="Enter password"
                        className="mt-2 p-3 rounded-[15px] border-2 border-[#363636] w-full"
                        required
                        id="newPassword"
                        name="newPassword"
                        autoFocus
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </label>
                <label className="text-[#212121] w-[250px] sm:w-[270px] md:w-[300px] lg:w-[350px] mt-2 "> 
                    Confirm Password <br />
                    <input 
                        type="password"
                        placeholder="Enter password"
                        className="mt-2 p-3 rounded-[15px] border-2 border-[#363636] w-full"
                        required
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                        autoFocus
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                </label>
                <br />
                <button 
                    className="bg-[#6C2BB8] w-[160px] sm:w-[160px] md:w-[170px] rounded-[10px] p-2 text-white border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#6429AA] duration-100"
                    type="button"
                    onClick={handleChangePassword}
                    >Reset Password</button>
            </form>
        </div>

        </div>
    </div>
    </main>
);
}