import React, { useRef }   from 'react'
import { Link } from 'react-router-dom'
import Skill from './Skill'
import Footer from './Footer'
import Navbar from './Navbar'
import Experience from './Experience'
import Education from './Education'
import Project from './Project'
import Contact from './Contact'




const Home = () => {
  
  
    



  return (


    <>
      <div className=' h-auto w-screen'>


        <section className=' flex  flex-col items-center p-11 justify-center gap-7'>
          <div>
            <img className='h-[192px] w-[192px] rounded-full shadow-2xl mx-auto mt-[-17vh] object-cover rounded-3xl  ' src="/port.jpg" alt="" />
          </div>

          <div className='flex justify-center w-[70%]' >I’m Prabhjeet Singh, a Computer Science undergraduate at Guru Nanak Dev University, Amritsar, with strong skills in Java, JavaScript, SQL, and modern web development. I enjoy building responsive applications using React.js, Tailwind CSS, and REST APIs, and have created projects like a Sorting Visualizer and Weather App. Alongside technical expertise, I bring leadership, teamwork, and problem‑solving abilities, and I’m passionate about continuous learning and growing as a software developer.</div>
        </section>


        <Skill />
        <Experience />
        <Education />
        <Project />
        <Contact />









      </div >


    </>
  )
}

export default Home
