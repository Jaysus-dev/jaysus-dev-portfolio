import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Social() {
  return (
    <div className='home-social'>
        <a href="" className="home-social-icon" target='_blank'>
            <FaFacebookSquare />
        </a>
        <a href="" className="home-social-icon" target='_blank'>
            <RiInstagramFill />
        </a>
        <a href="" className="home-social-icon" target='_blank'>
            <FaLinkedin />
        </a>
        <a href="" className="home-social-icon" target='_blank'>
            <FaGithub />
        </a>
    </div>
  )
}

export default Social