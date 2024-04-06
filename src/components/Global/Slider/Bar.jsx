import "./Bar.css";
import sprites from "/icons/__all-sprites.svg"

function Bar({heading, URL}) {
  return (
    <div className="bar">
      <h2 className="bar__heading | fw-bold fs-650">{heading}</h2>
      <a className="bar__link | link-underline" href={URL}>
        <span className="bar__link-text | fs-400 fl-height-600 rose-700">
          See more
        </span>{" "}
        <svg className="bar__link-icon">
          <use xlinkHref={sprites + "#chevron-right"}></use>
        </svg>
      </a>
    </div>
  );
}

export default Bar;
