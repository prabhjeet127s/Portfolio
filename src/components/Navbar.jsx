import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {




  return (
    <div>
        <header className='h-[65vh] bg-cover bg-center bg-fixed flex flex-col items-center bg-blue-100'
        style={{ backgroundImage: "url(/mouse.jpg)" }}
      >

        <nav className=''>
          <ul className='flex justify-center gap-10  p-10 text-xl  text-white'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/skill"}>Skills</Link></li>
            <li><Link to={"/experience"}>Experience</Link></li>
            <li><Link to={"/education"}>Education</Link></li>
            <li><Link to={"/project"}>Projects</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </nav>

        <h1 className='text-[3rem] font-bold mt-20 text-white'>Prabhjeet singh</h1>

      </header>
      
    </div>
  )
}

export default Navbar

