import React from 'react'
import { useRecoilState } from 'recoil'
import { CartArr } from '../../States/Atoms/CartArr';

export default function CartHeader() {
  const [ cart, setCart ] = useRecoilState(CartArr)

  function removeAll(){
    setCart([]);
  }

  return (
    <div className="cart-header d-flex justify-content-between align-items-center mb-4" >
      <h5 className="fw-bolder">Shopping Cart</h5>
      <span className="remove-all-products" onClick={removeAll}>Remove All</span>
    </div>
  )
}
