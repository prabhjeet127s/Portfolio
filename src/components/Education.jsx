import React from 'react'
import { education } from '../../Study'
import Footer from './Footer'
import Navbar from './Navbar'


const Education = () => {
  
  return (
    <>

      
      <div className='p-[40px]   bg-gray-100 h-auto' >


        <div className='mb-10  p-10  text-center text-4xl  font-bold ' >

          Education
        </div>

        <div className='  flex flex-col  justify-center' >


          {education.map((value) => (

            <div className=' bg-white  p-10 m-7 border-l-blue-400 border-l-4' >
              <h3 className='text-blue-900 font-semibold text-3xl'  >{value.name}</h3>
              <p className='text-orange-400 font-semibold text-xl'  >{value.grade}</p>
              <p className=' text-xl font-semibold'>{value.date}</p>
            </div>

//jdhgfjdsgfvdhjfgjdg


          ))}
        </div>

     </div>
      
    </>
  )
}

export default Education
