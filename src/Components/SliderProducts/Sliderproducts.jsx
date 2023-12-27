// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "../ProductCard/ProductCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./SliderProducts.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Container } from "react-bootstrap";


export default function App() {
  return (
    <Container className="contanier">
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        loop={true}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {
            <ProductCard
              img="/assets/image/name.jpg"
              title="محطة مياه 12 لتر"
              price="100"
              id="17"
            />
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            <ProductCard
              img="/assets/image/6L.jpg"
              title="محطة مياه 6 لتر "
              price="100"
              id="18"
            />
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            <ProductCard
              img="/assets/image/12L.jpg"
              title="محطة مياه 12 متر"
              price="100"
              id="19"
            />
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            <ProductCard
              img="/assets/image/18L.jpg"
              title="محطة مياه 18 متر"
              price="100"
              id="20"
            />
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            <ProductCard
              img="/assets/image/24.jpg"
              title="محطة مياه 24 متر"
              price="100"
              id="21"
            />
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            <ProductCard
              img="/assets/image/36L.jpg"
              title="محطة مياه 36 متر"
              price="100"
              id="22"
            />
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            <ProductCard
              img="/assets/image/36L.jpg"
              title="محطة مياه 50 متر"
              price="100"
              id="23"
            />
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            <ProductCard
              img="/assets/image/200L.jpg"
              title="محطة مياه 200 متر"
              price="100"
              id="24"
            />
          }
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
