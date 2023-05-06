import React from "react";
import "./Main.css";
import Shoes from "./Shoes";
import { Link } from "react-router-dom";

export default function Main({}) {
  return (
    <div>
      <div className="discount__banner">
        Up to 60% off
        <span>SHOP NOW</span>
        <i class="bx bx-x" id="close"></i>
      </div>
      <div className="banner__two banner__img">
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/2880x1280_tcm209-1021727.jpg"
          alt=""
        />
        <div className="tranding__style">
          <h1>SHOP THE TOP</h1>
          <h1>TRENDING STYLES</h1>
          <div className="shop__now">
            <div>
              <Link to="/Men">
                <a href="#">
                  SHOP MEN
                  <i class="bx bx-right-arrow-alt"></i>
                </a>
              </Link>
            </div>
            <div>
              <Link to="/Women">
                <a href="#">
                  SHOP WOMEN
                  <i class="bx bx-right-arrow-alt"></i>
                </a>
              </Link>
            </div>
            <div>
              <Link to="/Kids">
                <a href="#">
                  SHOP KIDS
                  <i class="bx bx-right-arrow-alt"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__two banner__img">
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/in-ss23-club-originals-hp-mh-d_tcm209-1020356.jpg"
          alt=""
        />
        <div className="club__original">
          <h1>CLUB ORIGINALS</h1>
          <div className="club__des">
            <p>Free-thinkers, culture-makers and originators -</p>
            <p>welcome to Club Originals.</p>
          </div>
          <div className="shop__now">
            <div>
              <Link to="/Lookbook">
                <a href="#">
                  SHOP NOW
                  <i class="bx bx-right-arrow-alt"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="shoes__collection">
        <h1>Still interested?</h1>
      </div>
      <div className="shoes__items">
        <div className="items">
          <Link to="/Item">
            <Shoes
              title="EQ21 Run Shoes"
              image="https://assets.adidas.com/images/w_600,f_auto,q_auto/b15eabcaf6024abea110ad6400f49001_9366/EQ21_Run_Shoes_Purple_GZ4075_01_standard.jpg"
              price="₹7 999.00"
              discountPrice="₹59.50"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
