/* eslint-disable react/prop-types */
import "./Home.css";
import iconIMDB from "/icons/imdb.svg";
import iconTomato from "/icons/tomato.svg";
import iconPlaySolid from "/icons/play-solid.svg";
import imageJohnWick3 from "/images/banner-johnwick3.jpg";
import imageDankirk from "/images/banner-dankirk.jpg";
import imageFury from "/images/banner-fury.jpg";
import { useState } from "react";

function Home() {
  return <Hero />;
}

const heroMovies = [
  {
    title: "John Wick 3 : Parabellum",
    description:
      "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    "image-url": imageJohnWick3,
    "rate-IMDb": "8.6",
    "rate-Tomato": "97",
    id: "yf7834gd8634gd",
  },
  {
    title: "Dankirk",
    description:
      "Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.",
    "image-url": imageDankirk,
    "rate-IMDb": "7.8",
    "rate-Tomato": "94",
    id: "yf7834gdg73486",
  },
  {
    title: "Fury",
    description:
      "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
    "image-url": imageFury,
    "rate-IMDb": "7.6",
    "rate-Tomato": "76",
    id: "yf7834gdg734gd",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  function handleIndex(newIndex) {
    setIndex(newIndex);
  }

  return (
    <section className="hero-section">
      <h1 className="visually-hidden">Free Movie And Drama Website</h1>
      <div className="hero-slider">
        <h2 className="visually-hidden">Most Popular Movies</h2>
        <div
          className="hero-slides"
          style={{
            transform: `translateY(calc(-${index} * var(--slide-value)))`,
          }}
        >
          {heroMovies.map((data) => (
            <HeroSlide key={data.id} movie={data} />
          ))}
        </div>
        <div className="hero-navigators">
          {heroMovies.map((item, itemIndex) => (
            <button
              key={itemIndex + 1}
              onClick={() => handleIndex(itemIndex)}
              className={`hero-navigator | ${
                index === itemIndex ? "neutral-100" : "gray-400"
              } fw-bold fs-${index === itemIndex ? "3" : "1"}00 fl-height-200`}
            >
              <span style={{opacity: index == itemIndex? 1 : 0}} className="hero-navigator__line"></span>
              {itemIndex + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSlide({ movie }) {
  return (
    <div
      className="hero-slide | neutral-100"
      style={{
        background: `url(${movie["image-url"]}) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-slide__bg"></div>
      <div className="container hero-slide-container">
        <h3 className="hero-slide__heading | fw-bold fs-700 fl-height-700">
          {movie.title}
        </h3>
        <p className="hero-slide__rates">
          <img src={iconIMDB} alt="IMDb rate" /> {movie["rate-IMDb"] * 10}.0 /
          100{" "}
          <img
            src={iconTomato}
            alt="Rotten-Tomatoes rate"
            style={{ marginLeft: "2.125rem" }}
          />{" "}
          {movie["rate-Tomato"]}%
        </p>
        <p className="hero-slide__desc | fs-200 fl-height-400 fw-medium">
          {movie.description}
        </p>
        <button className="hero-slide__cta | fs-200 fl-height-600 fw-bold">
          {" "}
          <img src={iconPlaySolid} alt="play icon" /> WATCH TRAILER
        </button>
      </div>
    </div>
  );
}

export default Home;
