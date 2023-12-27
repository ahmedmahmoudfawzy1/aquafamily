import React from 'react'
import { useRecoilState } from 'recoil'
import { CartArr } from '../../States/Atoms/CartArr';

export default function CartItem( {product} ) {
  const [ cart, setCart ] = useRecoilState(CartArr)

  function removeFromCart(){
    setCart(prev => {
      return prev.filter(ele => ele.id !== product.id);
    })
  }

  function increment(){
    setCart(prev => {
      const obj = prev.find(ele => ele.id === product.id);
      const idx = prev.indexOf(obj)
      const newArr = [...prev];
      const newObj = {...obj};
      newObj.quantity++;
      newArr[idx] = newObj;

      return newArr;
    })
  }

  function decrement(){
    setCart(prev => {
      const obj = prev.find(ele => ele.id === product.id);
      if(obj.quantity === 1) return prev;
      
      const idx = prev.indexOf(obj)
      const newArr = [...prev];
      const newObj = {...obj};
      newObj.quantity--;
      newArr[idx] = newObj;

      return newArr;
    })
  }

  return (
    <tr className="cart-product">
      <td>
        <div className="d-flex gap-3 align-items-center">
          <img className="cart-product-img" src={product.img}  alt=''/>
          <h5>{product.title}</h5>
        </div>
      </td>

      <td>
        <div className="cart-product-amount">
          <span className="change-amount change-amount-inc" onClick={increment}>+</span>
          <span className="quantity">{product.quantity}</span>
          <span className="change-amount change-amount-dec" onClick={decrement}>-</span>
        </div>
      </td>

      <td>
        <div className="mb-2 d-flex flex-column text-end justify-content-end align-items-end">
          <span className="fw-bolder fs-4">${product.price}</span>
          <span className="remove-product" onClick={removeFromCart}> Remove </span>
        </div>
      </td>
    </tr>
  )
}
