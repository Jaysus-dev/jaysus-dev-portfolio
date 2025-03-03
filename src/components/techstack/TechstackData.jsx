import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaPython, FaPhp, FaGithub, FaGitlab } from "react-icons/fa"; // Import all required icons
import { SiMysql, SiFirebase,SiTailwindcss,SiPhpmyadmin,SiVite  } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { VscVscodeInsiders } from "react-icons/vsc";


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

  export default tools;