import React from 'react'
import { useRecoilState } from 'recoil'
import { CartArr } from '../../States/Atoms/CartArr';
import Dashboard from '../Dashboard/Dashboard'
import { NavLink } from 'react-router-dom';

export default function CartFooter() {
  const [cart] = useRecoilState(CartArr);
  return (
    <div className="price-cont gap-2 d-flex align-items-end flex-column fw-bolder text-center w-100" >
      <div className="w-100">
        <div className="d-flex justify-content-between align-items-center text-start">
          <div>
            <div>Total</div>
            <div><span className="items-num">2</span> Items</div>
          </div>
          <div className="total-price fs-3">$100</div>
        </div>
        <div className='buttons__b'>
        <NavLink to= '/homedashboard' className="btn btn-primary ">Checkout</NavLink>
        <NavLink to= '/shop' className="btn btn-primary ">Back To Shop</NavLink>
        </div>
      </div>
    </div>
  )
}
