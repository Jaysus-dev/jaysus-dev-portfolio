import RTU from '../../assets/img/RTU_Logo.jpg'
import ACLC from '../../assets/img/ACLC_Logo.png'
import SAGA from '../../assets/img/SAGA_Logo.png'
import BDI from'../../assets/img/BDI_Logo.png'
import COMELEC from '../../assets/img/COMELEC_Logo.png'
import FREELANCE from '../../assets/img/FREELANCE_Logo.png'


const data = [
    {
        id: 'academic',
        title: 'Rizal Technologial University',
        image: RTU,
        date: 'Jun 2019 — Aug 2023',
        subtitle:'BS in Information Technology',
        desc: `I gained knowledge in programming, 
        software development, and database management. Through hands-on projects, 
        I developed skills in creating IT solutions, solving technical challenges, 
        and implementing sytems for efficiency and growth, preparing me for the 
        evolving tech industry.`,
        tech:  [
            { name: 'HTML5' },
            { name: 'CSS3'},
            { name: 'JavaScript'},
            { name: 'PHP'},
            { name: 'Python'},
          ] 
    },
    {
        id: 'academic',
        title: 'AMA CLC — Guadalupe',
        image: ACLC,
        date: 'Jul 2017 — May 2019',
        subtitle:'Information Communications and Technology',
        desc: `As an ACLC ICT Programming student, 
        I learned to build and maintain software, 
        preparing for a role in tech innovation and digital transformation.`,
        tech:  [
            { name: 'Java'},
            { name: 'Visual Basic'},
            { name: '.Net'},
          ] 
    },
    {
        id: 'academic',
        title: 'San Agustin Academy',
        image: SAGA,
        date: 'Jun 2013 — Apr 2019',
        subtitle:'CAL Exellence Awardee',
        desc: `My vocational course sparked my passion for technology, 
        where I discovered the power of solving problems and creating solutions through IT. 
        This early inspiration drives my journey in the tech world.`,
        tech:  [
            { name: 'Visual Basic'},
          ] 
    },
    {
        id:'work',  
        title: 'BDI Capital Ltd.',
        image: BDI,
        date: 'Jun 2024 — Jan 2025',
        subtitle:'Junior Web Developer',
        desc: `Website development, graphic design, digital marketing, and AI transformation initiatives. 
                Collaborate with internal teams and clients to create and maintain websites,
                design graphics and drive AI transformation projects.`,
        tech:  [
                { name: 'HTML5' },
                { name: 'Vite+ReactJS'},
                { name: 'TailwindCSS'},
                { name: 'PHP'},
                { name: 'GitHub'},
              ] 
    },
    {
        id:'work',
        title: 'Capstone',
        image: RTU,
        date: 'Nov 2022 — Mar 2023',
        subtitle:'Frontend Web Developer • UI/UX Designer',
        desc: `Made visual appealing and user-friendly interfaces.`,
        tech:  [
            { name: 'Figma' },
            { name: 'HTML5' },
            { name: 'CSS3'},
            { name: 'Bootsrap'},
            { name: 'JavaScript'},
            { name: 'GitHub'},
          ] 
    },
    {
        id:'work',
        image: BDI,
        title: 'B3S Telecommunications Inc.',
        date: 'Feb — Aug 2022',
        subtitle:'Intern • Web Developer',
        desc: `Gained hands-on experience in building and maintaining websites, 
        collaborating with teams, and solving real-world coding challenges.`,
        tech:  [
            { name: 'HTML5' },
            { name: 'CSS3'},
            { name: 'JavaScript'},
          ] 
    },
    {
        id:'work',
        title: 'Commision of Elections',
        image: COMELEC,
        date: 'Mar —  May 2022',
        subtitle:'Technical Support Staff',
    },
    {
        id:'work',
        title: 'Freelance',
        image: FREELANCE,
        date: '2019 — 2020',
        subtitle:'Graphic Artist',
        desc: `Crafted unique and impactful designs, 
        from logos to digital illustrations.`,
        tech:  [
            { name: 'Photoshop' },
            { name: 'Illustrator'},
          ] 
    }
]

export default data;