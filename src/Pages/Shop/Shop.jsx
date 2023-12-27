import { Container } from "react-bootstrap";
import NavBar from "../../Components/Navbar/Navbar";
import ProductSection from "../../Components/ProductSection/ProductSection";
import "./Shop.css";
import React from "react";

export default function Shop() {
  return (
    <div>
      <NavBar />
      <Container>
        <ProductSection />
      </Container>
    </div>
  );
}
