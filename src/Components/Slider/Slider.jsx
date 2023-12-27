import { Swiper, SwiperSlide } from "swiper/react";
import {   Autoplay , Pagination} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "./Slider.css";
import React from "react";
import { Container } from "react-bootstrap";

export default function Slider() {
  return (
    <Container>
      <Swiper 
        modules={[  Autoplay , Pagination]}
      spaceBetween={50}
       slidesPerView={1} 
       pagination={{ clickable: true }}
       autoplay={{ delay: 3000, disableOnInteraction: true }}
       loop={true}
       className="main-carousel"
       >
        <SwiperSlide><img src="/assets/image/posterone.jpg" alt="" className="images"/></SwiperSlide>
        <SwiperSlide><img src="/assets/image/fawzy22.jpg" alt="" className="images"/></SwiperSlide>
        <SwiperSlide><img src="/assets/image/designOne.jpg" alt="" className="images"/></SwiperSlide>
        <SwiperSlide><img src="/assets/image/Untitled-1.jpg" alt="" className="images"/></SwiperSlide>
      </Swiper>
    </Container>
  );
}
