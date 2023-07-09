import React from "react";
import "./Women.css";
export default function Women() {
  const data = [
    {
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e06c3c13db1d4c3abe47ae9700935a36_9366/Showtheway_2.0_Shoes_Grey_GX1707_01_standard.jpg",
      title: "The formal dress",
      price: 300.0,
    },
    {
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e06c3c13db1d4c3abe47ae9700935a36_9366/Showtheway_2.0_Shoes_Grey_GX1707_01_standard.jpg",
      title: "The formal dress",
      price: 300.0,
    },
    {
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e06c3c13db1d4c3abe47ae9700935a36_9366/Showtheway_2.0_Shoes_Grey_GX1707_01_standard.jpg",
      title: "The formal dress",
      price: 300.0,
    },
    {
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e06c3c13db1d4c3abe47ae9700935a36_9366/Showtheway_2.0_Shoes_Grey_GX1707_01_standard.jpg",
      title: "The formal dress",
      price: 300.0,
    },
  ];

  return (
    <div className="contair">
      <div className="poproducts__contain">
        <img
          className="products__image"
          src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e06c3c13db1d4c3abe47ae9700935a36_9366/Showtheway_2.0_Shoes_Grey_GX1707_01_standard.jpg  "
        />
        <div className="details">
          <span>The formal dress</span>
          <span>$300.00</span>
          <div className="price">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
