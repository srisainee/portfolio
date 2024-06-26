/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component, useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLink } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Resume from './Sri_Sainee_Thirumurugan.pdf';
import Logo from '../assets/logo.png'


const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav)
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between
         items-center px-4 bg-[#D7CEC7] text-[#76323f] text-2xl shadow-md '>
            <div className='font-[Poppins]'>
                {/* <img src={Logo} alt="Logo Image" style={{ width: '50px' }} /> */}
                <a href="/" >
                    <Link to="home" smooth={true} duration={500}>
                        <span className=' bg-[#76323f] text-[#D7CEC7] p-2 '>
                            Sri Sainee
                        </span> Thirumurugan

                    </Link>
                </a>
            </div>
            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                {/* <li>
                    <Link to="experience" smooth={true} duration={500}>Skills</Link>
                </li> */}
                <li>
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li>
                    <Link to="certificate" smooth={true} duration={500}>Certificates</Link>
                </li>
                <li>
                    <a href={Resume} target="_blank" without rel="noopener noreferrer">Resume</a>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>



            </ul>
            {/* Hamburger */}
            <div className='md:hidden z-10' onClick={handleClick} >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
                {/* <li className='py-6 text-4xl'> <Link onClick={handleClick} to="experience" smooth={true} duration={500}>Skills</Link></li> */}
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to="work" smooth={true} duration={500}>Projects</Link></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to="certificate" smooth={true} duration={500}>Certificates</Link></li>
                <li className='py-6 text-4xl'><a href={Resume} onClick={handleClick}  target="_blank" without rel="noopener noreferrer">Resume</a></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>

            {/* Social icons */}
            {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px]
                     flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px]
                     flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px]
                     flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px]
                     flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div> */}
        </div >
    )
}

export default NavBar