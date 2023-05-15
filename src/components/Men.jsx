import React from "react";
import "./Men.css";
import MidItem from "./MediamItems";
import TopShoes from "./MediamItems";
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
      {/* ================== */}
      <div className="men__options">
        <div className="men__collections_item">
          <a className="relative col" href="#">
            <img
              width="200"
              src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b6510edd6ff7495fbf3caf6300f51ec0_9366/courtbeat-court-lifestyle-shoes.jpg"
              alt=""
            />
            <a className="absolute" href="#">
              <strong>SNEAKERS</strong>
            </a>
          </a>
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
      {/* =================== */}
      <div className="men__original">
        <h1>MEN ORIGINALS</h1>
        <div className="men__slider">
          <TopShoes
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/6817f59fa4ed4ab3acc96bf4ed8ab864_9366/Adicolor_70s_Monogram_Track_Pants_Black_IP6985_HM1.jpg"
            title="Adicolor 70s Monogram Track Pants"
            price="₹2 209.00"
            discountPrice="₹59.50"
            lifestyle="Men Lifestyle"
            status="new"
          />
          <TopShoes
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/6817f59fa4ed4ab3acc96bf4ed8ab864_9366/Adicolor_70s_Monogram_Track_Pants_Black_IP6985_HM1.jpg"
            title="Adicolor 70s Monogram Track Pants"
            price="₹2 209.00"
            discountPrice="₹59.50"
            lifestyle="Men Lifestyle"
            status="new"
          />
          <TopShoes
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/6817f59fa4ed4ab3acc96bf4ed8ab864_9366/Adicolor_70s_Monogram_Track_Pants_Black_IP6985_HM1.jpg"
            title="Adicolor 70s Monogram Track Pants"
            price="₹2 209.00"
            discountPrice="₹59.50"
            lifestyle="Men Lifestyle"
            status="new"
          />
          <TopShoes
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/6817f59fa4ed4ab3acc96bf4ed8ab864_9366/Adicolor_70s_Monogram_Track_Pants_Black_IP6985_HM1.jpg"
            title="Adicolor 70s Monogram Track Pants"
            price="₹2 209.00"
            discountPrice="₹59.50"
            lifestyle="Men Lifestyle"
            status="new"
          />
          <TopShoes
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/6817f59fa4ed4ab3acc96bf4ed8ab864_9366/Adicolor_70s_Monogram_Track_Pants_Black_IP6985_HM1.jpg"
            title="Adicolor 70s Monogram Track Pants"
            price="₹2 209.00"
            discountPrice="₹59.50"
            lifestyle="Men Lifestyle"
            status="new"
          />
          <TopShoes
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/6817f59fa4ed4ab3acc96bf4ed8ab864_9366/Adicolor_70s_Monogram_Track_Pants_Black_IP6985_HM1.jpg"
            title="Adicolor 70s Monogram Track Pants"
            price="₹2 209.00"
            discountPrice="₹59.50"
            lifestyle="Men Lifestyle"
            status="new"
          />
        </div>
      </div>
      {/* =================== */}
      <div className="esentials">
        <h1>ESSENTIALS</h1>
        <div className="esentials__slider">
          <div className="esentail__container">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/in-ss23-adimatic-hp-c-image_tcm209-1023154.jpg"
              alt=""
            />
            <div className="esentail__container__details">
              <h4>ADDIDAS X GUCCI</h4>
              <p>
                Sartorial streetwear meets sports heritage as
                <br /> footwear icons of adidas and Gucci unite.
              </p>
              <p>Shop the collection now.</p>
              <a href="#">
                <strong>SHOP NOW</strong>
              </a>
            </div>
          </div>
          <div className="esentail__container">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/ss23-gucci-launch-non-confirmed-glp-m-tc-d_tcm209-1008673.jpg"
              alt=""
            />
            <div className="esentail__container__details">
              <h4>ADDIDAS X GUCCI</h4>
              <p>
                Sartorial streetwear meets sports heritage as
                <br /> footwear icons of adidas and Gucci unite.
              </p>
              <p>Shop the collection now.</p>
              <a href="#">
                <strong>SHOP NOW</strong>
              </a>
            </div>
          </div>
          <div className="esentail__container">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/in-ss23-marathon-teaser_tcm209-1015011.png"
              alt=""
            />
            <div className="esentail__container__details">
              <h4>ADDIDAS X GUCCI</h4>
              <p>
                Sartorial streetwear meets sports heritage as
                <br /> footwear icons of adidas and Gucci unite.
              </p>
              <p>Shop the collection now.</p>
              <a href="#">
                <strong>SHOP NOW</strong>
              </a>
            </div>
          </div>
          <div className="esentail__container">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/football-ss23-heatspawn-dotcom-glp-teaser-carousel-d_tcm209-1006650.jpg"
              alt=""
            />
            <div className="esentail__container__details">
              <h4>ADDIDAS X GUCCI</h4>
              <p>
                Sartorial streetwear meets sports heritage as
                <br /> footwear icons of adidas and Gucci unite.
              </p>
              <p>Shop the collection now.</p>
              <a href="#">
                <strong>SHOP NOW</strong>
              </a>
            </div>
          </div>
          <div className="esentail__container">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/ss23-gucci-launch-non-confirmed-hp-tc-d_tcm209-1008683.jpg"
              alt=""
            />
            <div className="esentail__container__details">
              <h4>ADDIDAS X GUCCI</h4>
              <p>
                Sartorial streetwear meets sports heritage as
                <br /> footwear icons of adidas and Gucci unite.
              </p>
              <p>Shop the collection now.</p>
              <a href="#">
                <strong>SHOP NOW</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* =================== */}
      <div className="best__of__addidas">
        <h1>BEST OF ADIDAS</h1>
        <div className="shoe__slider">
          <MidItem
            image="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/EG4958_01_standard.jpg"
            title="SUPERSTAR SHOES"
            price="₹3 999.00"
            discountPrice="₹39.00"
            lifestyle="Originals"
          />
        </div>
      </div>
    </div>
  );
}
