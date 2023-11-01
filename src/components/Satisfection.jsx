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
    <section className="satisfection xl:py-[200px] md:py-[140px] py-[50px]">
      <div className="container mx-auto px-5">
        <div className="satisfection-heading text-center">
          <h2 className="text-white xl:text-h2 md:text-h3 text-h5 xl:mb-16 md:mb-10 mb-6 leading-[38px]  md:leading-[1.2] xl:leading-12 ">
            Customer are satisfied with <strong className="text-pink md:block inline-block">the features</strong> we provide
          </h2>
          <p className="text-white/60 xl:text-2xl md:text-xl">
            With the various features we provide, therefore many customer like
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
          className="mySwiper md:mt-24 mt-12 xl:pb-[150px] md:pb-[100px] max-[450px]:pb-[100px]"
          breakpoints={{
            250:{
                slidesPerView:1,
                centeredSlides:true,
                spaceBetween:30,
                grid:1
            },
            768:{
                spaceBetween:50,
                grid:1
            },
            991:{
                spaceBetween:100,
            }
          }}
        >
          {carouselData.length > 1 &&
            carouselData.map((item, index) => (
              <SwiperSlide key={index} className="bg-dark-light py-6 px-6 flex flex-col gap-y-[30px]">
                <div className="star-rating">
                  <img src={item.img} alt={item.userName} />
                </div>
                <p className="text-lg">{item.content}</p>
                <div className="mini-info">
                  <p className="text-lg">{item.userName}</p>
                  <p className="text-white/50">{item.fromWhere}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Satisfection;
