import React from 'react'
import './Delivery.css'
import { Container } from 'react-bootstrap'
export default function Dlivery() {
  return (
    <Container>
    <div className='main'>
        <div className="one">
            <p>التوصيل والارجاع مجانا </p>
            <img src="/assets/image/icon-free-shipping.png" alt="" />
        </div>
        <div className="two">
            <p>الدفع عند الاستلام </p>
            <img src="/assets/image/icon-money.png" alt="" />
        </div>
        <div className="three">
            <p>شحن سريع</p>
            <img src="/assets/image/icon-delivery.png" alt="" />
        </div>
        <div className="four">
            <p>متابعه دوريه للصيانه</p>
            <img src="/assets/image/syana_2.png" alt="" width={40}/>
        </div>
    </div>
    </Container>
  )
}
