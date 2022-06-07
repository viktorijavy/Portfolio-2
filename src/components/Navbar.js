import React, { useState } from 'react'
import logo from '../assets/logo2.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)


    

    return (
        <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#001219] text-gray-300">
            <div>
                <img src={logo} alt="" style={{ width: "45px" }} className="hover:rotate-90 hover:duration:500"/>
            </div>

            {/* menu */}

            <ul className="hidden md:flex text-xl">
                <li className="hover:scale-105 duration-500 hover:text-[#00c4cc]">
                    <Link activeClass="active" to="main" spy={true} smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="hover:scale-105 duration-500 hover:text-[#00c4cc]">
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li className="hover:scale-105 duration-500 hover:text-[#00c4cc]">
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="hover:scale-105 duration-500 hover:text-[#00c4cc]">
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className="hover:scale-105 duration-500 hover:text-[#00c4cc]">
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>


            {/* hamburger */}

            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile-menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#001219] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                    <Link activeClass="active" to="main" spy={true} smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className="flex fixed md:flex-col">
                <ul className="flex fixed md:flex-col flex-row md:top-[35%] md:left-0 top-4 left-[30%]">
                    <li className="py-3 hover:scale-110 duration-500">
                        <a href="https://www.linkedin.com/in/viktorija-kuneviciute/" target="_blank" rel="noreferrer noopener"><FaLinkedin size={25} /></a>
                    </li>
                    <li className="py-3 hover:scale-110 duration-500">
                        <a href="https://github.com/viktorijavy" target="_blank" rel="noreferrer noopener"><FaGithub size={25} /></a>
                    </li>
                    <li className="py-3 hover:scale-110 duration-500">
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                    <BsFillPersonLinesFill size={25} />
                    </Link>
                       
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar