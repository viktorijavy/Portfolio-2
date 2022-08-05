import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

import grafik2 from '../assets/graphic3.png'



const Main = () => {
  return (
    <div name="main" className="w-full h-screen bg-[#001219]">



      <div className="max-w-[1100px] w-full flex lg:flex-row flex-col items-center justify-center h-full md:mx-auto">



        <div className="lg:pl-10 md:pl-10 sm:px-0 px-10">

          {/* <p className="text-[#00c4cc] sm:text-xl text-sm"> hi, my name is</p> */}
          <h1 className="text-white text-3xl sm:text-7xl  font-['Cardo'] animate-bounce-short">
            Viktorija Kuneviciute</h1>
          <h3 className="text-xl sm:text-3xl text-[#8892b0] mt-3"> a full stack developer,<br /> based in Berlin </h3>
          <p className="text-[#8892b0] py-4 max-w-[700px] sm:text-xl text-sm">
            currently I am focusing on building responsive full-stack and front-end applications, mostly in React.</p>
          <div>
            <button className="text-white group border flex items-center sm:px-5 sm:py-2 px-2 py-1 my-4 hover:bg-[#00c4cc] hover:border-[#00c4cc]">
              <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
                View my projects
              </Link>

              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </div>

        </div>

        <div className="sm:pt-0 pt-4">

          <img src={grafik2} alt="" className="md:w-[340px] w-[250px] " />
        </div>

       

      </div>





    </div>



  )
}

export default Main;
