import React from 'react'
import Vcards from '../images/Vcards.png'

const CardChoices = () => {
  return (
    <section className="cardChoices bg-white md:pt-[70px] pt-[120px] pt-[40px]">
      <div className="container mx-auto py-5">
        <div className="cardChoices-heading text-center">
          <h2 className='text-dark xl:text-h2 md:text-h3 text-h5 xl:mb-16 md:mb-10 mb-8  w-10/12 leading-[38px] xl:w-8/12 lg:w-7/12 md:w-9/12 md:leading-[1.2] xl:leading-12 mx-auto'>Unique and Intresting <strong className='text-pink'>card choices</strong></h2>
          <p className='text-dark xl:text-2xl md:text-xl md:w-8/12 w-full md:px-0 px-5 mx-auto xl:mb-[-50px] md:mb-[-15px]'>We Provide card editing feature, where user can edit unique cards according to wishes and preferances of the users themselves</p>
        </div>
        <div className="cardChoices-graphics">
          <figure><img src={Vcards} alt="Vcards"  className='xl:w-full md:w-9/12 w-9/12 mx-auto' /></figure>
        </div>
      </div>
    </section>
  )
}

export default CardChoices