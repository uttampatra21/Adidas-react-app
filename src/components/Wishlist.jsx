import React from "react";
import "./Wishlish.css";
export default function Wishlist({
  title,
  image,
  price,
  discountPrice,
  lifestyle,
  status,
}) {
  return (
    <div className="wish__list">
      <h1>MY WISHLIST</h1>
      <span id="wish__item">11 ITEM</span>

      <div className="wshoes__item wishlist__items">
        <div className="wshoe__img">
          <img
            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c657d35fb4154102a318af390083945d_9366/Supernova_2.0_Shoes_Grey_HR0104_01_standard.jpg"
            alt=""
          />
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
          <span className="performance">{lifestyle}</span>
          <span className="new__shoes">{status}</span>
        </div>
      </div>
    </div>
  );
}
