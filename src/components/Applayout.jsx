import React from 'react'

import Navbar from './Navbar'



import { Outlet } from 'react-router-dom'
import Footer from './Footer'


const Applayout = () => {
  return (
    <div>
        <Navbar/>

         
        <Outlet/>

        <Footer/>

        


      
    </div>
  )
}

export default Applayout
