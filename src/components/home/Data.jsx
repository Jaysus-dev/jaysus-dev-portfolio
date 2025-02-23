import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";


function Data() {
  return (
    <div className='home-data'>
        <h1 className='home-title'>
            Jay Estoquia
        </h1>
        <h3 className='home-subtitle'>
            Junior Web Developer
        </h3>
        <p className='home-description'>
            I’m a front-end developer based in Makati, Philippines, 
            working as a junior web developer with a job scope focused 
            on full-stack development. Focused on expanding my skills and 
            staying current with new tools and best practices, I’m passionate 
            about crafting responsive, user-friendly interfaces and believe 
            continuous learning drives impactful digital experience. 
        </p>
        <div>
            <a href="#contact"
                className='button button-flex'
                id='hello-button'
                >
                Send an Email
                <RiSendPlaneFill className='button-icon'/>
            </a>
        </div>
    </div>
    
  )
}

export default Data