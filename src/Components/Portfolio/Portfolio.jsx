import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Enou from "../../img/enou.png";
import Airbnb from "../../img/airbnb.png";
import Carpedia from "../../img/carpedia.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={5}
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        // className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Enou}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Airbnb}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carpedia}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Enou}></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
