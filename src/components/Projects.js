import React from 'react'
import project1 from '../assets/project1.mp4'
import project2 from '../assets/project2.mp4'
import project3 from '../assets/project3.mp4'

const Projects = () => {


    return (


        <div name="projects" className="bg-[#001219] w-full h-full  text-gray-400">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full border-t">
                <div className="md:mx-0 ml-10 py-[100px]">
                    <p className="text-5xl font-bold">projects.</p>

                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 py-12 text-center gap-x-4 sm:gap-y-[150px] gap-y-[50px]">

                    <div className="">
                        <video className="hover:scale-105 duration-500" autoPlay="autoplay" loop="loop" muted>
                            <source
                                src={project2}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="">
                        <h3 className="text-3xl pb-6"> news app</h3>
                        <p className="text-justify md:px-0 px-4 text-lg font-[Montserrat]"> news app that displays popular news by category and by country,
                            shows current weather in selected location and street events in Berlin that can be filtered
                            by district. React frontend and Node backend. Data comes from 2 external APIs and from a local dataset.  .</p>
                        <p className="pt-2  md:px-0 px-4 tracking-wider text-justify">JAVASCRIPT HTML/CSS REACT NODEJS EXPRESS API </p>
                        <div className="mt-6">
                            <a
                                className="border px-4 py-2 hover:bg-[#00c4cc] hover:border-[#00c4cc] hover:text-white"
                                href="https://github.com/viktorijavy/NewsApp"
                                target="_blank"
                                rel="noreferrer noopener">
                                Github
                            </a>

                        </div>

                    </div>



                    <div className="">
                        <h3 className="text-3xl pb-6 md:border-0 border-t border-[#00c4cc] md:pt-0 pt-8"> unforgotten places</h3>
                        <p className="text-justify md:px-0 px-4 text-lg font-[Montserrat]">a website for documenting abandoned buildings in
                            Germany. It is a full stack crud application where users can view, add, edit and delete locations,
                            upload pictures and write comments. Authorization and authentication implemented too.
                        </p>
                        <p className="pt-2 text-left md:px-0 px-4 tracking-wider">HTML/CSS EJS JAVASCRIPT MONGODB EXPRESS CLOUDINARY HEROKU BOOTSTRAP </p>
                        <div className="mt-6">
                            <a
                                className="border py-2 px-4 mr-4 hover:bg-[#00c4cc] hover:border-[#00c4cc] hover:text-white"
                                href="https://github.com/viktorijavy/abandoned-places-CRUD"
                                target="_blank"
                                rel="noreferrer noopener">
                                Github
                            </a>

                       

                        </div>

                    </div>


                    <div className="">
                        <video className="hover:scale-105 duration-500" autoPlay="autoplay" loop="loop" muted>
                            <source
                                src={project3}
                                type="video/mp4"

                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>




                    <div className="md:border-0 border-t border-[#00c4cc] md:pt-0 pt-8">
                        <video className="hover:scale-105 duration-500" autoPlay="autoplay" loop="loop" muted>
                            <source
                                src={project1}
                                type="video/mp4"
                                className='md:border-0 border-t'
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>


                    <div className="">
                        <h3 className="text-3xl pb-6"> event app</h3>
                        <p className="text-justify md:px-0 px-4 text-lg font-[Montserrat]">This is full stack crud application - event app.
                            Users can see, create, edit and delete events and invite people, write and delete comments.
                            It is a collaboration project with 1 other teammate. Login with: username: 1@2.de password: 123456
                        </p>
                        <p className="pt-2 text-left md:px-0 px-4 tracking-wider">HTML/CSS(SASS) HANDELBARS JAVASCRIPT MONGODB EXPRESS CLOUDINARY HEROKU </p>
                        <div className="mt-6">
                            <a
                                className="border py-2 px-4 mr-4 hover:bg-[#00c4cc] hover:border-[#00c4cc] hover:text-white"
                                href="https://github.com/viktorijavy/crud-project"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Github
                            </a>

                            <a
                                className="border py-2 px-4 hover:bg-[#00c4cc] hover:border-[#00c4cc] hover:text-white"
                                href="https://event-app-ironhack.onrender.com/login"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Demo
                            </a>

                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default Projects