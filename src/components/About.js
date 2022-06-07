import React from 'react'
import aboutimg from '../assets/profile-1.png'

const About = () => {

    return (

        <div name="about" className="bg-[#001219] w-full h-full text-gray-300">
           <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full border-t">
           <div className="md:mx-0 ml-10 py-[100px]">
                <p className="text-5xl font-bold">about.</p>
                
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 py-12  gap-x-6 sm:gap-y-[150px] gap-y-[50px]">

            <div className="sm:w-[400px]">
               <img src={aboutimg} alt="" />
            </div>

            <div>
                <p className="md:pt-20 text-justify md:px-0 px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente enim, tempore, nobis in 
                magnam aliquid praesentium repudiandae, dolores reprehenderit aperiam minus excepturi dolorum omnis. 
                Iure, autem? Adipisci labore maxime accusamus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente enim, tempore, nobis in 
                magnam aliquid praesentium repudiandae, dolores reprehenderit aperiam minus excepturi dolorum omnis. 
                Iure, autem? Adipisci labore maxime accusamus! <br />
                reprehenderit aperiam minus excepturi dolorum omnis. 
                Iure, autem? Adipisci labore maxime accusamus! reprehenderit aperiam minus excepturi dolorum omnis. 
                Iure, autem? Adipisci labore maxime accusamus!
                </p>
            </div>

            </div>

           </div>

        </div>

      
    )
}

export default About
