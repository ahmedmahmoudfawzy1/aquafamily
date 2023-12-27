import "animate.css";
import "wowjs"
import "./Cart.css";
import NavBar from "../../Components/Navbar/Navbar";

import React, { Fragment } from "react";
import CartHeader from '../../Components/CartHeader/CartHeader'
import CartList from '../../Components/CartList/CartList'
import CartFooter from '../../Components/CartFooter/CartFooter'
import { useRecoilState } from "recoil";
import { CartArr } from "../../States/Atoms/CartArr";
export default function Cart() {
  const [cart] = useRecoilState(CartArr);

  return (
    <>
    <NavBar />
    <div className="cart-cont container mt-5">
      
      {cart.length === 0 ? (
        <h2 className="fw-bolder text-center">No products in cart</h2>
      ) : (
        <Fragment>
          <CartHeader />
          <CartList />
          <CartFooter />
        </Fragment>
      )}
    </div>
    </>
  );
}
