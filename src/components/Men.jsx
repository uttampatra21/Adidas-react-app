import React from "react";
import "./Men.css";
import { Link } from "react-router-dom";
export default function Men() {
  return (
    <div className="men">
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
      <div className="men__options">
        <div className="men__collections_item">
          {/* <a className="relative" href="#"> */}
          <img
            width="200"
            src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b6510edd6ff7495fbf3caf6300f51ec0_9366/courtbeat-court-lifestyle-shoes.jpg"
            alt=""
          />
          <a href="#">
            <strong>SNEAKERS</strong>
          </a>
          {/* </a> */}
        </div>
        <div className="men__collections_item">
          <img
            src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/1e1e112f63ef41339e61aec900b4de67_9366/adicolor-neuclassics-track-pants.jpg"
            alt=""
          />
          <a href="#">
            <strong>PANTS</strong>
          </a>
        </div>
        <div className="men__collections_item">
          <img
            src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/e7ec5ac5b258424c9202afa801034615_9366/indigo-herz-fur-hoodie.jpg"
            alt=""
          />
          <a href="#">
            <strong>HOODIES & SWEATSHIRTS</strong>
          </a>
        </div>
        <div className="men__collections_item">
          <img
            src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/ae88674cbb8b479eaea3ae8600fa0de4_9366/disney-graphic-tee.jpg"
            alt=""
          />
          <a href="#">
            <strong>TOPS</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
