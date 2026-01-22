import React from 'react'


import Skillsdesc from './Skillsdesc'
import { skill } from '../../Skill'
import Footer from './Footer'
import Navbar from './Navbar'









const Skill = () => {

  

  return (
    <>

  
    

      <div className='bg-gray-100  h-auto flex flex-col  '>

        <div className='flex justify-center  p-15  gap-6 '>
          <div className=' text-5xl'>Icon</div>
          <div className='text-5xl'>Skills</div>
        </div>

        <Skillsdesc  skill={skill} />



      </div>

    


    </>


  )
}

export default Skill
