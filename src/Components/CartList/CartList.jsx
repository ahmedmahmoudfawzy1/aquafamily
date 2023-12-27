import React from 'react'
import { useRecoilState } from 'recoil'
import { CartArr } from '../../States/Atoms/CartArr';
import CartItem from '../../Components/CartItem/CartItem'
export default function CartList() {
  const [ cart ] = useRecoilState(CartArr);

  return (
    <table className="cart w-100">
      <tbody>
        {cart.map(product => {
          return <CartItem product={product} />
        })}
      </tbody>
    </table>
  )
}
