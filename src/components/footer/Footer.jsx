import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer grid">
        <div className="footer-top container">
            <div className="footer-grid grid">
                    <div className="footer-left">
                        <span className="footer-subtitle">About</span>
                        <p className="footer-about-text">
                            Hi,<i>I'm jaysus-dev</i>, a passionate Frontend Developer with expertise
                            in ReactJS and Tailwind CSS. I specialize in building sleek,
                            responsive, and high-performance web applications. My focus 
                            is on writing clean, efficient code while ensuring seamless 
                            user experiences across all devices.
                        </p>
                    </div>
                <div className="footer-right">
                    <div className="footer-section">
                        <span className="footer-subtitle">Categories</span>
                            <ul className="footer-links">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Expertise</a></li>
                                <li><a href="#">Portfolio</a></li>
                            </ul>
                    </div>
                    <div className="footer-section">
                        <span className="footer-subtitle">Quick Links</span>
                            <ul className="footer-links">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Contribute</a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom container">
            <div className="footer-copyright">
                <p className="footer-copyright-text">
                    Copyright &copy; {new Date().getFullYear()} All Rights Reserved by{" "}
                    <a href="#">jaysus-dev</a>.
                </p>
                <div className='footer-social-icons'>
                    <a href="" className="social-icon" target='_blank'>
                        <FaFacebookSquare />
                    </a>
                    <a href="" className="social-icon" target='_blank'>
                        <RiInstagramFill />
                    </a>
                    <a href="" className="social-icon" target='_blank'>
                        <FaLinkedin />
                    </a>
                    <a href="" className="social-icon" target='_blank'>
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
