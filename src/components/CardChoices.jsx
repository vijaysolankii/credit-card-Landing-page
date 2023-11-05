import React from 'react'
import useIntersectionObserver from '../components/utilities/useIntersectionObserver';
import Vcards from '../images/Vcards.png'

const CardChoices = () => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <section className={`cardChoices ${isVisible ? 'load' : ''}`} ref={ref}>
      <div className="container">
        <div className="cardChoices-heading">
          <span className="heading">
            <span className="slide-up">
              <h2>Unique and Intresting <strong>card choices</strong></h2>
            </span>
          </span>
          <p>We Provide card editing feature, where user can edit unique cards according to wishes and preferances of the users themselves</p>
        </div>
        <div className="cardChoices-graphics">
          <figure><img src={Vcards} alt="Vcards" /></figure>
        </div>
      </div>
    </section>
  )
}

export default CardChoices