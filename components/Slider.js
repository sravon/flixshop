
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';


// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function Slider({ results }) {
  
  
  
  return (
    <div className="slide-main">
      <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
        }} pagination={{
        "clickable": true
        }} navigation={true}>
        {results.map(result => (
            <SwiperSlide key={result.id}>
            <img
                src={`https://api.shrabon.me/${result.image}`}
                //height={1080} width={1920}
                className="object-fill w-full h-1/4"
            />
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}