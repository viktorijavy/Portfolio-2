import React from 'react'
import project1 from '../assets/project1.mp4'
import project2 from '../assets/project2.mp4'
import project3 from '../assets/project3.mp4'

const Projects = () => {


    return (


        <div name="projects" className="bg-[#001219] w-full  text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="mt-6 ml-10 sm:ml-0">
                <p className="text-4xl font-bold inline border-b-4 border-[#00c4cc]">Projects</p>
                {/* <p>Some of the projects I built in the last 6 months</p> */}
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 py-12 text-center gap-8">
              
              <div className="w-50%">
              <video className="project-video" autoPlay="autoplay" loop="loop" muted>
                        <source
                            src={project2}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
              </div>

              <div className="w-50%">
                  <h3 className="text-3xl pb-6"> news app</h3>
                  <p className="text-justify sm:text-[15px] text-[10px]"> news app that displays popular news by category and by country, 
                  shows current weather in selected location and street events in Berlin that can be filtered 
                  by district. React frontend and Node backend. Data comes from 2 external APIs and from a local dataset.  .</p>
                  <p className="pt-2 text-left">Technologies: HTML/CSS, React, NodeJS, ExpressJS, API </p>
                  <div className="mt-6">
                  <a className="border-2 p-2" href="/">Github</a>
                  </div>
                  
              </div>

             

              <div className="w-50% mt-10">
                  <h3 className="text-3xl pb-6"> unforgotten places</h3>
                  <p className="text-justify sm:text-[15px] text-[10px]">a website for documenting abandoned buildings in 
                  Germany. It is a full stack crud application where users can view, add, edit and delete locations, 
                  upload pictures and write comments. Authorization and authentication implemented too. 
                 </p>
                  <p className="pt-2 text-left">Technologies: TML/CSS, EJS, JavaScript, MongoDB, Express, Cloudinary, Heroku, Bootstrap </p>
                  <div className="mt-6">
                  <a className="border-2 p-2 mr-4" href="/">Github</a>
                  <a className="border-2 p-2" href="/">Demo</a>
                  </div>
                  
              </div>


              <div className="w-50% mt-10">
              <video className="project-video" autoPlay="autoplay" loop="loop" muted>
                        <source
                            src={project3}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
              </div>

           
              
              
              <div>Hello5</div>
              <div>Hello6</div>
            </div>

            </div>


        </div>
    )
}

export default Projects