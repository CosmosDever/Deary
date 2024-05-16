
'use client'
import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from '../page';
import Diary from './Diary';
import Signup from './Signup';
import Signin from './Signin';
import Changepass from './Changepass';
import SelectFeel from './SelectFeel';
import MonthTotal from './MonthTotal';
import Note from './Note';
import Dearylogo from '../image/Dearylogo.png';

function Nav() {
    return (
        <Router>
        <nav className='top-0 w-screen inset-x-0  h-[75px] bg-[#363636] font-mitr '>
            <div className='    flex items-center justify-between h-[75px] '>
                <Link as={Link} to={"/"} className='flex flex-row items-center gap-2 text-white text-2xl font-semibold '><img  src='image/dearylogo.png' height='50px' width='50px' />Deary</Link>
                <div className='flex items-center justify-center space-x-8 mr-10'>
                    <Link as={Link} to={"/diary"} className='text-white hover:scale-110 duration-100 '>Diary </Link>
                    <Link as={Link} to={"/sign-up"} className='text-white hover:scale-110  duration-100 '>Sign Up</Link>
                    <Link as={Link} to={"/sign-in"} className=' flex justify-center items-center text-white bg-[#DB0361] w-[100px] rounded-[10px] p-2 border-black border-2 mb-2 shadow-[7px_6px_black] transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 hover:bg-[#C60458] duration-100 '>Sign in</Link>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />}>
                    </Route>
                    <Route path="/diary" element={<Diary />}>
                    </Route>
                    <Route path="/sign-up" element={<Signup />}>
                    </Route>
                    <Route path="/sign-in" element={<Signin />}>
                    </Route>
                    <Route path="/change-pass" element={<Changepass />}>
                    </Route>
                    <Route path="/select-feel" element={<SelectFeel />}>
                    </Route>
                    <Route path="/month-total" element={<MonthTotal />}>
                    </Route>
                    <Route path="/note" element={<Note />}>
                    </Route>
                </Routes>
            </div>
        </nav>
        </Router>
    )
}

export default Nav
