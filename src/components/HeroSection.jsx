import React from 'react'

import FrontImg from '../images/frontCards.png'
import BackImg from '../images/backCards.png'

const HeroSection = () => {
  return (
    <section className="heroSection pt-6 pb-8 md:pt-10 md:pb-[50px] lg:pb-[90px] xl:pt-28  relative overflow-hidden ">
      <div className="container mx-auto px-5 relative z-50">
        <h1 className='text-h4 mb-4 xl:text-h1 lg:text-h2 md:text-h3  leading text-white font-medium xl:mb-12 md:mb-8'>Simplify All Transections <br className='block max-[375px]:hidden' /> in <strong className='font-semibold text-pink'>One Card</strong></h1>
        <p className='text-sm xl:text-2xl md:text-lg lg:text-xl leading-[1.55] text-white/60 mb-5 xl:mb-12 md:mb-8'>Hurry up and join now, with this you can manage your daily <br /> finance easily and safely.</p>
        <div className='inline-block relative'>
          <a className='btn flex items-center md:scale-[1.3] lg:scale-[1.5] lg:translate-x-[41px] md:translate-x-[25px]' href="#">
            <span className="squre-1"></span>
            <span className="squre-2"></span>
            <span className='content transition-all duration-500 text-white hover:text-pink'>Get Started</span>
            <span className='ml-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="61" height="14" viewBox="0 0 61 14" fill="none">
                <path d="M0 6.73913H60M60 6.73913L59.3071 6.42883C56.4668 5.15685 53.922 3.3081 51.8343 1V1M60 6.73913L59.648 6.89828C56.5938 8.27934 53.9145 10.3716 51.8343 13V13" stroke="white" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
        
        <ul className="states mt-10 flex-col md:flex-row xl:mt-20 md:mt-12 flex xl:gap-x-16 md:gap-x-8 md:gap-y-0 gap-y-3 md:items-center ">
          <li className='flex gap-x-5 items-center'>
            <div className="number xl:text-5xl md:text-3xl text-white"><span>42</span>K<strong className='text-pink'>+</strong></div>
            <div className="stateTitle xl:text-2xl md:text-xl text-white">Happy <br /> Active users</div>  
          </li>
          <hr className="divider w-[100px] h-[2px] md:h-[50px] md:w-[2px] bg-white/80 border-none"/>
          <li className='flex gap-x-5 items-center'>
            <div className="number xl:text-5xl md:text-3xl text-white"><span>12</span>K<strong className='text-pink'>+</strong></div>
            <div className="stateTitle xl:text-2xl md:text-xl text-white">Year <br /> Experience</div>  
          </li>
        </ul>
      </div>
      <div className="cardGraphics ">
        <figure>
           <img src={FrontImg} alt="card-front" className='z-20 absolute  w-[310px] right-[-110px] bottom-[30px] md:bottom-[auto] xl:top-[50px] md:top-[-10px] xl:right-[-210px] md:right-[-160px] xl:w-[860px] lg:w-[650px] md:w-[530px]' />
          <img src={BackImg} alt="card-front" className='z-10 absolute w-[310px] right-[-70px] bottom-[50px] md:bottom-[auto] xl:top-[-20px] md:top-[-30px] xl:right-[220px] md:right-[0px] xl:w-[860px] lg:w-[650px] md:w-[530px]' />
        </figure>
      </div>
    </section>
  )
}

export default HeroSection