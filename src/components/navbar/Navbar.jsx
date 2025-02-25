import React, { useState } from 'react'
import { GoHome } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { PiImageLight } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { RiAppsLine } from "react-icons/ri";
import "./Navbar.css"
import navlogo from '../../assets/img/logo.png'

function Navbar() {
    /**toggle-menu**/
    const [menuOpen,setMenuOpen] = useState(false);
    const toggleMenu =() => {
        setMenuOpen(!menuOpen)
    };
    /**active-links**/
    const [activeNav,setActiveNav] = useState("#home");
  return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className='nav-logo'>
                <img src={navlogo} alt="" />
            </a>
                <div className= {menuOpen ? 'nav-menu show-menu' : 'nav-menu'}>
                    <ul className='nav-list grid'>
                        <li className='nav-item'>
                            <a 
                                onClick={() => setActiveNav("#about")}
                                href="#about" 
                                className={activeNav === "#about" ? 'nav-link active-link' : 'nav-link'} >
                                <IoPersonOutline className='nav-icon'/>About
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a 
                                onClick={() => setActiveNav("#expertise")}
                                href="#expertise" 
                                className={activeNav === "#expertise" ? 'nav-link active-link' : 'nav-link'} >
                                <HiOutlineBriefcase className='nav-icon'/>expertise
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a 
                                onClick={() => setActiveNav("#portfolio")}
                                href="#portfolio" 
                                className={activeNav === "#portfolio" ? 'nav-link active-link' : 'nav-link'} >
                                <PiImageLight className='nav-icon'/>Portfolio                            </a>
                        </li>
                        <li className='nav-item mobile-only'>
                            <a 
                                onClick={() => setActiveNav("#contact")}
                                href="#contact" 
                                className={activeNav === "#contact" ? 'nav-link active-link' : 'nav-link'} >
                                <LuMessagesSquare className='nav-icon'/>Contact Me
                            </a>
                        </li>
                    </ul>   
                    <IoIosClose className='nav-close' onClick={toggleMenu}/>
                </div>
                    <RiAppsLine className='nav-toggle'  onClick={toggleMenu} />
                <div className='nav-item desktop-only'>
                <a 
                    onClick={() => setActiveNav("#contact")}
                    href="#contact" 
                    className={activeNav === "#contact" ? 'nav-link active-link' : 'nav-link'} >
                    <  LuMessagesSquare className='nav-icon'/>Contact Me
                </a>              
                </div>
        </nav>
    </header>
  )
}
export default Navbar;