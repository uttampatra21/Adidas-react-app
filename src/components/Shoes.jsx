import React from "react";
import "./Shoes.css";
import { Link } from "react-router-dom";

export default function Shoes({ title, image, price, discountPrice }) {
  return (
    <div>
      <div className="shoes__item">
        <div className="shoe__img">
          <img src={image} alt="" />
          <div className="wishlist ">
            <i class="bx bx-heart"></i>
          </div>
          <div className="shoe__price">
            <span className="original__price">{price}</span>
            <strong className="discount__price">{discountPrice}</strong>
          </div>
        </div>
        <div className="shoe__description">
          <span className="shoe__title">{title}</span>
          <span className="performance">Performance</span>
        </div>
      </div>
    </div>
  );
}
