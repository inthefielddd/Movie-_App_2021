import React, { Component } from "react";

class Detail extends Component {
    //render호출이 끝났을때
    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="movie__detail">
                    <img src={location.state.poster} alt={location.state.title} />
                    <div className="movie__detail__info">
                        <h2 className="movie__detail__title">{location.state.title}</h2>
                        <h4 className="movie__detail__year">{location.state.year}</h4>
                        <ul className="movie__detail__genres">
                            {location.state.genres &&
                                location.state.genres.map((item, index) => (
                                    <li className="genres__genre" key={index}>
                                        {item}
                                    </li>
                                ))}
                        </ul>
                        <p className="movie__detail__summary">{location.state.summary}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
