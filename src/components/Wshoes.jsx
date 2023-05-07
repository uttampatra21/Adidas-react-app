import React from "react";
import "./Wshoes.css";

export default function Shoes({ title, image, price, discountPrice }) {
  return (
    <div>
      <div className="wshoes__item">
        <div className="wshoe__img">
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
          <span className="performance">Women Lifestyle</span>
          <span className="new__shoes">new</span>
        </div>
      </div>
    </div>
  );
}
