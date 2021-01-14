import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Movie from "./Movie";

class App extends Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoading: false });
    };
    //render호출되고 호출됨
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                year={movie.year}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default App;
