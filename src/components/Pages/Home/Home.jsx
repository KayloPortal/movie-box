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
import imageDune from "/images/poster-dune.jpg";
import imageNoTimeToDie from "/images/poster-notimetodie.jpg";
import posterDankirk from "/images/poster-dankirk.jpg";
import iconPlayOutline from "/icons/play-outline.svg";

import thumbnail1 from "/images/thumbnail-1.jpg";
import thumbnail2 from "/images/thumbnail-2.jpg";
import thumbnail3 from "/images/thumbnail-3.jpg";

import castPoster1 from "/images/casts-poster-1.jpg";
import castPoster2 from "/images/casts-poster-2.jpg";
import castPoster3 from "/images/casts-poster-3.jpg";
import castPoster4 from "/images/casts-poster-4.jpg";

import videoTest from "/videos/test.mp4";

import { useRef, useState } from "react";
import MovieCard from "../../Global/MovieCard/MovieCard";
import Slider from "../../Global/Slider/Slider";
import Bar from "../../Global/Slider/Bar";
import SectionContainer from "../../Layout/SectionContainer";
import { Link } from "react-router-dom";
import useSliderIndex from "../../../hooks/useSliderIndex";

function Home() {
  return (
    <>
      <Hero />
      <SectionContainer
        customClass={"slider-section movies"}
        containerClass={"movies-container"}
        full={true}
      >
        <Bar heading={"Featured Movies"} URL={""} />
        <Slider data={featuredMovies} styleGap={5} styleColumn={15.625}>
          {featuredMovies.map((data) => (
            <MovieCard key={data.id} movie={data} customClass={""} />
          ))}
        </Slider>
      </SectionContainer>
      <SectionContainer
        customClass={"slider-section movies"}
        containerClass={"movies-container"}
        full={true}
      >
        <Bar heading={"New Arrival"} URL={""} />
        <Slider data={newArrival} styleGap={5} styleColumn={15.625}>
          {newArrival.map((data) => (
            <MovieCard key={data.id} movie={data} customClass={""} />
          ))}
        </Slider>
      </SectionContainer>
      <SectionContainer
        customClass={"slider-section hero-videos"}
        containerClass={"hero-videos-container"}
        full={true}
      >
        <Bar heading={"Exclusive Videos"} URL={""} />
        <Slider data={videosData} styleGap={3} styleColumn={28.125}>
          {videosData.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </Slider>
      </SectionContainer>
      <SectionContainer customClass={"slider-section hero-casts"} full={true}>
        <Bar heading={"Featured Casts"} URL={""} />
        <Slider data={castsData} styleColumn={15.625} styleGap={5}>
          {castsData.map((data) => (
            <div key={data.id} className="cast-card">
              <img
                className="cast-card__image"
                src={data.imageURL}
                alt={`link to ${data.title}'s page`}
              />
              <h3 className="cast-card__title fs-400 fw-bold gray-900">
                {data.title}
              </h3>
            </div>
          ))}
        </Slider>
      </SectionContainer>
    </>
  );
}

function Hero() {
  const [index, handleIndex] = useSliderIndex(4000, heroMovies.length - 1)

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
                style={{
                  opacity: index == itemIndex ? 1 : 0,
                  width: index == itemIndex ? "1.25rem" : "0",
                }}
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
        <Link to="" className="hero-slide__cta | fs-200 fl-height-600 fw-bold">
          {" "}
          <img src={iconPlaySolid} alt="play icon" /> WATCH TRAILER
        </Link>
      </div>
    </div>
  );
}

function VideoCard({ video }) {
  const videoElement = useRef();
  const [isPlaying, setIsPLaying] = useState(false);

  const handleFirstPlay = () => {
    if (!isPlaying) {
      videoElement.current.play();
      setIsPLaying(true);
    }
  };

  return (
    <div className={`video-card ${isPlaying ? "video-card--playing" : ""}`}>
      <div className="video-card__video-container">
        <video
          className="video-card__video"
          src={video.videoURL}
          ref={videoElement}
          controls
        ></video>
        <img src={video.thumbnail} className="video-card__thumbnail" />
        <div
          className="video-card__dark-gradient"
          onClick={handleFirstPlay}
        ></div>
        <button className="video-card__play-button">
          <img src={iconPlayOutline} alt="play" onClick={handleFirstPlay} />
        </button>
      </div>
      <h3 className="video-card__title | fs-400 fw-bold gray-900">
        {video.title}
      </h3>
    </div>
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

const newArrival = [
  {
    title: "Dune",
    "image-url": imageDune,
    "rate-IMDb": "8.4",
    "rate-Tomato": "75",
    id: "yf783dsad4gd8634gd",
    year: "2021",
    country: "USA",
    "tv-series": "yes",
    genres: ["Action", "Adventure", "Drama"],
    current: "yes",
  },
  {
    title: "No Time To Die",
    "image-url": imageNoTimeToDie,
    "rate-IMDb": "7.6",
    "rate-Tomato": "68",
    id: "yf7834sdasdad8634gd",
    year: "2021",
    country: "USA",
    "tv-series": "no",
    genres: ["Action", "Adventure", "Thriller"],
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

const videosData = [
  {
    title: "Lamb (2021) Trailer",
    videoURL: videoTest,
    thumbnail: thumbnail1,
    id: "848465",
  },
  {
    title: "The Suicide Squad : John Cena Interview",
    videoURL: videoTest,
    thumbnail: thumbnail2,
    id: "3511614",
  },
  {
    title: "Lamb (2021) Trailer",
    videoURL: videoTest,
    thumbnail: thumbnail3,
    id: "4848",
  },
  {
    title: "Lamb (2021) Trailer",
    videoURL: videoTest,
    thumbnail: thumbnail1,
    id: "4684841",
  },
];

const castsData = [
  {
    title: "Keanu Reeves",
    imageURL: castPoster1,
    id: "18246",
  },
  {
    title: "Ryan Reynolds",
    imageURL: castPoster2,
    id: "18548",
  },
  {
    title: "Timothée Chalamet",
    imageURL: castPoster3,
    id: "11546",
  },
  {
    title: "Chloë Grace Moretz",
    imageURL: castPoster4,
    id: "10546",
  },
  {
    title: "Chloë Grace Moretz",
    imageURL: castPoster4,
    id: "10sd546",
  },
  {
    title: "Chloë Grace Moretz",
    imageURL: castPoster4,
    id: "105asda46",
  },
];

export default Home;
