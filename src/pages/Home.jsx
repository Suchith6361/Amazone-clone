import React from 'react'
import { Banner } from '../Home/Banner'
import { Product}  from '../Home/Product'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <div className='w-full xl:-mt-36 -mt-10 py-10'>
      <Product/>
      </div>
    </div>
  )
}
