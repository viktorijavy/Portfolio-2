import React from 'react'
import JS from '../assets/JavaScript.png'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import MongoDB from '../assets/MongoDB.png'
import Node from '../assets/Node.png'
import ReactJS from '../assets/React.png'
import Sass from '../assets/Sass.png'
import Tailwind from '../assets/tailwind.png'


const Skills = () => {
    return (
        <div name="skills" className="bg-[#001219] text-gray-300 w-full sm:h-screen h-full">

            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="md:mx-0 ml-10">
                <p className="text-5xl font-bold">skills.</p>

                <p className="py-4">These are technologies I have been working with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-4">
                <div className="shadow-md shadow-black hover:scale-110 duration-500">
                    <img className="w-20 m-auto" src={HTML} alt="HTML" />
                    <p className="my-4">HTML</p>
                    
                </div>

                <div className="shadow-md shadow-black hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={CSS} alt="HTML" />
                    <p className="my-4">CSS</p>
                    
                </div>

                <div className="shadow-md shadow-black hover:scale-110 duration-500">
                    <img className="w-20 mx-auto mt-4" src={ReactJS} alt="HTML" />
                    <p className="my-4">React</p>
                    
                </div>

                <div className="shadow-md shadow-black hover:scale-110 duration-500">
                    <img className="w-20 mx-auto mt-10" src={MongoDB} alt="HTML" />
                    <p className="my-4">MongoDB</p>
                    
                </div>

                <div className="shadow-md shadow-black hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Node} alt="HTML" />
                    <p className="my-4">Node</p>
                    
                </div>

                <div className="shadow-md shadow-black hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={JS} alt="HTML" />
                    <p className="my-4">Javascript</p>
                    
                </div>

                <div className="shadow-md shadow-black hover:scale-110 duration-500">
                    <img className="w-20 mx-auto mt-4" src={Sass} alt="HTML" />
                    <p className="my-4">Sass</p>
                    
                </div>

                <div className="shadow-md shadow-black hover:scale-110 duration-500">
                    <img className="w-20 mx-auto mt-6" src={Tailwind} alt="HTML" />
                    <p className="my-4">Tailwind</p>
                    
                </div>
            </div>

            </div>

        </div>
    )
}



export default Skills