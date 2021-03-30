import React from 'react'

function MoviesList({ movies }) {
    return (
        <div className="wrapper">
            {
                movies.map(movie => <div key={ movie.imdbID } className="item">
                    <img src={ movie.Poster } alt="movie" />
                </div>)
            }
        </div>
    )
}

export default MoviesList