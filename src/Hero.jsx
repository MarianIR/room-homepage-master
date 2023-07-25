import logo from "/images/logo.svg";
import openMenuIcon from "/images/icon-hamburger.svg";
import closeMenuIcon from "/images/icon-close.svg";
import shopArrow from "/images/icon-arrow.svg";
import leftArrow from "/images/icon-angle-left.svg";
import rightArrow from "/images/icon-angle-right.svg";
import darkFurniture from "/images/image-about-dark.jpg";
import lightFurniture from "/images/image-about-light.jpg";

import data from "./data";

import Navigation from "./Navigation";

import { useEffect, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataLength = data.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dataLength) % dataLength);
  };

  /////////////
  /////////////

  return (
    <main className="hero">
      <section className="main-section">
        <div className="illustration-container">
          <img
            src={data[currentIndex].img}
            alt="illustration"
            className="illustration"
          />
          <Navigation />
          {/* <nav className="navigation">
            <div className="nav-btns">
              <img
                src={openMenuIcon}
                alt="this is the open menu button"
                className="open-menu"
              />
              <img
                src={closeMenuIcon}
                alt="this is the close menu button"
                className="close-menu"
              />
            </div>
            <img
              src={logo}
              alt="this is the logo"
              width={80}
              height={30}
              className="logo"
            />
            <ul className="nav-list">
              <li className="list-item">
                <a href="#" className="list-link">
                  home
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-link">
                  shop
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-link">
                  about
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-link">
                  contact
                </a>
              </li>
            </ul>
          </nav> */}

          <div className="change-page-box">
            <button className="change-left-btn">
              <img
                src={leftArrow}
                alt="this the left arrow"
                className="left-arrow"
                onClick={handlePrev}
              />
            </button>
            <button className="change-right-btn">
              <img
                src={rightArrow}
                alt="this the right arrow"
                className="right-arrow"
                onClick={handleNext}
              />
            </button>
          </div>
        </div>
        <article className="article-section">
          <h1 className="main-heading">{data[currentIndex].title}</h1>
          <p className="description-paragraph">
            {data[currentIndex].description}
          </p>
          <button className="shop-now-btn">
            Shop now
            <img src={shopArrow} alt="this is an arrow" className="arrow" />
          </button>
        </article>
      </section>
      <section className="furniture-section">
        <img
          src={darkFurniture}
          alt="dark furniture"
          width={200}
          height={180}
          className="dark-furniture-image"
        />
        <article className="about-furniture">
          <h2 className="furniture-heading">about our furniture</h2>
          <p className="furniture-paragraph">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </article>
        <img
          src={lightFurniture}
          alt="light furniture"
          width={200}
          height={180}
          className="light-furniture-image"
        />
      </section>
    </main>
  );
};

export default Hero;
