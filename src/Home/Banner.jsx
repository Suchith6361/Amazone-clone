import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import {
  bannerImage,
  bannerImage2,
  bannerImage3,
  bannerImage4,
  bannerImage5,

} from '../assets/index'

export const Banner = () => {
  const [doActive, setDoActive] = React.useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDoActive(next);
    },
    appendDots: dots => (
      <div
        style={{

          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "210px",
        }}
      >
        <ul style={{
          widows: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i === doActive ? {
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: "#131921",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "8px 0",
            cursor: "pointer",
            color: "white",
            border: "1px solid #f3a847"
          } : {
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: "#232F3E",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "8px 0",
            cursor: "pointer",
            color: "white",
            border: "1px solid #f3a847"
          }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <div className='w-full'>
      <div className='w-full h-full relative'>
        <Slider {...settings}>
          <div>
            <img src={bannerImage} alt='banner' />
          </div>
          <div>
            <img src={bannerImage2} alt='banner' />
          </div>
          <div>
            <img src={bannerImage3} alt='banner' />
          </div>
          <div>
            <img src={bannerImage4} alt='banner' />
          </div>
          <div>
            <img src={bannerImage5} alt='banner' />
          </div>
        </Slider>
      </div>
    </div>
  )
}
