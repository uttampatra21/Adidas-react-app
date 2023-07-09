import React from "react";
import "./Main.css";
import Shoes from "./Shoes";
import TopShoes from "./MediamItems";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Main({}) {
  const close = () => {
    console.log("close");
    const discount__banner =
      document.getElementsByClassName("discount__banner");
    discount__banner.style.display = "none";
  };
  return (
    <div>
      <div className="discount__banner">
        Up to 60% off
        <Link to="/Outlet">
          <span>SHOP NOW</span>
        </Link>
        <i class="bx bx-x" id="close" onClick={close}></i>
      </div>
      {/* ===================== */}
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
      {/* ===================== */}
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
      {/* ===================== */}
      <div className="shoes__collection">
        <h1>Still interested?</h1>
      </div>
      {/* ===================== */}
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
      {/* ===================== */}
      <div className="shoe_collection__cetagory">
        <div className="shoes__collection">
          <h1>Now popular in women's</h1>
        </div>
        <div className="shoe_collection__cetagory__list">
          <div className="shoes__items">
            <h1>shoes</h1>
          </div>
          <div className="running__shoes">
            <h1>running shoes</h1>
          </div>
          <div className="ultra__boost">
            <h1>ultraboost</h1>
          </div>
          <div className="sneaker">
            <h1>ultraboost</h1>
          </div>
          <div className="gazelle">
            <h1>ultraboost</h1>
          </div>
          <div className="stan__smith">
            <h1>ultraboost</h1>
          </div>
        </div>
      </div>
      {/* ===================== */}
      <div className="gender__shopping">
        <div className="shoes__collection">
          <h1>WHO ARE YOU SHOPPING FOR?</h1>
        </div>
        <div className="gender__category">
          <div className="men__banner">
            <Link to="/Men">
              <img
                width="400"
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/Visual_nav_tiles_March_2023_Mobile_800x900px_1-MENS_DUAL_tcm209-1008384.jpg"
              />
            </Link>
            <h3>MEN</h3>
          </div>
          <div className="women__banner">
            <Link to="/Women">
              <img
                width="400"
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/Visual_nav_tiles_March_2023_Mobile_800x900px_2-WOMENS_DUAL_tcm209-1008385.jpg"
              />
            </Link>
            <h3>WOMEN</h3>
          </div>
          <div className="kids__banner">
            <Link to="/Kids">
              <img
                width="400"
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/Visual_nav_tiles_March_2023_Mobile_800x900px_3-KIDS_DUAL_tcm209-1008383.jpg"
              />
            </Link>
            <h3>KIDS</h3>
          </div>
        </div>
      </div>
      {/* ===================== */}
      <div className="women__arival">
        <div className="womenArival__title">
          <h1>
            <i class="bx bx-arrow-back"></i>
            New Arrivals Women
          </h1>
        </div>
        <div className="shoe__slider">
          <TopShoes
            title="Adilette Adventure Sandals"
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/bedc017e8b044a74ad7dafb200eca184_9366/Adilette_Adventure_Sandals_Orange_IE7726_01_standard.jpg"
            price="₹7 999.00"
            discountPrice="₹172.00"
          />
          <TopShoes
            title="Gazelle Shoes"
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/b15eabcaf6024abea110ad6400f49001_9366/EQ21_Run_Shoes_Purple_GZ4075_01_standard.jpg"
            price="₹6 999.00"
            discountPrice="₹132.00"
          />
          <TopShoes
            title="Gazelle Shoes"
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/a55a3a3158db438ea267af550019b361_9366/Gazelle_Shoes_Yellow_IE5138_01_standard.jpg"
            price="₹9 999.00"
            discountPrice="₹122.00"
          />
          <TopShoes
            title="Forum Millencon Shoes"
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/3eb1465008d443888c36af7300b22cee_9366/Forum_Millencon_Shoes_Black_HQ8939_HM1.jpg"
            price="₹9 999.00"
            discountPrice="₹182.00"
          />
          <TopShoes
            title="Campus 00s Shoes"
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/1df2b221426e427bbe55af9c012e96db_9366/Campus_00s_Shoes_Green_HQ4409_01_standard.jpg"
            price="₹9 999.00"
            discountPrice="₹192.00"
          />
          <TopShoes
            title="Campus 00s Shoes"
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/11361aa73d114e8f9396afaa00e542a2_9366/Campus_00s_Shoes_Black_HP6396_01_standard.jpg"
            price="₹9 999.00"
            discountPrice="₹162.00"
          />
          <TopShoes
            title="Campus 80 Crop Shoes"
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/0ee111456ff84e7f9088aea70105a00b_9366/Campus_80_Crop_Shoes_Grey_H03540_01_standard.jpg"
            price="₹9 999.00"
            discountPrice="₹162.00"
          />
        </div>
      </div>
      {/* ===================== */}
      <div className="whats__hot">
        <h1>WHAT'S HOT</h1>
        <div className="hot__containers">
          <div class="container___1cZjP ">
            <video
              loop
              autoplay
              playsinline
              src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/enIN/in-ss23-mothersday-raffle-hp-tc-d.mp4"
            ></video>
            <div className="hot__des">
              <h4>WIN A ₹8500 MOTHER'S DAY GIFT CARD</h4>
              <p>Make it her lucky day!</p>
              <a href="#">
                <strong> ENTER NOW</strong>
              </a>
            </div>
          </div>
          <div class="container___1cZjP ">
            <video
              loop
              autoplay
              playsinline
              src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/global%20brand%20publishing/Originals/Indigo%20Herz/ss23-indigo-herz-launch-hp-tc-d.mp4"
            ></video>
            <div className="hot__des">
              <h4>From metaverse to irl</h4>
              <p>
                Made for and worn by our community. The Indigo Herz drop
                inspired by adidas’ Bored Ape is here.
              </p>
              <a href="#">
                <strong> ENTER NOW</strong>
              </a>
            </div>
          </div>
          <div class="container___1cZjP ">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/in-ss23-marathon-teaser_tcm209-1015011.png"
              alt=""
            />
            <div className="hot__des">
              <h4>BE RACE READY WITH ADIZERO</h4>
              <p>FOR BENGALURU 10K</p>
              <a href="#">
                <strong> ENTER NOW</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== */}
      <div className="best__seller">
        <h1>BESTSELLERS</h1>
        <div className="shoe__slider">
          <TopShoes
            image="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb787ff1b5984ae29037ac5a0159bdd9_9366/H01878_01_standard.jpg"
            title="Samba Vegan Shoes"
            price="₹9 999.00"
            discountPrice="₹219.00"
            lifestyle="Originals"
          />
          <TopShoes
            image="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/EG4958_01_standard.jpg"
            title="SUPERSTAR SHOES"
            price="₹9 999.00"
            discountPrice="₹119.00"
            lifestyle="Originals"
          />
          <TopShoes
            image="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/923bec57082443e39f92ad6e00cbed3d_9366/GZ5896_01_standard.jpg"
            title="Adilette Comfort Slides"
            price="₹3 999.00"
            discountPrice="₹209.00"
            lifestyle="Sportswear"
          />
          <TopShoes
            image="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/F35543_01_standard.jpg"
            title="Adilette Aqua Slides"
            price="₹3 999.00"
            discountPrice="₹209.00"
            lifestyle="Sportswear"
          />

          <TopShoes
            image="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/c10fcd90c433455e8f79ad0800cb4469_9366/GZ9257_01_standard.jpg"
            title="NMD_R1 Primeblue Shoes"
            price="₹3 999.00"
            discountPrice="₹209.00"
            lifestyle="Originals"
          />
        </div>
      </div>
      {/* ===================== */}
      <div className="main__des">
        <div className="main__desBox">
          <div className="main__desh1">
            <h1>STORIES, STYLES AND</h1>
            <h1>SPORTSWEAR AT</h1>
            <h1>AT ADIDAS, SINCE 1949</h1>
          </div>
          <p className="main__des__det">
            Sport keeps us fit. Keeps you mindful. Brings us together. Through
            sport we have the power to change lives. Whether it is through
            stories of inspiring athletes. Helping you to get up and get moving.
            Sportswear featuring the latest technologies, to up your
            performance. Beat your PB. adidas offers a home to the runner, the
            basketball player, the soccer kid, the fitness enthusiast. The
            weekend hiker that loves to escape the city. The yoga teacher that
            spreads the moves. The 3-Stripes are seen in the music scene. On
            stage, at festivals. Our sports clothing keeps you focused before
            that whistle blows. During the race. And at the finish lines. We’re
            here to support creators. Improve their game. Their lives. And
            change the world.
          </p>
          <p className="main__des__det">
            adidas is about more than sportswear and workout clothes. We partner
            with the best in the industry to co-create. This way we offer our
            fans the sports apparel and style that match their athletic needs,
            while keeping sustainability in mind. We’re here to support
            creators. Improve their game. Create change. And we think about the
            impact we have on our world.
          </p>
        </div>
        <div className="main__desBox">
          <div className="main__desh1">
            <h1>WORKOUT CLOTHES,</h1>
            <h1>FOR ANY SPORT</h1>
          </div>
          <p className="main__des__det">
            adidas designs for and with athletes of all kinds. Creators, who
            love to change the game. Challenge conventions. Break the rules and
            define new ones. Then break them again. We supply teams and
            individuals with athletic clothing pre-match. To stay focussed. We
            design sports apparel that get you to the finish line. To win the
            match. We support women, with bras and tights made for purpose. From
            low to high support. Maximum comfort. We design, innovate and
            itterate. Testing new technologies in action. On the pitch, the
            tracks, the court, the pool. Retro workout clothes inspire new
            streetwear essentials. Like NMD, Ozweego and our Firebird
            tracksuits. Classic sports models are brought back to life. Like
            Stan Smith. And Superstar. Now seen on the streets and the stages.
          </p>
          <p className="main__des__det">
            Through our collections we blur the borders between high fashion and
            high performance. Like our adidas by Stella McCartney athletic
            clothing collection – designed to look the part inside and outside
            of the gym. Or some of our adidas Originals lifestyle pieces, that
            can be worn as sportswear too. Our lives are constantly changing.
            Becoming more and more versatile. And adidas designs with that in
            mind.
          </p>
        </div>
      </div>
      {/* ===================== */}
      <Footer />
    </div>
  );
}
