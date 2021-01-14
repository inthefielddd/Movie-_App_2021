import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} />
            <div className="movie__info">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres &&
                        genres.map((item, index) => (
                            <li className="genres__genre" key={index}>
                                {item}
                            </li>
                        ))}
                </ul>

                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
