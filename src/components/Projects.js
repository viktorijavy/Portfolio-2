import React from 'react'
import project1 from '../assets/project1.mp4'
import project2 from '../assets/project2.mp4'
import project3 from '../assets/project3.mp4'

const Projects = () => {


    return (


        <div name="projects" className="bg-[#001219] w-full h-full  text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="md:mx-0 ml-10 py-[100px]">
                <p className="text-5xl font-bold">projects.</p>
                
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 py-12 text-center gap-x-4 sm:gap-y-[150px] gap-y-[50px]">
              
              <div className="">
              <video className="project-video" autoPlay="autoplay" loop="loop" muted>
                        <source
                            src={project2}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
              </div>

              <div className="">
                  <h3 className="text-3xl pb-6"> news app</h3>
                  <p className="text-justify md:px-0 px-4"> news app that displays popular news by category and by country, 
                  shows current weather in selected location and street events in Berlin that can be filtered 
                  by district. React frontend and Node backend. Data comes from 2 external APIs and from a local dataset.  .</p>
                  <p className="pt-2 text-left md:px-0 px-4">Technologies: Javascript, HTML/CSS, React, NodeJS, ExpressJS, API </p>
                  <div className="mt-6">
                  <a className="border-2 p-2" href="/">Github</a>
                  </div>
                  
              </div>

             

              <div className="">
                  <h3 className="text-3xl pb-6 md:border-0 border-t md:pt-0 pt-8"> unforgotten places</h3>
                  <p className="text-justify md:px-0 px-4">a website for documenting abandoned buildings in 
                  Germany. It is a full stack crud application where users can view, add, edit and delete locations, 
                  upload pictures and write comments. Authorization and authentication implemented too. 
                 </p>
                  <p className="pt-2 text-left md:px-0 px-4">Technologies: TML/CSS, EJS, JavaScript, MongoDB, Express, Cloudinary, Heroku, Bootstrap </p>
                  <div className="mt-6">
                  <a className="border-2 p-2 mr-4" href="/">Github</a>
                  <a className="border-2 p-2" href="/">Demo</a>
                  </div>
                  
              </div>


              <div className="">
              <video className="project-video" autoPlay="autoplay" loop="loop" muted>
                        <source
                            src={project3}
                            type="video/mp4"
                            
                        />
                        Your browser does not support the video tag.
                    </video>
              </div>

           
              
              
              <div className="md:border-0 border-t md:pt-0 pt-8">
              <video className="project-video" autoPlay="autoplay" loop="loop" muted>
                        <source
                            src={project1}
                            type="video/mp4"
                            className='md:border-0 border-t'
                        />
                        Your browser does not support the video tag.
                    </video>
              </div>


              <div className="">
                  <h3 className="text-3xl pb-6 "> event app</h3>
                  <p className="text-justify md:px-0 px-4">This is full stack crud application - event app. 
                  Users can see, create, edit and delete events and invite people, write and delete comments.
                  It is a collaboration project with 1 other teammate.
                 </p>
                  <p className="pt-2 text-left md:px-0 px-4">Technologies: HTML/CSS(Sass), Handlebars, JavaScript, MongoDB, Express, Cloudinary, Heroku </p>
                  <div className="mt-6">
                  <a className="border-2 p-2 mr-4" href="/">Github</a>
                  <a className="border-2 p-2" href="/">Demo</a>
                  </div>
                  
              </div>
            </div>

            </div>


        </div>
    )
}

export default Projects