import {Search,ArrowRight} from 'lucide-react'
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className=" min-h-screen flex items-center justify-center flex-col gap-1 md:gap-2 w-full ">
        <p className=' text-sm md:text-xl lg:text-2xl'>Empower Your Journey</p>
        <h1 className=" font-semibold text-[#FF69D0] text-2xl md:text-4xl lg:text-5xl">Explore Limitless</h1>
        <h1 className=" font-semibold text-2xl md:text-4xl lg:text-5xl text-center">Opportunities with Jobify</h1>
        <span className=" text-center text-xs md:text-sm">Discover Oppourtunities, Connect with Employers and Elevate Your Professional Journery</span>

        <div className=' flex flex-row flex-wrap justify-center mt-4 items-center gap-2'>
          <input type="text" placeholder="Search Job..." className=" p-2 border-none outline-none bg-slate-100 rounded-lg w-[90%]  md:w-[250px]" />
          <div className=' bg-[#FF70C1] p-2  border-[1px] text-white  font-bold cursor-pointer flex items-center justify-center gap-2 rounded-full '>
              <div className=' bg-white hover:scale-110 duration-500 ease-in-out  text-black rounded-full p-1'>
                  <Search   size={18}/>
              </div>
              <p className=' text-sm'>Search</p>
          </div>
        </div>

        <div className=' bg-[#FEF4E3] rounded-md px-4 py-8 w-full flex items-center justify-between flex-wrap-reverse gap-2 '>
          <div className=' gap-4 flex flex-col items-center md:items-start text-center md:text-justify '>
            <h1 className=' font-extrabold text-xl md:text-2xl '>Upload Your Vacceny Now!</h1>
            <span className="  text-xs md:text-sm">Discover Oppourtunities, Connect with Employers and Elevate Your Professional Journery</span>
            <div className=' bg-[#FF70C1] p-2 border-[1px] text-white  font-bold cursor-pointer  w-[200px] flex items-center justify-center gap-2 rounded-full '>
                Upload Vacceny 
                <div className=' bg-white hover:scale-110 duration-500 ease-in-out text-black rounded-full p-1'>
                    <ArrowRight  size={18}/>
                </div>
            </div>
          </div>
          <div className=' flex items-center justify-center w-full md:w-1/2'>
            <Image src="/logo.webp" alt='apply' height={300} width={300} className=' object-cover '/>
          </div>
        </div>
    </section>
  )
}

export default HeroSection