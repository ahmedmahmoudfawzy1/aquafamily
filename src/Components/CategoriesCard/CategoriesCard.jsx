import React from "react";
import {  Card } from "react-bootstrap";
import "./CategoriesCard.css";



export default function CategoriesCard(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="card shadow p-3 mb-5 bg-blue rounded">
        <Card.Img variant="top" src={props.img} className="image"/>
        <Card.Body>
          <Card.Title className="text-primary">{props.title}</Card.Title>
          <Card.Text className="text-secondary ">{props.description}</Card.Text>
          {/* <Button variant="primary">المزيد . . .</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}
