import React from "react";
import "./TopShoes.css";

export default function Shoes({
  title,
  image,
  price,
  discountPrice,
  lifestyle,
  status,
}) {
  const heart = document.querySelectorAll("#heart");
  const love = () => {
    heart.addEventListner("click", () => {
      alert("Click");
    });
  };
  love();
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
          <span className="performance">{lifestyle}</span>
          <span className="new__shoes">{status}</span>
        </div>
      </div>
    </div>
  );
}
