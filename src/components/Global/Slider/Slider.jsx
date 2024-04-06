import { useState } from "react";
import "./Slider.css";
// import sprites from "/icons/__all-sprites.svg";
import iconChevronLeft from "/icons/chevron-left.svg";
import iconChevronRight from "/icons/chevron-right.svg";

function Slider({ data, Holder, styleGap, styleColumn, children }) {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSlide = (method) => {
    if (method !== "inc" && method !== "dec")
      throw "handleSlide method argument must be 'inc' or 'dec'";
    setSliderIndex((prevIndex) => {
      if (
        (prevIndex == 0 && method == "dec") ||
        (prevIndex == data.length - 4 && method == "inc")
      )
        return prevIndex;
      return prevIndex + (method === "inc" ? 1 : -1);
    });
  };

  return (
    <>
      <div className="movie-slider">
        <Holder movie={data[0]} customClass="movie-card-holder" />
        <div
          className="movie-cards"
          style={{
            transform: `translateX(${
              sliderIndex * (-1 * (styleColumn + styleGap))
              // (sliderIndex === data.length - 4 ? 5 : 0)
            }rem)`,
          }}
        >
          {children}
        </div>
      </div>
      <div className="movie-navigators">
        <button
          className="movie-navigator"
          onClick={() => handleSlide("dec")}
          style={{ marginLeft: "-4rem" }}
        >
          <img className="movie-navigator__icon" src={iconChevronLeft} alt="" />
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
      </div>
    </>
  );
}

export default Slider;
