import React from 'react';
import './Techstack.css';
import IconCloudDemo from './IconCloudDemo';

function Techstack() {
  const tools = [
    { id: 'frontend', title: 'Front-End', data:  ['HTML', 'CSS', 'JavaScript', 'ReactJS'] },
    { id: 'backend', title: 'Back-End', data: ['PHP', 'NodeJS', 'Python'] },
    { id: 'database', title: 'Database', data: ['MySQL','SQL', 'Firebase'] },
    { id: 'devops', title: 'DevOps', data: '404 Not Found' },
    { id: 'Versioncontrol', title: 'Version Control', data: ['GitHub', 'GitLab'] },
  ];

  return (
    <section className='section' id='techstack'>
      <h2 className='section-title'>Technical Skills</h2>
      <span className='section-subtitle'>Using modern tech for seamless performance</span>
      <div className='techstack-container container grid'>
        <div>
          <IconCloudDemo />
        </div>
        <div className='techstack-data grid'>
          <h3 className='techstack-title'>TechStack</h3>
          <div className='toolstack-container grid'>
          {tools.map(({ id, title, data }) => (
            <div className='tools-container grid' key={id}>
              <span className='tools-title'>{title} : </span>
              <div className='tools-data grid'>
                {(Array.isArray(data) ? data : [data]).map((item, index) => (
                  <p key={index}>{item}</p>
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