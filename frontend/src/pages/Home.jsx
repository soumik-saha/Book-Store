/* eslint-disable no-unused-vars */
import React from "react";
import img1 from '../components/Dashboard/Customer/img/language.png';
import img2 from '../components/Dashboard/Customer/img/banner/banner-1.jpg';
import img3 from '../components/Dashboard/Customer/img/banner/banner-2.jpg';
import img4 from '../components/Dashboard/Customer/img/latest-product/lp-1.jpg';
import img5 from '../components/Dashboard/Customer/img/latest-product/lp-2.jpg';
import img6 from '../components/Dashboard/Customer/img/latest-product/lp-3.jpg';
import img7 from '../components/Dashboard/Customer/img/blog/blog-1.jpg';
import img8 from '../components/Dashboard/Customer/img/blog/blog-2.jpg';
import img9 from '../components/Dashboard/Customer/img/blog/blog-3.jpg';
import img10 from '../components/Dashboard/Customer/img/payment-item.png';

class CustomerDashboard extends React.Component {
  render() {
    return (
      <div className="MainDiv">
        <div className="humberger__menu__overlay"></div>
        <div className="humberger__menu__wrapper">
          <div className="humberger__menu__logo">
            <a href="#" className="logo">
              StoryTellers
            </a>
          </div>
          <div className="humberger__menu__cart">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-heart"></i> <span>1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-shopping-bag"></i> <span>3</span>
                </a>
              </li>
            </ul>
            <div className="header__cart__price">
              item: <span>₹350.00</span>
            </div>
          </div>
          <div className="humberger__menu__widget">
            <div className="header__top__right__language">
              <img src={img1} alt="" />
              <div>English</div>
              <span className="arrow_carrot-down"></span>
              <ul>
                <li>
                  <a href="#">Spanish</a>
                </li>
                <li>
                  <a href="#">English</a>
                </li>
              </ul>
            </div>
            <div className="header__top__right__auth">
              <a href="/#">
                <i className="fa fa-sign-in"></i> Login
              </a>
            </div>
          </div>
          <nav className="humberger__menu__nav mobile-menu">
            <ul>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="header__menu__dropdown">
                  <li>
                    <a href="#">Shop Details</a>
                  </li>
                  <li>
                    <a href="#">Shoping Cart</a>
                  </li>
                  <li>
                    <a href="#">Check Out</a>
                  </li>
                  {/* <li>
                    <a href="#">Blog Details</a>
                  </li> */}
                </ul>
              </li>
              {/* <li>
                <a href="#">Blog</a>
              </li> */}
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
          <div className="header__top__right__social">
            <a href="https://www.facebook.com/soumikisonline/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/soumikisonline">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/soumikisonline/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://in.pinterest.com/">
              <i className="fa fa-pinterest-p"></i>
            </a>
          </div>
          <div className="humberger__menu__contact">
            <ul>
              <li>
                <i className="fa fa-envelope"></i> storytellers@gmail.com
              </li>
              <li>Free Shipping for all Order of ₹199</li>
            </ul>
          </div>
        </div>

        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__left">
                    <ul>
                      <li>
                        <i className="fa fa-envelope"></i>{" "}
                        storytellers@gmail.com
                      </li>
                      <li>Free Shipping for all Order of ₹199</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__right">
                    <div className="header__top__right__social">
                      <a href="https://www.facebook.com/soumikisonline/">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="https://twitter.com/soumikisonline">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/soumikisonline/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="https://in.pinterest.com/">
                        <i className="fa fa-pinterest-p"></i>
                      </a>
                    </div>
                    <div className="header__top__right__language">
                      <img src={img1} alt="" />
                      <div>English</div>
                      <span className="arrow_carrot-down"></span>
                      <ul>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                        <li>
                          <a href="#">English</a>
                        </li>
                      </ul>
                    </div>
                    <div className="header__top__right__auth">
                      <a href="/register">
                        <i className="fa fa-user"></i> Register
                      </a>
                      <a href="/login">
                        <i className="fa fa-sign-in"></i> Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                  <a href="#" className="logo">
                    StoryTellers
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <nav className="header__menu">
                  <ul>
                    <li className="active">
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Shop</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="header__menu__dropdown">
                        <li>
                          <a href="#">Shop Details</a>
                        </li>
                        <li>
                          <a href="#">Shoping Cart</a>
                        </li>
                        <li>
                          <a href="#">Check Out</a>
                        </li>
                        {/* <li>
                          <a href="#">Blog Details</a>
                        </li> */}
                      </ul>
                    </li>
                    {/* <li>
                      <a href="#">Blog</a>
                    </li> */}
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i> <span>1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-bag"></i> <span>3</span>
                      </a>
                    </li>
                  </ul>
                  <div className="header__cart__price">
                    item: <span>₹350.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </header>

        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="hero__categories">
                  <div className="hero__categories__all">
                    <i className="fa fa-bars"></i>
                    <span>All Genres</span>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Action and Adventure</a>
                    </li>
                    <li>
                      <a href="#">Classics</a>
                    </li>
                    <li>
                      <a href="#">Comic Book or Graphic Novel</a>
                    </li>
                    <li>
                      <a href="#">Detective and Mystery</a>
                    </li>
                    <li>
                      <a href="#">Fantasy</a>
                    </li>
                    <li>
                      <a href="#">Horror</a>
                    </li>
                    <li>
                      <a href="#">Literary Fiction</a>
                    </li>
                    <li>
                      <a href="#">Romance</a>
                    </li>
                    <li>
                      <a href="#">Science Fiction (Sci-Fi)</a>
                    </li>
                    <li>
                      <a href="#">Short Stories</a>
                    </li>
                    <li>
                      <a href="#">Self-Help</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="hero__search">
                  <div className="hero__search__form">
                    <form action="#">
                      <div className="hero__search__categories">
                        All Categories
                        <span className="arrow_carrot-down"></span>
                      </div>
                      <input type="text" placeholder="What do you need?" />
                      <button type="submit" className="site-btn">
                        SEARCH
                      </button>
                    </form>
                  </div>
                  <div className="hero__search__phone">
                    <div className="hero__search__phone__icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="hero__search__phone__text">
                      <h5>+91 12345 67890</h5>
                      <span>Get Support 24*7 Time</span>
                    </div>
                  </div>
                </div>
                <div
                  className="hero__item set-bg"
                  style={{ backgroundImage: 'url("https://jamesclear.com/wp-content/uploads/2020/11/atomic-habits_gallery_hi-res_01.jpg")' }}
                  // data-setbg="assets/img/hero/banner.jpg"
                >
                  <div className="hero__text">
                    <span>ATOMIC HABITS</span>
                    <h2>
                      Self-Improvement <br />
                      30% Off*
                    </h2>
                    <p>Free Pickup and Delivery Available</p>
                    <a href="#" className="primary-btn">
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="categories">
          <div className="container">
            <div className="row">
              <div className="categories__slider owl-carousel">
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    style={{ backgroundImage: 'url("https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg")' }}
                    // style={{ backgroundImage: 'url("https://m.media-amazon.com/images/I/41E40Pl6OeL._SX300_SY300_QL70_FMwebp_.jpg")' }}
                    // data-setbg="assets/img/categories/cat-1.jpg"
                  >
                    <h5>
                      <a href="#">Fresh Fruit</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    style={{ backgroundImage: 'url("https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg")' }}
                    // data-setbg="assets/img/categories/cat-2.jpg"
                  >
                    <h5>
                      <a href="#">Dried Fruit</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    style={{ backgroundImage: 'url("https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg")' }}
                    // data-setbg="assets/img/categories/cat-3.jpg"
                  >
                    <h5>
                      <a href="#">Vegetables</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    style={{ backgroundImage: 'url("https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg")' }}
                    // data-setbg="assets/img/categories/cat-4.jpg"
                  >
                    <h5>
                      <a href="#">drink fruits</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    style={{ backgroundImage: 'url("https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg")' }}
                    // data-setbg="assets/img/categories/cat-5.jpg"
                  >
                    <h5>
                      <a href="#">drink fruits</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Featured Books</h2>
                </div>
                <div className="featured__controls">
                  <ul>
                    <li className="active" data-filter="*">
                      All
                    </li>
                    <li data-filter=".oranges">Romance</li>
                    <li data-filter=".fresh-meat">Horror</li>
                    <li data-filter=".vegetables">Funny</li>
                    <li data-filter=".fastfood">Thriller</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <div className="featured__item">
                  <div
                    className="featured__item__pic set-bg"
                    style={{ backgroundImage: 'url("https://uploads-ssl.webflow.com/60897cff2729363a04b4a886/61ef99436fdccff02c68df8c_LANDSCAPE%20(1)-p-800.jpeg")' }}
                    // data-setbg="assets/img/featured/feature-1.jpg"
                  >
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">The Power of Your Subconscious Mind</a>
                    </h6>
                    <h5>₹99.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                <div className="featured__item">
                  <div
                    className="featured__item__pic set-bg"
                    style={{ backgroundImage: 'url("https://media.licdn.com/dms/image/D5612AQFdPySrRKpdyw/article-cover_image-shrink_423_752/0/1693509716246?e=1704326400&v=beta&t=laHlron4Mica29Uru4JybCjRqjtxcWc7Ox5MZOOYI4Y")' }}
                    // data-setbg="assets/img/featured/feature-2.jpg"
                  >
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Eat That Frog</a>
                    </h6>
                    <h5>₹299.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                <div className="featured__item">
                  <div
                    className="featured__item__pic set-bg"
                    style={{ backgroundImage: 'url("https://d1gbp99v447ls8.cloudfront.net/wp-content/uploads/2019/01/02214839/the-silent-patient-lead.jpg")' }}
                    // data-setbg="assets/img/featured/feature-3.jpg"
                  >
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">The Silent Patient</a>
                    </h6>
                    <h5>₹359.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                <div className="featured__item">
                  <div
                    className="featured__item__pic set-bg"
                    style={{ backgroundImage: 'url("https://prh.imgix.net/articles/Landscape_Testaments_09.jpg")' }}
                    // data-setbg="assets/img/featured/feature-4.jpg"
                  >
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">The Testaments</a>
                    </h6>
                    <h5>₹169.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                <div className="featured__item">
                  <div
                    className="featured__item__pic set-bg"
                    style={{ backgroundImage: 'url("https://jia-shing.com/content/images/2020/11/book-steve-jobs-by-walter-isaacson.jpg")' }}
                    // data-setbg="assets/img/featured/feature-5.jpg"
                  >
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Steve Jobs</a>
                    </h6>
                    <h5>₹549.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                <div className="featured__item">
                  <div
                    className="featured__item__pic set-bg"
                    style={{ backgroundImage: 'url("https://uploads-ssl.webflow.com/60897cff2729363a04b4a886/62a963da302fea6b619d5a19_LANDSCAPE.jpeg")' }}
                    // data-setbg="assets/img/featured/feature-6.jpg"
                  >
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">How To Win Friends & Influence People</a>
                    </h6>
                    <h5>₹199.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                <div className="featured__item">
                  <div
                    className="featured__item__pic set-bg"
                    style={{ backgroundImage: 'url("data:image/jpeg;base64,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")' }}
                    // data-setbg="assets/img/featured/feature-7.jpg"
                  >
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Think and Grow Rich</a>
                    </h6>
                    <h5>₹129.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                <div className="featured__item">
                  <div
                    className="featured__item__pic set-bg"
                    style={{ backgroundImage: 'url("https://static.toiimg.com/photo/msid-103436159/103436159.jpg")' }}
                    // data-setbg="assets/img/featured/feature-8.jpg"
                  >
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">The Richest Man in Babylon</a>
                    </h6>
                    <h5>₹179.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src={img2} alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <section className="latest-product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Latest Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src=""
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img5}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img6}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img4}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img5}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img6}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Top Rated Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img4}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img5}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img6}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img4}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img5}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img6}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Review Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img4}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img5}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img6}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img4}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img5}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img
                            src={img6}
                            alt=""
                          />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="from-blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title from-blog__title">
                  <h2>From The Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src={img7} alt="" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o"></i> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o"></i> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="#">Cooking tips make cooking simple</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src={img8} alt="" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o"></i> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o"></i> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="#">6 ways to prepare breakfast for 30</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src={img9} alt="" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o"></i> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o"></i> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="#">Visit the clean farm in the US</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <footer className="footer spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                  <div className="footer__about__logo">
                    <a href="#" className="logo">
                      StoryTellers
                    </a>
                  </div>
                  <ul>
                    <li>Address: Kolkata</li>
                    <li>Phone: +91 12345 67890</li>
                    <li>Email: storytellers@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                <div className="footer__widget">
                  <h6>Useful Links</h6>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">About Our Shop</a>
                    </li>
                    <li>
                      <a href="#">Secure Shopping</a>
                    </li>
                    <li>
                      <a href="#">Delivery infomation</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Our Sitemap</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">Who We Are</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Innovation</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="footer__widget">
                  <h6>Join Our Newsletter Now</h6>
                  <p>
                    Get E-mail updates about our latest shop and special offers.
                  </p>
                  <form action="#">
                    <input type="text" placeholder="Enter your mail" />
                    <button type="submit" className="site-btn">
                      Subscribe
                    </button>
                  </form>
                  <div className="footer__widget__social">
                    <a href="https://www.facebook.com/soumikisonline/">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/soumikisonline/">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/soumikisonline">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://in.pinterest.com/">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="footer__copyright">
                  <div className="footer__copyright__text">
                    <p>
                      Copyright &copy;2023 All rights reserved | This website
                      is made with{" "}
                      <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                      <a href="#" target="_blank">
                        StoryTellers
                      </a>
                    </p>
                  </div>
                  <div className="footer__copyright__payment">
                    <img src={img10} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default CustomerDashboard;
