import React, { useEffect, useRef } from "react";
import useIntersectionObserver from '../components/utilities/useIntersectionObserver';
import Swiper from "swiper/bundle";
import "../../node_modules/swiper/swiper-bundle.css";
import Logo from '../images/Logo.svg'

const HeroCarousel = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const swiperRef = useRef(null);

  useEffect(() => {
    const mySwiper = new Swiper(swiperRef.current, {
      slidesPerView: "auto",
      speed: 4000,
      freeModeMomentum: false,
      autoplay: {
        delay: -1,
      },
      loop: true,
      allowTouchMove: false,
      disableOnInteraction: false,
      breakpoints: {
        320: {
          slidesPerView: 3.5,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        991: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1440: {
          slidesPerView: 6,
          spaceBetween: 40,
        }
      },
    });

    return () => {
      mySwiper.destroy(true, true);
    };
  }, []);

  return (
    <div className={`marquee ${isVisible ? 'showItem delay-[1.8s] duration-1000' : 'hideItem'}`} ref={ref}>
      <div className="overflow-hidden">
        <div ref={swiperRef} className="swiper-container">
          <div className="swiper-wrapper oWrap">
            <div className="swiper-slide"><figure><img src={Logo} alt="Logo Item" /></figure></div>
            <div className="swiper-slide"><figure><img src={Logo} alt="Logo Item" /></figure></div>
            <div className="swiper-slide"><figure><img src={Logo} alt="Logo Item" /></figure></div>
            <div className="swiper-slide"><figure><img src={Logo} alt="Logo Item" /></figure></div>
            <div className="swiper-slide"><figure><img src={Logo} alt="Logo Item" /></figure></div>
            <div className="swiper-slide"><figure><img src={Logo} alt="Logo Item" /></figure></div>
            <div className="swiper-slide"><figure><img src={Logo} alt="Logo Item" /></figure></div>
            <div className="swiper-slide"><figure><img src={Logo} alt="Logo Item" /></figure></div>
            <div className="swiper-slide"><figure><img src={Logo} alt="Logo Item" /></figure></div>
            <div className="swiper-slide"><figure><img src={Logo} alt="Logo Item" /></figure></div>
            <div className="swiper-slide"><figure><img src={Logo} alt="Logo Item" /></figure></div>
            <div className="swiper-slide"><figure><img src={Logo} alt="Logo Item" /></figure></div>
            {/* Add more slides as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
