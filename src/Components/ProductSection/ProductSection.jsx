import React from 'react'
import './ProductSection.css'
import ProductCard from '../ProductCard/ProductCard'
export default function ProductSection(props) {
  return (
    <>
    <h1 className='title'> فلاتر منزلية</h1>
    <div className='mainSection'>
        <ProductCard img="/assets/image/3S.jpg" title="فلتر مياه 3 مرحل " price="100" id="13"/>
        <ProductCard img="/assets/image/PicsArt_11-09-07.29.42.jpg" title="فلتر مياه 5 مراحل " price="100" id="14"/>
        <ProductCard img="/assets/image/PicsArt_11-19-06.50.02 (1).jpg" title="فلتر مياه 7 مراحل " price="100" id="15"/>
        <ProductCard img="/assets/image/8stadge.jpg" title="فلتر مياه 8 مراحل " price="100" id="16"/>
    </div>
    <h1 className='title'>محطات تحلية المياه</h1>
    <div className='mainSection'>
        <ProductCard img="/assets/image/treatment.jpg" title="فلتر مياه 3 مرحل " price="100" id="1"/>
        <ProductCard img="/assets/image/6L.jpg" title="فلتر مياه 5 مراحل " price="100" id="2"/>
        <ProductCard img="/assets/image/12L.jpg" title="فلتر مياه 7 مراحل " price="100" id="3"/>
        <ProductCard img="/assets/image/18L.jpg" title="فلتر مياه 8 مراحل " price="100" id="4"/>
        <ProductCard img="/assets/image/24.jpg" title="فلتر مياه 8 مراحل " price="100" id="5"/>
        <ProductCard img="/assets/image/36L.jpg" title="فلتر مياه 8 مراحل " price="100" id="6"/>
        <ProductCard img="/assets/image/50L.jpg" title="فلتر مياه 8 مراحل " price="100" id="7"/>
        <ProductCard img="/assets/image/200L.jpg" title="فلتر مياه 8 مراحل " price="100" id="8"/>
    </div>
    <h1 className='title'>منتجات اخري</h1>
    <div className='mainSection'>
        <ProductCard img="/assets/image/PicsArt_11-07-05.18.43 (1).jpg" title="فلتر مياه 3 مرحل " price="100" id="9"/>
        <ProductCard img="/assets/image/PicsArt_11-19-06.50.02 (1).jpg" title="فلتر مياه 5 مراحل " price="100" id="10"/>
        <ProductCard img="/assets/image/PicsArt_11-09-07.29.42.jpg" title="فلتر مياه 7 مراحل " price="100" id="11"/>
        <ProductCard img="/assets/image/8stadge.jpg" title="فلتر مياه 8 مراحل " price="100" id="12"/>
    </div>
    </>
  )
}
