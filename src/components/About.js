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
                            at <span className="bg-[#149296] text-xl px-1 text-gray-300">Ironhack</span>, Berlin. During and since the bootcamp 
                            I have built full stack applications in <span className="bg-[#149296] text-xl px-1 text-gray-300"> JavaScript(React) 
                            </span>  in the frontend and <span className="bg-[#149296] text-xl px-1 text-gray-300">NodeJS</span>  in the backend.
                            Although I am more experienced in the frontend development I am equally interested in frontend and full stack opportunities.
                            {/* My main focus and interest is however currently on the <span className='bg-[#149296] text-xl px-1'> frontend</span> 
                              as I love building and designing beautiful and user
                            friendly interfaces. Besides I have a strong interest in UI design and have an eye for aesthetics. */}
                            <br />
                            
                        </p>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default About
