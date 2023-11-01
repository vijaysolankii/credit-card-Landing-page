import React from 'react'

import Lock from '../images/lock.svg'
import DollarCircle from '../images/dollar-circle.svg'
import CloudAdd from '../images/cloud-add.svg'
// lock.svg,dollar-circle.svg

export let data = [
  {
    id:1,
    img:DollarCircle,
    caption: "free transaction fee"
  },
  {
    id:2,
    img:CloudAdd,
    caption: "Easy to access anytime and anywhere"
  },
  {
    id:3,
    img:Lock,
    caption: "Gurenteed Safety"
  }
]

const PaymentSection = () => {
  
  return (
    <section className="payments">
      <div className="container mx-auto px-5">
        <div className="payments-heading">
          <h2>The Best Payment service for <strong>your transactions</strong></h2>
          <p>The followings are services too provide to users, with service we maximize it is hoped that users are statisfied with what we provide</p>
        </div>
        <div className="payments-services item-center">
          {
            data && data.map((item,index) => (
              <div key={index} className="payments-services-block">
                <figure>
                  <img src={item.img} alt={item.caption} />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              </div>    
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default PaymentSection