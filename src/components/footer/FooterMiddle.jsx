import React from 'react'
import { FooterMiddleList } from './FooterMiddleList'
import { MiddleList } from '../../constants'
import  logo  from '../../assets/logo.png'
import  {bdFlag} from '../../assets/index'




export const FooterMiddle = () => {
    return (
        <div className='w-full bg-amazon_light text-white'>
            <div className='w-full border-b-[1px] border-gray-500 py-10'>
                <div className='max-w-5xl mx-auto text-gray-300 '>
                    <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:place-items-center  items-start md:items-start p-10'>{

                        MiddleList.map((item) => (
                            <FooterMiddleList
                                key={item._id}
                                title={item.title}
                                ListItem={item.ListItem}
                            />
                        )) }

                    </div>
                </div>
                <div className='w-full flex gap-6 items-center  justify-center py-6'>
                    <div>
                      
                        <img className='w-20 pt-3' src={logo} alt="" />
                    </div>
                    <div className='flex gap-2 items-center border border-gray-500
                    hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
                        <p>English</p>
                    </div >
                    <div className='flex gap-2 items-center border border-gray-500
                    hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
                    <img className='w-6 ' src={bdFlag} alt="" />
                    <p>Bangladesh</p>
                    </div>
                </div>
            </div>
          </div>
    )
}
