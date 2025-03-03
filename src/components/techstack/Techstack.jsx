import React from 'react';
import './Techstack.css';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaPython, FaPhp, FaGithub, FaGitlab } from "react-icons/fa"; // Import all required icons
import { SiMysql, SiFirebase,SiTailwindcss,SiPhpmyadmin,SiVite  } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { VscVscodeInsiders } from "react-icons/vsc";
import IconCloudDemo from './IconCloudDemo';


function Techstack() {
  const tools = [
    { 
      id: 'frontend', 
      title: 'Front-End', 
      data:  [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3 /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
        { name: 'Vite+ReactJS', icon: <FaReact /> },
      ] 
    },
    { 
      id: 'backend', 
      title: 'Back-End', 
      data: [
        { name: 'PHP', icon: <FaPhp /> },
        { name: 'NodeJS', icon: <FaNode /> },
        { name: 'Python', icon: <FaPython /> },
      ] 
    },
    { 
      id: 'database', 
      title: 'Database', 
      data: [
        { name: 'MySQL', icon: <SiMysql />},
        { name: 'SQL', icon: <TbSql /> },
        { name: 'PhpMyAdmin', icon: <SiPhpmyadmin /> },
        { name: 'Firebase', icon: <SiFirebase /> },
      ] 
    },
    { 
      id: 'devops', 
      title: 'DevOps', 
      data: [
        { name: '404 Not Found', icon: null } 
      ] 
    },
    { 
      id: 'versioncontrol', 
      title: 'Version Control', 
      data: [
        { name: 'VScode', icon: <VscVscodeInsiders />},
        { name: '.Git', icon: <BsGit />},
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'GitLab', icon: <FaGitlab /> },
      ] 
    },
  ];

  return (
    <section className='techstack section' id='techstack'>
      <h2 className='section-title'>Technical Skills.</h2>
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