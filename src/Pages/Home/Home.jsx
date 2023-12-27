import "./Home.css";
import React from "react";
import NavBar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import CategoriesSection from "../../Components/CategoriesSection/CategoriesSection";
import Dlivery from "../../Components/Delivery/Dlivery";
import Sliderproducts from "../../Components/SliderProducts/Sliderproducts";
import Footer from "../../Components/Footer/Footer";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Slider />
      <CategoriesSection />
      <Dlivery />
      <Sliderproducts />
      <Sliderproducts />
      <Footer />
    </div>
  );
}
