import React from 'react'

import { project } from '../../Project'
import Footer from './Footer'
import Navbar from './Navbar'


const Project = () => {
  return (

    <>
    <Navbar/>


    <div className='h-screen bg-gray-100' >

      <div className='text-5xl p-10 font-bold flex  justify-center text-blue-600' > Projects</div>

      <div className='  h-151 p-25  gap-17  grid  grid-cols-4  ' >
        {project.map((value) => (



          
            <div   className=' border-2 relative  h-full  overflow-hidden   '>
                <img className='h-full w-full object-cover'  src={value.src} alt="" />
                <div className='absolute  flex justify-center items-center transition ease-out duration-1500  ease bg-black/20   opacity-0 hover:opacity-100 flex justify-center items-center top-0 bottom-0  ' >
                  <p className=' text-l bg-black flex justify-center items-center px-5 font-semi h-full w-full text-white ' >{value.desc}</p>
                </div>

            
            <div></div>
          </div>

        ))}

      </div>


    </div>

    <Footer/>
    </>
  )
}

export default Project
