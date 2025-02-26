import React from 'react'
import './Intro.css'
import Lottie from 'lottie-react'
import devAnimation from '../../assets/animation/devAnimation.json'
import { LuDownload } from "react-icons/lu";

import Info from './Info';

function Intro() {
    const defaultOptions ={
        loop: true,
        autoplay:true,
        animationData: devAnimation,
        rendererSetting:{
            preserveAspectRatio: "xMidYMid slice",
        }
    };
  return (
    <section className='about section' id='about'>
        <h2 className='section-title'>Meet Jaysus-dev</h2>
        <span className='section-subtitle'>The Creative Behind the Code </span>
            <div className='about-container container grid'>
                <div className='about-img'>
                    <Lottie {...defaultOptions} />
                </div>
                <div className='about-data'>
                    <Info/>
                    <p className='about-description'>
                        My goal is to join a company where I can apply
                        my skills effectively and continue growing both
                        personally and professionally, fully utilizing my
                        potential to contribute and innovate.
                    </p>
                    <div>
                    <a href="" 
                    className='button button-flex'
                    id='download-button'
                    > 
                        <LuDownload className='button-icon'/>
                        Download Resume (PDF)
                    </a>
                </div>
                </div>
            </div>
    </section>
  )
}

export default Intro