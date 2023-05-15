import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <div className="nav__logo">
          <Link to="/">
            <img
              src="https://img.freepik.com/free-icon/adidas_318-566026.jpg?w=2000"
              alt=""
            />
          </Link>
        </div>
        <div className="nav__items">
          <div className="nav__genders">
            <div className="man">
              <Link to="/Men">
                <span>MEN</span>
              </Link>
            </div>
            <div className="women">
              <Link to="/Women">
                <span>WOMEN</span>
              </Link>
            </div>
            <div className="kids">
              <Link to="/Kids">
                <span>KIDS</span>
              </Link>
            </div>
          </div>

          <div className="nav__cetagory">
            <ul>
              <Link to="/Sport">
                <li>
                  <span>SPORT</span>
                </li>
              </Link>
              <Link to="/Brands">
                <li>
                  <span>BRANDS</span>
                </li>
              </Link>
              <Link to="/Collection">
                <li>
                  <span>COLLECTIONS</span>
                </li>
              </Link>
              <Link to="/Outlet">
                <div className="outlet">
                  <span>OUTLET</span>
                </div>
              </Link>
            </ul>
          </div>

          <div className="right__navItem">
            <div className="search">
              <input type="text" placeholder="Search" />
              <i class="bx bx-search"></i>
            </div>

            <div className="login">
              <i class="bx bx-user"></i>
            </div>

            <div className="wishlist">
              <Link to="/Wishlist">
                <i class="bx bx-heart"></i>
              </Link>
            </div>

            <div className="cart">
              <Link to="/Cart">
                <i class="bx bx-cart-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
