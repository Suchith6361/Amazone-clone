import React, { useEffect } from 'react'
import { IoMdMenu } from "react-icons/io";
import { useState, useRef } from 'react';
import { CgProfile } from "react-icons/cg";
import { SideNav } from './SideNav';
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"


export const HeaderBottom = () => {
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false)
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false)
      }
    })
  }, [ref,sidebar])

  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center '>
      <ul className='flex items-center gap-2 text-sm tracking-wide'>
        <li onClick={() => setSidebar(true)} className='headerHover flex items-center gap-1'><span className='text-xl'>< IoMdMenu /></span>  ALL</li>
        <li className='headerHover hidden md:inline-flex'> Today's Deals</li>
        <li className='headerHover hidden md:inline-flex'> Customer Service</li>
        <li className='headerHover hidden md:inline-flex'> Gift Cards</li>
        <li className='headerHover hidden md:inline-flex'> Register</li>
        <li className='headerHover hidden md:inline-flex'> Sell</li>
      </ul>
      {
        sidebar && (
          <div className=' w-full h-screen  left-0 text-black fixed top-0 bg-amazon_blue bg-opacity-50 '>
            <div className='w-full h-full relative'>


              <div
                className='w-[80%] md:w-[350px] h-full bg-white border border-black '>
                <motion.div ref={ref} initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                  <div className='w-full bg-amazon_light text-white py-4 px-6 flex items-center gap-4'>
                    <div className='text-xl'> <CgProfile /></div>
                    <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, Sign In</h3>
                  </div>
                  <SideNav
                    title="Digital Content & Devices"
                    one="Amazon Music"
                    two="Kindle E-readers & Books"
                    three="Amazon Appstore" />
                  <SideNav
                    title="Shop by Department"
                    one="Electronics"
                    two="Computers"
                    three="Smart Home" />
                  <SideNav
                    title="Programs & Features"
                    one="Gift Cards"
                    two="Amazon Live"
                    three="International shopping"
                  />
                  <SideNav
                    title="Help & Settings"
                    one="Your Account"
                    two="Customer Service"
                    three="Contact us"
                  />
                  <span onClick={() => setSidebar(false)} className='cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black
             flex items-center justify-center border bg-gray-200  hover:bg-red-500 duration-300'>   <IoMdClose /></span>
                </motion.div>
              </div>

            </div>

          </div>
        )
      }
    </div>
  )
}
