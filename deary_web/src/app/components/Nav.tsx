
'use client'
import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from '../page';
import Diary from './Diary';
import Signup from './Signup';
import Signin from './Signin';
import dearylogo from '@/image/dearylogo.png';

function Nav() {
    return (
        <Router>
        <nav className='absolute inset-x-0 top-0 p-5 h-20 bg-[#363636] '>
            <div className='flex items-center justify-between  '>
            <Link as={Link} to={"/home"} className='flex flex-row items-center gap-2 text-white text-2xl font-bold '> <img src={dearylogo}/>Deary</Link>
                <div className='flex space-x-8 mr-3'>
                    <Link as={Link} to={"/diary"} className='text-white'>Diary </Link>
                    <Link as={Link} to={"/sign-up"} className='text-white'>Sign Up</Link>
                    <Link as={Link} to={"/sign-in"} className='text-white '>Sign in</Link>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path="/home" element={<Home />}>
                    </Route>
                    <Route path="/diary" element={<Diary />}>
                    </Route>
                    <Route path="/sign-up" element={<Signup />}>
                    </Route>
                    <Route path="/sign-in" element={<Signin />}>
                    </Route>
                </Routes>
            </div>
        </nav>
        </Router>
    )
}

export default Nav
