import React from "react";
import "./ProductCard.css";
import { Button, Card } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { CartArr } from "../../States/Atoms/CartArr";

export default function ProductCard(props) {
  const [cart, setCart] = useRecoilState(CartArr);


  function handelAddToCart() {
    setCart((prev) => {
      if (prev.find((ele) => ele.id === props.id)) {
        return prev;
      } else {
        return [...prev, props];
      }
    });
  }

  return (
    <div>
      <Card style={{ width: "16rem" }} className="card">
        <Card.Img variant="top" src={props.img} alt="" className="productImg" />
        <Card.Body>
          <Card.Title className="">{props.title}</Card.Title>
          <Card.Text className="">{props.price} EGP</Card.Text>
          <Button variant="primary" onClick={handelAddToCart}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
