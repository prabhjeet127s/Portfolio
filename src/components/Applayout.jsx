import React, { useRef } from 'react'

import Navbar from './Navbar'



import { Outlet } from 'react-router-dom'
import Footer from './Footer'



const Applayout = () => {

    
        const scroll = useRef();
  
    const handleScroll = () => {
      window.scrollTo({
        left: 0,
            top: scroll.current.offsetTop,
            behavior:"smooth"

        
      });
    };

    
  return (
    <div scroll={scroll} >
        <Navbar  scroll={scroll}  />

         
        <Outlet  />

        <Footer   handleScroll={handleScroll}/>

        


      
    </div>
  )
}

export default Applayout
