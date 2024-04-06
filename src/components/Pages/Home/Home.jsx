/* eslint-disable react/prop-types */
import "./Home.css";
import iconIMDB from "/icons/imdb.svg";
import iconTomato from "/icons/tomato.svg";
import iconPlaySolid from "/icons/play-solid.svg";
// import iconChevronRight from "/icons/chevron-right.svg";
// import iconChevronLeft from "/icons/chevron-left.svg";

import imageJohnWick3 from "/images/banner-johnwick3.jpg";
import imageDankirk from "/images/banner-dankirk.jpg";
import imageFury from "/images/banner-fury.jpg";

import imageBatman from "/images/poster-batman.jpg";
import imageSpiderman from "/images/poster-spiderman.jpg";
import imageStrangerthings from "/images/poster-strangerthings.jpg";
import posterDankirk from "/images/poster-dankirk.jpg";

import sprites from "/icons/__all-sprites.svg";
import { useState } from "react";
import MovieCard from "../../Global/MovieCard/MovieCard";
import Slider from "../../Global/Slider/Slider";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedMovies />
    </>
  );
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
              <span
                style={{ opacity: index == itemIndex ? 1 : 0 }}
                className="hero-navigator__line"
              ></span>
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

const featuredMovies = [
  {
    title: "Stranger Things",
    "image-url": imageStrangerthings,
    "rate-IMDb": "8.6",
    "rate-Tomato": "97",
    id: "yf7834gd8634gd",
    year: "2016",
    country: "USA",
    "tv-series": "yes",
    genres: ["Action", "Adventure"],
    current: "yes",
  },
  {
    title: "Batman Begins",
    "image-url": imageBatman,
    "rate-IMDb": "8.2",
    "rate-Tomato": "70",
    id: "yf7834sdasdad8634gd",
    year: "2005",
    country: "USA",
    "tv-series": "no",
    genres: ["Action", "Adventure", "Horror"],
    current: "no",
  },
  {
    title: "Spider-Man : Into The Spider Verse",
    "image-url": imageSpiderman,
    "rate-IMDb": "8.4",
    "rate-Tomato": "87",
    id: "yf7834gdsadd8634gd",
    year: "2018",
    country: "USA",
    "tv-series": "no",
    genres: ["Animation", "Action", "Adventure"],
    current: "no",
  },
  {
    title: "Dankirk",
    "image-url": posterDankirk,
    "rate-IMDb": "7.8",
    "rate-Tomato": "94",
    id: "yf7834gdsdsdadd8634gd",
    year: "2017",
    country: "USA",
    "tv-series": "no",
    genres: ["Animation", "Drama", "History"],
    current: "no",
  },
  {
    title: "Dankirk",
    "image-url": posterDankirk,
    "rate-IMDb": "7.8",
    "rate-Tomato": "94",
    id: "yf7834gdddsdsdadd8634gd",
    year: "2017",
    country: "USA",
    "tv-series": "no",
    genres: ["Animation", "Drama", "History"],
    current: "no",
  },
  {
    title: "Dankirk",
    "image-url": posterDankirk,
    "rate-IMDb": "7.8",
    "rate-Tomato": "94",
    id: "yf7834gdddsdsdadsadd8634gd",
    year: "2017",
    country: "USA",
    "tv-series": "no",
    genres: ["Animation", "Drama", "History"],
    current: "no",
  },
];

function FeaturedMovies() {
  // const [sliderIndex, setSliderIndex] = useState(0);

  // const handleSlide = (method) => {
  //   if (method !== "inc" && method !== "dec")
  //     throw "handleSlide method argument must be 'inc' or 'dec'";
  //   setSliderIndex((prevIndex) => {
  //     if (
  //       (prevIndex == 0 && method == "dec") ||
  //       (prevIndex == featuredMovies.length - 4 && method == "inc")
  //     )
  //       return prevIndex;
  //     return prevIndex + (method === "inc" ? 1 : -1);
  //   });
  // };

  return (
    <section className="movies">
      <div className="container-full movies-container">
        <div className="bar">
          <h2 className="bar__heading | fw-bold fs-650">Featured Movie</h2>
          <a className="bar__link | link-underline" href="">
            <span className="bar__link-text | fs-400 fl-height-600 rose-700">
              See more
            </span>{" "}
            <svg className="bar__link-icon">
              <use xlinkHref={sprites + "#chevron-right"}></use>
            </svg>
          </a>
        </div>
        <Slider
          data={featuredMovies}
          styleGap={5}
          styleColumn={15.625}
          Holder={MovieCard}
        >
          {featuredMovies.map((data) => (
            <MovieCard key={data.id} movie={data} customClass={""} />
          ))}
        </Slider>
        {/* <div className="movie-slider">
          <MovieCard
            movie={featuredMovies[0]}
            customClass="movie-card-holder"
          />
          <div
            className="movie-cards"
            style={{
              transform: `translateX(${
                sliderIndex * (-1 * (15.625 + 5))
                // (sliderIndex === featuredMovies.length - 4 ? 5 : 0)
              }rem)`,
            }}
          >
            {featuredMovies.map((data) => (
              <MovieCard key={data.id} movie={data} customClass={""} />
            ))}
          </div>
        </div>
        <div className="movie-navigators">
          <button
            className="movie-navigator"
            onClick={() => handleSlide("dec")}
            style={{ marginLeft: "-4rem" }}
          >
            <img
              className="movie-navigator__icon"
              src={iconChevronLeft}
              alt=""
            />
          </button>
          <button
            className="movie-navigator"
            onClick={() => handleSlide("inc")}
            style={{ marginRight: "-4rem" }}
          >
            <img
              className="movie-navigator__icon"
              src={iconChevronRight}
              alt=""
            />
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default Home;
