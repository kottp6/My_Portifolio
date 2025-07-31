import project1 from "../assets/projects/Smart.png";
import project2 from "../assets/projects/Fresh.png";
import project3 from "../assets/projects/Meal.png";
import project4 from "../assets/projects/bg.png";
import project5 from "../assets/projects/Weather.png";
import project6 from "../assets/projects/Movie.png";
import project7 from "../assets/projects/portfolio.png";
import project8 from "../assets/beni.png";
import project9 from "../assets/download.png";
import project10 from "../assets/projects/p10.png";
import project11 from "../assets/projects/Costco.png";
import logo1 from '../assets/HackerRank.png'
import logo2 from '../assets/maharatechiti.png'

export const INTERNSHIP = [
  {
    title: "Frontend Developer & Cross Platform Mobile Development (Feb 2025 – July 2025)",
    image: project9,
    description: `Completed intensive training in HTML, CSS, JavaScript, TypeScript, and modern frameworks like ReactJS and Angular. Learned Cross Platform Mobile Development using Flutter and React Native.
    Built real-world projects simulating industry practices, applying API integration, Firebase, and state management.
    Participated in team-based development following Agile methodologies and Git version control.
    Improved UI/UX design principles, component reusability, and performance optimization`
  }
];

export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting robust
  and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end
  technologies like HTML5, CSS3, JavaScript, TypeScript, JQuery, BootStrap, TaolwindCSS, SCSS, React and Next.js,
  as well as  technologies like  MySQL, SQL. and I am also good at dealing with Figma and XD My goal is to leverage my expertise to create innovative solutions that drive business
  growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Front-end developer with a passion for
 creating efficient and user-friendly web applications. With 3 years of professional experience,
  I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and SQL. 
  My journey in web development began with a deep curiosity for how things work, 
  and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
  I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality 
  solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing 
  to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Nov 2022 – Present | Cairo, Egypt",
    role: "Front-end Developer",
    company: "Freelancer",
    description: `Worked as a freelance front-end developer on various projects.`,
    technologies: ["React", "Authentication", "GitHub", "Responsive Design"],
    projects: [
      { name: "Note Application", links: { github: "https://github.com/kottp6/NoteApplicationReact", video: "https://www.linkedin.com/posts/mahmoud-hussein-0bb055242_note-application-with-react-js-activity-7262839965783388163-Qac9/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwp108BQ3qGUZG-G2cUIIkoBXGE6x2CfFc" } },
      { name: "Create Authentication" },
      { name: "MovicEg Website", links: { live: "https://www.moviceg.com/" } },
      { name: "Tech-seeds learning website", links: { live: "https://tech-seeds.vercel.app/" } }
    ]
  },
  {
    year: "Feb 2023 – Present",
    role: "UI/UX Developer",
    company: "Freelancer",
    description: `Designed user interfaces and improved user experience across platforms.`,
    technologies: ["Figma", "Mobile UI", "Design Systems"],
    projects: [
      { name: "Mobile Application: FeL7za" },
      { name: "Website: Medicine Website" }
    ]
  }
];


export const PROJECTS = [
  {
    title: "Handmade E-Commerce Website",
    image: project10,
    description:
      "A full-stack handmade e-commerce platform that connects customers with vendors offering handcrafted products. The system supports a smooth and secure shopping experience, real-time admin control, and a vendor management system.",
    technologies: ["HTML5", "CSS3", "React", "JavaScript", "TypeScript", "TailwindCSS", "Firebase", "Context API", "Cloudinary"],
    liveDemo : "https://hand-made-website-graduation-projec-seven.vercel.app/"
  },
  {
    title: "Smart Assistant Glasses",
    image: project1,
    description:
    "The project consists of Website and Dashboard. The Website is for showing our product and enables the user to place an order. The Dashboard is for Admin control to show an overview and statistics about the product.",
    technologies: ["HTML5", "CSS3", "Angular", "JavaScript", "TypeScript", "Bootstrap"],
    liveDemo : "https://www.linkedin.com/posts/mahmoud-hussein-0bb055242_sag-smartassistantglasses-aiforaccessibility-activity-7085287650022035457-ZIgo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwp108BQ3qGUZG-G2cUIIkoBXGE6x2CfFc"
  },
  {
    title: "E-commerce Fresh Cart",
    image: project2,
    description:
      `An e-commerce website help user for buy anything. 
      Implemented authentication and protected routes using JWT, 
      Utilized React Query for data caching and React Toastify for notification , 
      Developed responsive UI components with React and Bootstrap, 
      Managed State using Context API.`,
    technologies: ["HTML5", "CSS3", "React", "TailwindCSS", "Redux", "JavaScript", "TypeScript"],
    liveDemo : "https://www.linkedin.com/posts/mahmoud-hussein-0bb055242_react-webdevelopment-tailwindcss-activity-7253044158003638272-4jW6/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwp108BQ3qGUZG-G2cUIIkoBXGE6x2CfFc"
  },
  {
    title: "E-commerce Costco",
    image: project11,
    description:
      `A fully functional, responsive e-commerce web application built using vanilla JavaScript, HTML, and CSS. The app includes separate roles for Admin and User, with dedicated features for managing products and shopping activities. It uses localStorage for persistence and integrates with an external API for real product data.`,
    technologies: ["HTML5", "CSS3", "JavaScript", "API", "LocalStorage"],
    liveDemo : "https://e-commerce-appliction-six.vercel.app/"
  },
  {
    title: "The Movie Application",
    image : project6,
    description: "A modern and feature-rich Movie Web Application built with Angular 17, offering seamless user authentication, movie browsing, and personalized experiences. The app integrates with The Movie Database (TMDb) API to fetch real-time movie data, and includes both public and protected routes.",
    technologies : ["HTML5", "CSS3", "Angular", "TypeScript", "TailwindCSS", "API"],
    liveDemo : "https://movie-application-cbut.vercel.app/movies"
  },
  {
    title: "The Meal Website",
    image: project3,
    description:
      "It is responsive Meal website, helps user for choose any meal and how to do it",
    technologies: ["HTML5", "CSS3", "Bootstrap", "Jquery", "JacaScript", "API"],
    liveDemo : "https://yummy-app-js.vercel.app/"
  },
  {
    title: "Note Application",
    image: project4,
    description:
      "It is responsive Note website, It is help user for add note, delete and update.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Context API", "TailwindCSS"],
    liveDemo : "https://note-application-react.vercel.app/"
  },
  {
    title: "Weather Application",
    image: project5,
    description:
      "A web application that provides weather information based on user input, Integrated a weather API to fetch and display weather data and Implemented a user-friendly interface with dynamic updates based on user input",
    technologies: ["HTML5", "CSS3", "JavaScript", "API", "React", "TailwindCSS"],
    liveDemo : "https://weather-app-react-bay-eta.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project7,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "TailswindCSS"],
    liveDemo : "https://handmade-ecommerce-website.vercel.app/"
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