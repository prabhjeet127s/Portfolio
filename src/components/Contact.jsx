import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import Footer from './Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';





const Contact = () => {
  const location = useLocation();
  console.log(location)


  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [Message, setmessage] = useState("")
  const [form, setform] = useState([])


  useEffect(() => {
    console.log(form)
  }, [form])



  const handleclick = (e) => {

    e.preventDefault();


    const obj1 = {

      name,
      email,
      Message,
    };

    setform((prev) => [...prev, obj1]);



    alert("form sumbit")


  }
  return (
    <>
      <div className='    h-screen     bg-blue-900'>    {/*main*/}



        <div className=' text-4xl text-white  font-semibold text-center p-20     ' >{/*box1*/}
          Contact

        </div>


        <div className='flex  justify-center flex-col  items-center my-6   '>  {/*box2*/}

          <div className='  w-3xl px-6  gap-12' >{/*form*/}
            <h3 className='text-4xl font-semibold text-white  pb-15  '>Get In Touch</h3>
            <div className=' mt-5'>

              <form onSubmit={handleclick} className='flex flex-col gap-15' action="">
                <input value={name} onChange={(e) => setname(e.target.value)} className='border-b-2 text-gray-100 border-opacity-100 outline-none border-white ' type="text" placeholder='Your Name' />
                <input value={email} onChange={(e) => setemail(e.target.value)} className='border-b-2  text-gray-100 border-opacity-100 outline-none border-white ' type="text" placeholder='Your Email' />
                <input value={Message} onChange={(e) => setmessage(e.target.value)} className='border-b-2 text-gray-100   border-opacity-100 outline-none border-white ' type="text" placeholder='Message' />
                <button type="submit" className='  hover:bg-white transition border-2 ml-[36%] border-white h-10 w-40 text-l font-medium text-white'>SEND MESSAGE</button>
              </form>
            </div>
          </div>

          <div className=' min-h-[20rem] flex justify-center flex-wrap pt-10 gap-10 md:gap-40 lg:gap-64 w-full'>  {/*Contact*/}
            <div className='   '>{/*address*/}
              <h3 className='text-2xl font-semibold  text-white p-7 ' >My Address</h3>

              <h3 className='text-gray-100 text-xl p-3'  >Pathankot,India</h3>
              <h3 className='text-gray-100 text-xl p-3' >+91-8837615825</h3>
              <h3 className='text-gray-100 text-xl p-3' >prabhjeet.s127@gmail.com</h3>

            </div>

            <div className='' >{/*links*/}
              <h4 className='font-semibold text-2xl p-4 text-white' >Social-Links</h4>
              <ul className=' flex gap-4'>
                <li className='w-10 h-10  '  ><a className='h-9 w-3' href="https://github.com/prabhjeet127s">
                  <FaGithub style={{ color: "white" }} size={40} />
                </a></li>
                <li><a href="www.linkedin.com/in/prabhjeet-singh-518205207"><MdOutlinePeopleAlt style={{ color: "white" }} size={40} /></a></li>

              </ul>

            </div>

          </div>

        </div>

        {location.pathname != '/' && <Footer />}




      </div>








    </>
  )
}

export default Contact
