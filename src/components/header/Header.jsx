import React from 'react'
import  logo  from '../../assets/logo.png'
import { IoLocation } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { HeaderBottom } from './HeaderBottom';
export const Header = () => {

  const [showAll, setShowAll] = React.useState(false)
  const allItems = [
    { _id: "100", title: "All Department" },
    { _id: "101", title: "Books" },
    { _id: "102", title: "Mens Fashion" },
    { _id: "103", title: "Womens Fashion" },
    { _id: "104", title: "Kids Fashion" },
    { _id: "104", title: "electronics" },
    { _id: "105", title: "Deals" },
    { _id: "106", title: "Computers" },
    { _id: "107", title: "Electronics" },
    { _id: "108", title: "Home" },
    { _id: "109", title: "Kitchen" },
    { _id: "110", title: "Office" },
    { _id: "111", title: "Pets" },
    { _id: "112", title: "Sports" },
    { _id: "113", title: "Toys" },
    { _id: "114", title: "Video Games" },


  ]
  return (
    <div className='w-full sticky top-0 z-50'>
      <div className=' w-full bg-amazon_blue mx-auto  text-white px-4 py-3 flex items-center gap-2'>

        <div className=' headerHover '>
          <img className=' w-24 mt-2' src={logo} alt="" />
        </div>
        <div className=' headerHover hidden lgl:inline-flex'>
          <IoLocation />
          <p className=' text-sm text-lightText font-light flex flex-col'>Deliver to{""}
            <span className='text-sm font-semibold text-whiteText -mt-1'>Oman</span></p>
        </div>

        <div className='h-10 rounded-sm hidden relative  lgl:inline-flex flex-grow'>
          <span onClick={() => setShowAll(!showAll)} className=' w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer
          duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center
          rounded-bl-md rounded-tl-md'>
            All <span></span><IoMdArrowDropdown /></span>
          {

            showAll && (
              <div>
                <ul className=' absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue
                text-black p-2 flex-col gap-1 z-50'>

                  {
                    allItems.map((item) => (
                      <li className='text-sm tracking-wide font-titleFont border-b-[1px]
                      border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200' key={item._id}>{item.title}</li>
                    ))
                  }
                </ul>
              </div>
            )
          }

          <input className='h-full text-base text-amazon_blue flex-grow px-2 outline-none border-none' type="text" />
          <span className='w-10 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue 
          cursor-pointer rounded-tr-md rounded-br-md text-2xl'><IoMdSearch /></span>
        </div>
        <div className='flex flex-col items-start justify-center headerHover ml-4 '>
          <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light'>Hello, sign in</p>
          <p className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex '>Account $ list {""} <span><IoMdArrowDropdown /></span></p>
        </div>

        <div className='  items-center justify-center headerHover hidden lgl:flex flex-col'>
          <p className='text-xs text-lightText font-light'>Returns</p>
          <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
        </div>

        <div className=' flex relative items-center justify-center headerHover' >
          <FaShoppingCart />
          <p className='text-xs font-semibold mt-3 text-whiteText'>Cart <span className='absolute text-xs
          -top-1 left-6 p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>0</span> </p>
        </div>

<div>
 
</div>
      </div>
      <div>
      <HeaderBottom />
      </div>
     

    </div>
  )
}
