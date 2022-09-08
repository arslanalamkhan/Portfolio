import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Profile from "../../img/profile.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonial = () => {
  const clients = [
    {
      img: Profile,
      review:
        "Dolor sit amet consectetur adipiscing. Nisl suscipit adipiscing bibendum est ultricies. Consequat nisl vel pretium lectus quam id. Ultrices dui sapien eget mi. In hac habitasse platea dictumst. Turpis egestas integer eget aliquet nibh praesent tristique. Feugiat in fermentum posuere urna nec tincidunt. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Duis ut diam quam nulla porttitor massa id. Commodo ullamcorper a lacus vestibulum sed arcu.",
    },
    {
      img: Profile,
      review:
        "Dolor sit amet consectetur adipiscing. Nisl suscipit adipiscing bibendum est ultricies. Consequat nisl vel pretium lectus quam id. Ultrices dui sapien eget mi. In hac habitasse platea dictumst. Turpis egestas integer eget aliquet nibh praesent tristique. Feugiat in fermentum posuere urna nec tincidunt. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Duis ut diam quam nulla porttitor massa id. Commodo ullamcorper a lacus vestibulum sed arcu.",
    },
    {
      img: Profile,
      review:
        "Dolor sit amet consectetur adipiscing. Nisl suscipit adipiscing bibendum est ultricies. Consequat nisl vel pretium lectus quam id. Ultrices dui sapien eget mi. In hac habitasse platea dictumst. Turpis egestas integer eget aliquet nibh praesent tristique. Feugiat in fermentum posuere urna nec tincidunt. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Duis ut diam quam nulla porttitor massa id. Commodo ullamcorper a lacus vestibulum sed arcu.",
    },
    {
      img: Profile,
      review:
        "Dolor sit amet consectetur adipiscing. Nisl suscipit adipiscing bibendum est ultricies. Consequat nisl vel pretium lectus quam id. Ultrices dui sapien eget mi. In hac habitasse platea dictumst. Turpis egestas integer eget aliquet nibh praesent tristique. Feugiat in fermentum posuere urna nec tincidunt. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Duis ut diam quam nulla porttitor massa id. Commodo ullamcorper a lacus vestibulum sed arcu.",
    },
  ];

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Client always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div
          className="blue t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blue t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {clients.map((client, index) => {
          return (
            <div className="secSwiper">
              <SwiperSlide key={index}>
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
