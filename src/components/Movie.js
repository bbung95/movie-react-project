import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: "/movie_detail",
          state: {
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h4 className="movie__title">{title}</h4>
          <h5 className="movie__year">{year}</h5>
          <p className="movie__summary">{summary.slice(0, 180)}</p>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li className="genres_genre" key={index}>
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
