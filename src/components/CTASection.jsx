import React from "react";
import DiamondLeft from '../images/Diamond-left.png'
import DiamondRight from '../images/Diamond-right.png'

const CTASection = () => {
  return (
    <section className="CTA py-[70px] relative lg:py-[200px] md:py-[150px] bg-dark">
      <div className="container mx-auto text-center z-50 relative">
          <h2 className="text-h4 mb-4 xl:text-h1 lg:text-h2 md:text-h3  leading text-white font-semibold xl:mb-16 md:mb-8">Let's start <strong className="text-dark">customizing</strong> your <br /> card now</h2>
          <div className='inline-block relative'>
          <a className='btn flex items-center md:scale-[1.3] lg:scale-[1.8] lg:translate-x-[00px] md:translate-x-[25px]' href="#">
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
      </div>
      <div className="CTA-Inner-overlay h-full absolute w-full inset-0 skew-y-3 bg-dark-light/30 backdrop-filter backdrop-blur-[20px] z-20"></div>
      <div className="CTA-Inner-overlay h-full absolute w-full inset-0 bg-pink -skew-y-3 bg-pink  -skew-y-3 z-10">
        <img className="absolute top-0 w-full h-full left-0" src={DiamondLeft} alt="DiamondLeft" />
        <img className="absolute top-0 w-full h-full right-0" src={DiamondRight} alt="DiamondRight" />
      </div>
      
    </section>
  );
};

export default CTASection;
