import React from 'react'
import aboutimg from '../assets/profile-1.png'

const About = () => {

    return (

        <div name="about" className="bg-[#001219] w-full h-full text-gray-400">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full border-t">
                <div className="md:mx-0 ml-10 py-[100px]">
                    <p className="text-5xl font-bold">about.</p>

                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 py-12  gap-x-6 sm:gap-y-[150px] gap-y-[50px]">

                    <div className="sm:w-[400px]">
                        <img src={aboutimg} alt="" className="" />
                    </div>

                    <div>
                        <p className="md:pt-20 text-justify md:px-0 px-4 font-['Montserrat'] text-lg ">
                            I am a career changer from Lithuania with a background in hospitality and customer service. 
                            
                           <br/> My journey into web development started in
                            the summer of 2021 when I attended <span className="bg-[#149296] text-xl px-1 text-gray-300"> StartSteps</span>   
                             compass course where I was introduced to UX/UI design, data science,
                            digital marketing and web development. I went for the latter and soon after attended a full stack web development bootcamp
                            at <span className="bg-[#149296] text-xl px-1 text-gray-300">Ironhack</span>, Berlin. In September 2022, I joined Creatext, a startup in the field of AI,
                            where I was responsible for the frontend of the web-app and chrome extension. 
                           
                         
                            <br />
                            
                        </p>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default About
