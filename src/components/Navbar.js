import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {

    const [nav, setNav ] = useState(false)
    
    const handleClick = () => setNav(!nav)

    return (
        <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#001219] text-gray-300">
            <div>
                <img src={logo} alt="" style={{ width: "55px" }} />
            </div>

            {/* menu */}
           
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
      

            {/* hamburger */}

            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* mobile-menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#001219] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Projects</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>

            {/* social icons */}
            <div className="flex fixed md:flex-col">
                <ul className="flex fixed md:flex-col flex-row md:top-[35%] md:left-0 top-4 left-[30%]">
                    <li className="py-3">
                        <a href="/"><FaLinkedin size={25}/></a>
                    </li>
                    <li className="py-3">
                        <a href="/"><FaGithub size={25}/></a>
                    </li>
                    <li className="py-3">
                        <a href="/"><BsFillPersonLinesFill size={25}/></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar