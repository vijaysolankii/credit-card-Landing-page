import React from "react";
import Stars5 from "../images/5stars.svg";
import Stars4 from "../images/4stars.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "../../node_modules/swiper/swiper-bundle.css";

export let carouselData = [
  {
    id: 1,
    img: Stars5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium architecto illo.",
    userName: "Lorem, ipsum.",
    fromWhere: "paris, French",
  },
  {
    id: 2,
    img: Stars4,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium architecto illo.",
    userName: "Lorem, ipsum.",
    fromWhere: "NYC, USA",
  },
  {
    id: 3,
    img: Stars5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium architecto illo.",
    userName: "Lorem, ipsum.",
    fromWhere: "Jakarta, Indonesia",
  },
  {
    id: 4,
    img: Stars4,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium architecto illo.",
    userName: "Lorem, ipsum.",
    fromWhere: "Wagon, Indonesia",
  },
  {
    id: 5,
    img: Stars4,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium architecto illo.",
    userName: "Lorem, ipsum.",
    fromWhere: "Gujarat, India",
  },
  {
    id: 6,
    img: Stars5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium architecto illo.",
    userName: "Lorem, ipsum.",
    fromWhere: "Shanghai, China",
  },
  {
    id: 7,
    img: Stars5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium architecto illo.",
    userName: "Lorem, ipsum.",
    fromWhere: "Karachi, Pakistan",
  },
  {
    id: 8,
    img: Stars4,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium architecto illo.",
    userName: "Lorem, ipsum.",
    fromWhere: "Kathmandu, Nepal",
  },
  {
    id: 9,
    img: Stars5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium architecto illo.",
    userName: "Lorem, ipsum.",
    fromWhere: "Bangladesh",
  },
  {
    id: 10,
    img: Stars4,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium architecto illo.",
    userName: "Lorem, ipsum.",
    fromWhere: "Horoshima, Japan",
  },
  {
    id: 11,
    img: Stars5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium architecto illo.",
    userName: "Lorem, ipsum.",
    fromWhere: "Syedny, Australia",
  },
  {
    id: 12,
    img: Stars4,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium architecto illo.",
    userName: "Lorem, ipsum.",
    fromWhere: "Dubai, UAE",
  },
];

const Satisfection = () => {
  return (
    <section className="satisfection">
      <div className="container">
        <div className="satisfection-heading">
          <h2>
            Customer are satisfied with <strong>the features</strong> we provide
          </h2>
          <p>
            With the various features we provide,therefore many customer like
            the features that we provide
          </p>
        </div>
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 2,
          }}
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
          breakpoints={{
            250: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 30,
              grid: 1,
            },
            768: {
              spaceBetween: 50,
              grid: 1,
            },
            991: {
              spaceBetween: 100,
            },
          }}
        >
          {carouselData.length > 1 &&
            carouselData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="star-rating">
                  <img src={item.img} alt={item.userName} />
                </div>
                <p>{item.content}</p>
                <div className="mini-info">
                  <p>{item.userName}</p>
                  <p>{item.fromWhere}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Satisfection;
