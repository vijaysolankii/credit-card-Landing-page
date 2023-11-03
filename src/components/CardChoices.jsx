import React from 'react'
import Vcards from '../images/Vcards.png'

const CardChoices = () => {
  return (
    <section className="cardChoices">
      <div className="container">
        <div className="cardChoices-heading">
          <h2>Unique and Intresting <strong>card choices</strong></h2>
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