import { useLoaderData } from "react-router-dom";
import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineApi } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoArrowRedoCircle } from "react-icons/io5";

export const Product = () => {
  const data = useLoaderData()
  const productData = data.data;


  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  xl:gap-10 gap-6 px-4  ">
      {
        productData.map((item) => (
          <div className="h-auto border-[1px] border-gray-200 py-8 hover:border-transparent shadow-none hover:shadow-textShadow
           duration-200 relative z-30 flex flex-col gap-4 bg-white">
            <span className=" text-xs capitalize italic absolute top-2 right-2 text-gray-500">{item.category}</span>

            <div key={item.id} className="w-full h-auto flex items-center justify-center relative group" >
              <img className="w-52 h-64 object-contain"
                src={item.image}
                alt="productImage" />
              <ul className="w-full h-36 bg-gray-100 absolute
                 duration-700 flex flex-col bottom-[-170px] items-end justify-center gap-2
                font-titleFont px-2 border-l border-r group-hover:bottom-0">
                <li className="productLi  ">Compare<span ><MdOutlineApi /></span> </li>
                <li className="productLi ">
                  Add to Cart{" "}
                  <span ><FaShoppingCart /></span>
                </li>
                <li className="productLi ">
                  View Details{" "}
                  <span><IoArrowRedoCircle /></span>
                </li>
                <li className="productLi">
                  Add to Wish List{" "}
                  <span ><FaHeart /></span>
                </li>
              </ul>
            </div>
            <div className=" z-[10] bg-white">
              <div className="px-4 ">
                <div className="flex items-center justify-between">
                  <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">{item.title.substring(0, 20)}</h2>
                  <p>${item.price}</p>
                </div>
                <div>
                  <p className="text-sm mb-1">{item.description.substring(0, 100)}...</p>
                </div>
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>
              </div>
              <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400
            to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 hover:to:border-yellow-500
            hover:border-yellow-700 active:bg-gradient-to-bl
            active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3
    ">Add to Cart</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
