import React from 'react';
import './Techstack.css';
import IconCloudDemo from './IconCloudDemo';
import tools from '../techstack/TechstackData'

function Techstack() {

  return (
    <section className='techstack section' id='techstack'>
      <h2 className='section-title'>Technical.</h2>
      <span className='section-subtitle'>
        modern tech for seamless performance
        </span>
      <div className='techstack-container container grid'>
          <IconCloudDemo />
        <div className='techstack-data grid'>
          <h3 className='techstack-title'>TechStack.</h3>
          <div className='toolstack-container grid'>
            {tools.map(({ id, title, data }) => (
              <div className='tools-container' key={id}>
                <span className='tools-title'>{title} : </span>
                  <div className='tools-data grid'>
                    {data.map(({ name, icon }, index) => (
                      <p key={index}>
                        {icon}
                        {name} 
                      </p>
                    ))}
                  </div>
              </div>
            ))}
          </div>
          <p className='techstack-description'>
            Junior web developer skilled in ReactJS, Tailwind CSS 
            with growing expertise in back-end development like databases,
            APIs, and server-side programming. Committed to learning and 
            problem-solving, I aim to contribute effectively to both front-end 
            and back-end tasks while making a meaningful impact in the field.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Techstack;