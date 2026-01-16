import React from 'react'

import { experience } from '../../Experience'
import Footer from './Footer';
import Navbar from './Navbar';



const Experience = () => {


  

  
  return (

  <>
 


    <div className='p-[40px] bg-gray-100 h-screen' >

      <div className=' m-2.5'>
      <h2 className='m-30px  text-center text-4xl  font-bold ' >
        Experience
      </h2>
      </div>

      <div className=' flex flex-col justify-center' >
      {experience.map((item) => (
        <div
          className=' bg-white  m-7 p-5 border-l-blue-400 border-l-4'


        >
          <h3 className='text-blue-900 font-semibold text-4xl'  >{item.title}</h3>
          <p className='text-orange-400 font-semibold text-4xl' >{item.place}</p>
          <p >{item.time}</p>
          <p className='w-1/2'>{item.desc}</p>
        </div>
      ))}
        </div>

    </div>
     

    

    </>



  );






}

export default Experience
