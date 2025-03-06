import React from 'react';
import './Experience.css';

import data from'./ExperienceData';

function Experience() {
  return (
    <div className="experience section" id="experience">
        <h2 className="section-title">Career Path.</h2>
        <span className="section-subtitle">Evolving every step of the way</span>
        <div className="experience-container container grid">
            <div className="experience-wrapper">
                <h3 className="experience-header" id='academic'>Academic History</h3>
                {data.filter((item) => item.id === 'academic')
                .map((item, index, arr) => (
                    <div className="experience-data" key={index}>
                    <div className="experience-marker">
                        <img src={item.image} className='experience-pic' alt="" />
                        {index !== arr.length - 1 && (
                        <span className="experience-line"></span>
                        )}
                    </div>
                    <div className="experience-content">
                        <div className="experience-top">
                            <h3 className="experience-title">{item.title}</h3>
                            <span className='experience-year'>{item.date}</span> 
                        </div>
                    <div className="experience-bottom">
                        <span className='experience-subtitle'>{item.subtitle}</span>
                        <p className='experience-desc'>{item.desc}</p>
                        <div className="experience-skills">
                        {item.tech?.map((skill, skillIndex) => (
                        <span key={skillIndex} >
                            {skill.name}
                        </span>
                        ))}
                    </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="experience-wrapper" id='Work'>
                <h3 className="experience-header">Professional Growth</h3>
                {data.filter((item) => item.id === 'work')
                .map((item, index, arr) =>(
                <div className="experience-data" key={index}>
                <div className="experience-marker">
                        <img src={item.image} className='experience-pic' alt="" />
                    {index !== arr.length - 1 && (
                        <span className="experience-line"></span>
                    )}
                </div>
                <div className="experience-content">
                    <div className="experience-top">
                        <h3 className="experience-title">{item.title}</h3>
                        <span className='experience-year'>{item.date}</span> 
                    </div>
                <div className="experience-bottom">
                    <span className='experience-subtitle'>{item.subtitle}</span>
                    <p className='experience-desc'>{item.desc}</p>
                    <div className="experience-skills">
                        {item.tech?.map((skill, skillIndex) => (
                        <span key={skillIndex} >
                            {skill.name}
                        </span>
                        ))}
                    </div>
                </div>
                </div>
            </div>
            ))
            }
            </div>
      </div>
    </div>
  );
}

export default Experience;