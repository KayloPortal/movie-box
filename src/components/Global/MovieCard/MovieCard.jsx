import "./MovieCard.css";
import iconIMDb from "/icons/imdb.svg";
import iconTomato from "/icons/tomato.svg";
import spritesAll from "/icons/__all-sprites.svg";

function MovieCard({ movie, customClass }) {
  return (
    <div className={`movie-card | fs-100 gray-900 ${customClass}`}>
      <div className="movie-card__poster-container">
        <img className="movie-card__poster" src={movie["image-url"]} alt="" />
      </div>
      <p className="movie-card__date | gray-400 fw-bold">
        {movie.country ? movie.country + ", " : ""}
        {movie.year} - Current
      </p>
      <h3 className="movie-card__title | fs-400 fw-bold">{movie.title}</h3>
      <p className="movie-card__rates | fl-height-100">
        <span>
          <img src={iconIMDb} alt="IMDb rate" />
          {movie["rate-IMDb"] * 10}.0 / 100
        </span>
        <span>
          <img src={iconTomato} alt="Rotten-Tomato's rate" />
          {movie["rate-Tomato"]}%
        </span>
      </p>
      <p className="movie-card__genres | gray-400 fw-bold fl-height-100">
        {(function () {
          let out = "";
          for (let i = 0; i < movie.genres.length; i++) {
            console.log(movie.genres[i]);
            out +=
              movie.genres[i] + (i === movie.genres.length - 1 ? "" : ", ");
          }
          return out;
        })()}
      </p>
      <div className="movie-card-bar">
        <div
          className="movie-card-bar__series | fw-bold gray-900"
          style={{ opacity: movie["tv-series"] === "yes" ? 1 : 0 }}
        >
          <p>{movie["tv-series"] === "yes" ? "TV SERIES" : ""}</p>
        </div>
        <button
          className="movie-card-bar__favorite"
          aria-label="add to favorites"
        >
          {/* <img src={iconHeart} alt="" /> */}
          <svg className="movie-card-bar__favorite-icon">
            <use xlinkHref={spritesAll + "#heart"}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
