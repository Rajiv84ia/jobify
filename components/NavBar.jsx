"use client"
import { Zap, ArrowRight,AlignJustify,Minimize2 } from 'lucide-react';
import Link from 'next/link'
import { useState } from 'react';


const NavBar = () => {

    const [openNav,setOpenNav]=useState(false);
    const handleOpen=()=>{
        setOpenNav(!openNav);
    }

  return (
    <nav className=" flex sticky top-0 px-2 py-1 z-50 rounded-md  items-center justify-between shadow-md bg-white">
        <Link href="/" className=' flex items-center cursor-pointer gap-3'>
            <div className=' bg-[#119756] p-2 text-white rounded-full'>
                <Zap className=' h-6 w-6 md:w-8 md:h-8 lg:w-10 lg:h-10'/>
            </div>
            <div>
                <h1 className=' font-extrabold text-xl md:text-3xl text-[#084527]'>Jobify</h1>
                <p className=' text-xs font-light'>Find Your first job</p>
            </div>
        </Link>

        {/* navbars */}

        <div className=' hidden lg:flex'>
            <ul className=' flex gap-5 font-semibold items-center'>
                <Link href="/">Jobs</Link>
                <Link href="/">Resources</Link>
                <Link href="/">Employers</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact Us</Link>
            </ul>
        </div>

        {/* auths */}
        <div className='flex items-center gap-3 '>
            <div className=' hidden md:flex gap-3'>
                <Link href="/signin" className=' bg-white  p-2 border-[1px] border-slate-950 font-bold cursor-pointer rounded-lg '>
                    Sign in
                </Link>
                <Link href="/register" className=' bg-[#FF70C1] p-2 border-[1px] text-white  font-bold cursor-pointer flex items-center gap-2 rounded-full '>
                    Get Started 
                    <div className=' bg-white hover:scale-110 duration-500 ease-in-out text-black rounded-full p-1'>
                        <ArrowRight  size={18}/>
                    </div>
                </Link>
            </div>
            <div onClick={handleOpen} className=' lg:hidden cursor-pointer'>
                <AlignJustify  />
            </div>
        </div>


        {/* small devices */}
        {
            openNav && (
                <div className=' fixed top-0 right-0 px-6 py-12 min-h-screen h-full w-[90%] md:w-[350px] bg-gray-300'>
                    <div onClick={handleOpen} className=' p-2 bg-slate-700 text-white rounded-full absolute top-2 right-2 cursor-pointer'>
                        <Minimize2 />
                    </div>
                    <ul className=' flex flex-col gap-12 justify-start  font-semibold items-start'>
                        <Link href="/">Jobs</Link>
                        <Link href="/">Resources</Link>
                        <Link href="/">Employers</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact Us</Link>
                    </ul>
                    <div className='  md:hidden gap-3 mt-6'>
                        <Link href="/signin" className=' bg-white  p-2 border-[1px] border-slate-950  mt-6  font-bold cursor-pointer flex items-center gap-2 justify-center rounded-md '>
                            Sign in
                        </Link>
                        <Link href="/register" className=' bg-[#FF70C1] p-2 border-[1px] text-white mt-6  font-bold cursor-pointer flex items-center gap-2 justify-center rounded-md '>
                            Get Started 
                            <div className=' bg-white hover:scale-110 duration-500 ease-in-out text-black rounded-full p-1'>
                                <ArrowRight  size={18}/>
                            </div>
                        </Link>
                    </div>
                </div>
            )
        }
        

    </nav>
  )
}

export default NavBar