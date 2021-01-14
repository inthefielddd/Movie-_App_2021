import React from "react";

function Movie({ id, title, year, summary, poster }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} />
            <div className="movie__info">
                <h2 className="movie__title">{title}</h2>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

export default Movie;
