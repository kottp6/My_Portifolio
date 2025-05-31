import { useState } from 'react'
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Technologies from './Components/Technologies/Technologies'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Education from './Components/Education/Education'
import Certifications from './Components/Certifications/Certifications'
import Experiences from './Components/Experiences/Experiences'


function App() {
  
  return (
   <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
    <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    
    <div className="container mx-auto px-8">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Education></Education>
      <Technologies></Technologies>
      <Experiences></Experiences>
      <Projects></Projects>
      <Certifications></Certifications>
      <Contact></Contact>
    </div>
   </div>
  )
}

export default App
