import { useEffect, useRef, useState } from "react";

function useSliderIndex(slideShowSecond, length) {
  const [index, setIndex] = useState(0);
  const sliderSeconds = useRef(0);
  const sliderOrientaion = useRef("increase");
  function defineOrientation(prevIndex, orientaion, length) {
    return prevIndex === 0 && orientaion === "decrease"
      ? "increase"
      : prevIndex === length - 1 && orientaion === "increase"
      ? "decrease"
      : orientaion;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderSeconds.current == slideShowSecond) {
        sliderSeconds.current = 0;
        setIndex((prevIndex) => {
          const orientaion = sliderOrientaion.current;
          sliderOrientaion.current = defineOrientation(
            prevIndex,
            orientaion,
            length
          );
          return prevIndex + (orientaion === "increase" ? 1 : -1);
        });
      } else {
        sliderSeconds.current += 500;
      }
    }, 500);
    return () => clearInterval(intervalId);
  }, [length, slideShowSecond]);

  function resetSeconds() {
    sliderSeconds.current = 0;
  }

  function handleIndex(newIndex = undefined, method = "inc") {
    // to set a new Index: handleIndex(8) | to increase previous index : handleIndex(method="inc") | decrease : handleIndex(method="dec")
    if (method !== "inc" && method !== "dec")
      throw new Error(
        "method must be 'inc' or 'dec' | handleIndex, useSliderIndex.jsx"
      );
    newIndex !== undefined
      ? setIndex(newIndex)
      : setIndex(
          (prev) =>
            prev +
            (defineOrientation(prev, method, length) === method + "rease" &&
              (method === "inc" ? 1 : 0))
        );
    resetSeconds();
  }
  return [index, handleIndex, resetSeconds, setIndex];
}

export default useSliderIndex;
