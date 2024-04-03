import "./MovieCard.css";
import iconIMDb from "/icons/imdb.svg";
import iconTomato from "/icons/tomato.svg";
import imagePoster1 from "/images/poster-1.jpg";
import iconHeart from "/icons/heart.svg";
import spritesAll from "/icons/__all-sprites.svg"

function MovieCard({ customClass }) {
  return (
    <div className={`movie-card | fs-100 gray-900 ${customClass}`}>
      <img className="movie-card__poster" src={imagePoster1} alt="" />
      <p className="movie-card__date | gray-400 fw-bold">USA, 2016 - Current</p>
      <h3 className="movie-card__title | fs-400 fw-bold">Stranger Things</h3>
      <p className="movie-card__rates | fl-height-100">
        <span>
          <img src={iconIMDb} alt="IMDb rate" />
          86.0 / 100
        </span>
        <span>
          <img src={iconTomato} alt="Rotten-Tomato's rate" />
          70%
        </span>
      </p>
      <p className="movie-card__genres | gray-400 fw-bold fl-height-100">
        Action, Adventure, Horror
      </p>
      <div className="movie-card-bar">
        <div className="movie-card-bar__series | fw-bold">
          <p>TV SERIES</p>
        </div>
        <button
          className="movie-card-bar__favorite"
          aria-label="add to favorites"
        >
          {/* <img src={iconHeart} alt="" /> */}
          <svg className="movie-card-bar__favorite-icon"><use xlinkHref={spritesAll + "#heart"}></use></svg>
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
