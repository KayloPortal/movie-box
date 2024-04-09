import { useEffect, useRef, useState } from "react";
import "./Slider.css";
import iconChevronLeft from "/icons/chevron-left.svg";
import iconChevronRight from "/icons/chevron-right.svg";

function Slider({ data, styleGap, styleColumn, children }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderCountainer = useRef();

  const handleSlide = (method) => {
    if (method !== "inc" && method !== "dec")
      throw "handleSlide method argument must be 'inc' or 'dec'";
    if (
      (sliderIndex === 0 && method === "dec") ||
      (sliderIndex === Math.floor(data.length - (window.innerWidth - 24) / ((styleColumn + styleGap) * 16) + 1) && method === "inc")
    )
      return;
    setSliderIndex((prev) => (method === "inc" ? prev + 1 : prev - 1));
  };

  useEffect(() => {
    const element = document.querySelector(".slider");
    element.scrollTo({
      top: 0,
      left:
        sliderIndex *
        (styleColumn + styleGap) *
        16,
      behavior: "smooth",
    });
  }, [sliderIndex, styleColumn, styleGap])

  return (
    <>
      <div className="slider" style={{"--column-size": `${styleColumn}rem`, "--gap-value": `${styleGap}rem`}} ref={sliderCountainer}>
        {children}
      </div>
      <div className="slider-navigators">
        <button
          className="slider-navigator"
          onClick={() => handleSlide("dec")}
          style={{ marginLeft: "-4rem" }}
        >
          <img className="slider-navigator__icon" src={iconChevronLeft} alt="" />
        </button>
        <button
          className="slider-navigator"
          onClick={() => handleSlide("inc")}
          style={{ marginRight: "-4rem" }}
        >
          <img
            className="slider-navigator__icon"
            src={iconChevronRight}
            alt=""
          />
        </button>
      </div>
    </>
  );
}

export default Slider;
