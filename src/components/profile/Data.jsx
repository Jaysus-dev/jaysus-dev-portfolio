import React from 'react'
import { RiSendPlaneFill, RiVerifiedBadgeFill  } from "react-icons/ri";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Data() {

    const[typeEffect] = useTypewriter ({
        words: ["Junior Web Developer", "UI/UX Designer", "Graphic Artist"],
        typeSpeed: 120,
        deleteSpeed: 40,
        loop: {}
    })

  return (
    <div className='home-data'>
        <h1 className='home-title'>
            &lt;Jay Estoquia /&gt;
        </h1>
        <h3 className='home-subtitle'>
            {typeEffect}
            <Cursor cursorStyle=";"/>
        </h3>
        <p className='home-desctitle'>@jaysus-dev
            <RiVerifiedBadgeFill className='home-descicon'/>
        </p>
        <p className='home-description'> 
            I'm a front-end developer in Makati, Philippines,
            working as a junior web developer with a full-stack focus. 
            Passionate about responsive design and user-friendly interfaces, 
            I stay updated with new tools and best practices to create impactful digital experiences.  
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