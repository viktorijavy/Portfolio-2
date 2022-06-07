import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'


const Main = () => {
  return (
    <div name="main" className="w-full h-screen bg-[#001219]">

    {/* Container */}

    <div className="max-w-[1000px] lg:mx-auto ml-7  px-8 flex flex-col justify-center h-full">
    
       <p className=" text-[#00c4cc] text-xl"> hi, my name is</p>
       <h1 className="text-gray-300 text-4xl sm:text-7xl font-bold font-[Archivo-Black]"> Viktorija Kuneviciute</h1>
       <h3 className="text-3xl sm:text-4xl text-[#8892b0]"> I am a full stack developer,<br/> based in Berlin </h3>
       <p className="text-[#8892b0] py-4 max-w-[700px] text-xl"> 
       currently I am focusing on building responsive full-stack and front-end applications, mostly in React.</p>
       <div>
           <button className="text-white group border-2 flex items-center px-5 py-2 my-2 hover:bg-[#00c4cc] hover:border-[#00c4cc]">
           <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>
                        See my work
                    </Link>
           
           <span className="group-hover:rotate-90 duration-300">
           <HiArrowNarrowRight className="ml-2"/> 
           </span>
           </button>
       </div>
       
    </div>

    
    
    </div>

    
 
  )
}

export default Main;
