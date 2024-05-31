import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

export const SideNav = ({title,one,two,three}) => {
  return (
    <div >
    <h3 className='text-lg font-titleFont font-semibold mb-1 mt-4 px-6 '>
      {title}
    </h3>
    <ul>
      <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>{one}<span><MdKeyboardArrowRight /></span></li>
      <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>{two}<span><MdKeyboardArrowRight /></span></li>
      <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>{three}<span><MdKeyboardArrowRight /></span></li>


    </ul>
  </div>
  )
}
