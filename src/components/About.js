import React from 'react'
import aboutimg from '../assets/profile-1.png'

const About = () => {

    return (

        <div name="about" className="w-full h-screen bg-[#001219] text-gray-300 divide-t-2">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid md:grid-cols-2 grid-cols-1 gap-4 ">
                    <div className="pb-10 pl-16 sm:ml-2">
                    <p className="text-4xl font-bold inline border-b-4 border-[#00c4cc]">About</p>
                    </div>

                    <div></div>
                    </div>

                    <div className="max-w-[1000px] w-full grid md:grid-cols-2 grid-cols-1 gap-4 md:px-12">
                        <div>
                        
                            <p className="md:w-[400px] sm:w-[400px] w-[230px] text-justify  mx-auto sm:text-[15px] text-[10px]">
                            
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, distinctio deleniti ut ea sed totam, 
                            nisi cum libero voluptatum nesciunt exercitationem beatae quisquam repellendus 
                            nostrum aperiam, ratione quam illum officiis!Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. ducimus nostrum. Quaerat excepturi ut quisquam quis eaque amet odit sequi inventore
                            adipisicing elit. ducimus nostrum. Quaerat excepturi ut quisquam quis eaque amet odit sequi 
                            adipisicing elit. ducimus nostrum. Quaerat excepturi ut quisquam quis eaque amet odit sequi
                            adipisicing elit. ducimus nostrum. Quaerat excepturi ut quisquam quis eaque amet odit sequi 
                            adipisicing elit. ducimus nostrum. Quaerat excepturi ut quisquam quis eaque amet odit sequi </p>
                        </div>

                        <div className="mx-auto md:w-[400px] w-[200px] md:-mt-10">
                            <img src={aboutimg} alt="" style={{width: '300px'}}/>
                        </div>

                    </div>
                </div>

            </div>

      
    )
}

export default About
