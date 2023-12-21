import React, { useEffect, useState } from 'react'
import Popup from '../components/utilities/Popup'
import FrontImg from '../images/frontCards.png'
import BackImg from '../images/backCards.png'
import useIntersectionObserver from '../components/utilities/useIntersectionObserver';


const HeroSection = () => {
  useEffect(() => {
    document.querySelector('.heroSection').classList.add('load')
    return () => {
      document.querySelector('.heroSection').classList.remove('load')
    }
  }, [])
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className={`heroSection ${isVisible ? 'load' : ''}`} ref={ref}>
      <div className="container">
        <span className="heading">
          <span className="slide-up">
            <h1>Simplify All Transections <br/> in <strong>One Card</strong></h1>
          </span>
        </span>
        <p>Hurry up and join now, with this you can manage your daily <br /> finance easily and safely.</p>
        <div>
          <a onClick={togglePopup} className='btn' href="#">
            <span className="squre-1"></span>
            <span className="squre-2"></span>
            <span className='content'>Get Started</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="61" height="14" viewBox="0 0 61 14" fill="none">
                <path d="M0 6.73913H60M60 6.73913L59.3071 6.42883C56.4668 5.15685 53.922 3.3081 51.8343 1V1M60 6.73913L59.648 6.89828C56.5938 8.27934 53.9145 10.3716 51.8343 13V13" stroke="white" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
        
        <ul>
          <li>
            <div className="number"><span>42</span>K<strong>+</strong></div>
            <div className="stateTitle">Happy <br /> Active users</div>  
          </li>
          <hr/>
          <li>
            <div className="number"><span>12</span>K<strong>+</strong></div>
            <div className="stateTitle">Year <br /> Experience</div>  
          </li>
        </ul>
      </div>
      <div className="cardGraphics ">
           <img src={FrontImg} alt="card-front" className='card-front' />
          <img src={BackImg} alt="card-back" className='card-back' />
        <figure>
        </figure>
      </div>
      <Popup isOpen={isPopupOpen} closePopup={togglePopup} />
    </section>
  )
}

export default HeroSection