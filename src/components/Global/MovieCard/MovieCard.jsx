import "./MovieCard.css";
import iconIMDb from "/icons/imdb.svg";
import iconTomato from "/icons/tomato.svg";
import imagePoster1 from "/images/poster-1.jpg";
import iconHeart from "/icons/heart.svg";

function MovieCard() {
  return (
    <div className="movie-card">
      <img src={imagePoster1} alt="" />
      <p className="movie-card__date">USA, 2016 - Current</p>
      <h3 className="movie-card__title">Stranger Things</h3>
      <p className="movie-card__rates">
        <img src={iconIMDb} alt="IMDb rate" />
        86.0 / 100
        <img src={iconTomato} alt="Rotten-Tomato's rate" />
        70%
      </p>
      <p className="movie-card__genres">Action, Adventure, Horror</p>
      <div className="movie-card-bar">
        <div className="movie-card-bar__series">
          <p>TV SERIES</p>
        </div>
        <button
          className="movie-card-bar__favorite"
          aria-label="add to favorites"
        >
          <img src={iconHeart} alt="" />
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
