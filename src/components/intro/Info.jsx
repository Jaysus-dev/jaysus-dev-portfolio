import React from 'react'
import { FaCode } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { FaHeadset } from "react-icons/fa";



function Info() {
  return (
    <div className='about-info grid'>
          <div className='about-box'>
              <FaCode className='about-icon'/>
              <h3 className='about-title'>Experience</h3>
              <span className='about-subtitle'>1.5 Years</span>
          </div>
          <div className='about-box'>
              <GrAchievement className='about-icon '/>
              <h3 className='about-title'>Completed</h3>
              <span className='about-subtitle'>2 Projects</span>
          </div>
          <div className='about-box'>
              <FaHeadset className='about-icon bx-tada'/>
              <h3 className='about-title'>Support</h3>
              <span className='about-subtitle'>Chat</span>
          </div> 
    </div>
  )
}

export default Info