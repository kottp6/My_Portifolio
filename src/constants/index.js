import project1 from "../assets/projects/Smart.png";
import project2 from "../assets/projects/Fresh.png";
import project3 from "../assets/projects/Meal.png";
import project4 from "../assets/projects/Note.png";
import project5 from "../assets/projects/Weather.png";
import project6 from "../assets/projects/CRUDS.png";
import project7 from "../assets/projects/portfolio.png";
import project8 from "../assets/beni.png";
import project9 from "../assets/download.png";
import logo1 from '../assets/HackerRank.png'
import logo2 from '../assets/maharatechiti.png'

export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting robust
  and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end
  technologies like HTML5, CSS3, JavaScript, TypeScript, JQuery, BootStrap, TaolwindCSS, SCSS, React and Next.js,
  as well as  technologies like  MySQL, SQL. and I am also good at dealing with Figma and XD My goal is to leverage my expertise to create innovative solutions that drive business
  growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Front-end developer with a passion for
 creating efficient and user-friendly web applications. With 2 years of professional experience,
  I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and SQL. 
  My journey in web development began with a deep curiosity for how things work, 
  and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
  I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality 
  solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing 
  to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Front-end Developer && UI/UX Designer",
    company: "Freelancer",
    description: `I am developing and maintaining web applications using HTML, CSS, JavaScript,
     React.js. Implemented RESTful APIs and integrated with SQL databases.`,
    technologies: ["Javascript", "React.js", "Next.js", "SQL"],
  },
  {
    year : "Feb 2025 - July 2025",
    role : "Front-end & cross Platform application",
    company : "ITI Program",
    description : `I am Learning Web development using HTML, CSS, JavaScript, 
    OOP, ES6, JQuery, Bootstrap, TailwindCSS, SASS`,
    technologies : ["ReactJS", "Angular", "Flutter", "NodeJS", "React-Native"]
  }
  
];

export const PROJECTS = [
  {
    title: "Smart Assistant Glasses",
    image: project1,
    description:
    "It is responsive SAG website, It is help blind people to buy glasses for used in his life and Contain Dashboard for Admin",
    technologies: ["HTML5", "CSS3", "Angular", "JavaScript", "TypeScript", "Bootstrap"],
  },
  {
    title: "E-commerce Application",
    image: project2,
    description:
      `An e-commerce website help user for buy anything. 
      Implemented authentication and protected routes using JWT, 
      Utilized React Query for data caching and React Toastify for notification , 
      Developed responsive UI components with React and Bootstrap, 
      Managed State using Context API.`,
    technologies: ["HTML5", "CSS3", "React", "TailwindCSS", "Redux", "JavaScript", "TypeScript"],
  },
  {
    title: "The Meal Website",
    image: project3,
    description:
      "It is responsive Meal website, helps user for choose any meal and how to do it",
    technologies: ["HTML5", "CSS3", "Bootstrap", "Jquery", "JacaScript", "API"],
  },
  {
    title: "Note Application",
    image: project4,
    description:
      "It is responsive Note website, It is help user for add note, delete and update.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Context API", "TailwindCSS"],
  },
  {
    title: "Weather Application",
    image: project5,
    description:
      "A web application that provides weather information based on user input, Integrated a weather API to fetch and display weather data and Implemented a user-friendly interface with dynamic updates based on user input",
    technologies: ["HTML5", "CSS3", "JavaScript", "API"],
  },
  {
    title: "Portfolio Website",
    image: project7,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "TailswindCSS"],
  },
  {
    title: "CRUDS Application",
    image: project6,
    description:
      `A web application for creating, reading, updating and deleteing items,
      ,Developed a full CRUDS functionality for item management. 
      ,Implemented a user-friendly interface with dynamic updates.
      and Utilized local storage for persistent data management.
`,
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
  },
];

export const CONTACT = {
  address: "Cairo , Egypt",
  phoneNo: "+20 012 888 45234",
  email: "kottpkamal@gmail.com",
};

export const EDUCATION = {
  image: project8,
  Name: "Computer and Artificial intelligence University, Beni-suef (Sep 2019 - July 2023)",
  GPA: "Excellent(3.6)",
  GradPro: "Excellent Grade (A)",
};

export const CERTIFICATIONS = [
  {
    title: "React(Basic)",
    image: logo1,
    link : "https://www.hackerrank.com/certificates/38e90f0cb576"
  },
  {
    title: "CSS(Basic)",
    image: logo1,
    link : "https://www.hackerrank.com/certificates/9746560c76a1"
  },
  {
    title: "JavaScript(Basic)",
    image: logo1,
    link : "https://www.hackerrank.com/certificates/5b25918b328b"
  },
  {
    title: "JavaScript(Intermediate)",
    image: logo1,
    link : "https://www.hackerrank.com/certificates/e8257a08d1e4"
  },
  {
    title: "Database Fundamentals",
    image: logo2,
    link : "https://maharatech.gov.eg/mod/customcert/view.php?id=7655&downloadown=1"
  },
];