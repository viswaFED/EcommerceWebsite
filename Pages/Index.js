import React, { Fragment, useState } from "react";
import MoviesList from "../Components/Movies/MoviesList";
import "./Index.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
    setIsLoading(false);
  }
  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
      {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </Fragment>
  );
};

export default Home;

// import { Link } from "react-router-dom";
// import { NavGen } from "../Components/NavBar/NavbarElements";
//  <NavGen>
//   <Link to={"../store"} className="home-button">
//     Get our Latest allbum{" "}
//   </Link>
// </NavGen>
// <div className="container">
//   <h2 className="hometitle">Tours</h2>
//   <div className="home-item">
//     <span className="home-date">JUL16</span>
//     <span className="home-place">DETROIT, MI</span>
//     <span className="home-area">DTE ENERGY MUSIC THEATRE</span>
//     <button className="buy-button">BUY TICKETS</button>
//   </div>
//   <div className="home-item">
//     <span className="home-date">JUL16</span>
//     <span className="home-place">TORONTO,ON</span>
//     <span className="home-area">BUDWEISER STAGE</span>
//     <button className="buy-button">BUY TICKETS</button>
//   </div>
//   <div className="home-item">
//     <span className="home-date">JUL16</span>
//     <span className="home-place">BRISTOW, VA</span>
//     <span className="home-area">JIGGY LUBE LIVE</span>
//     <button className="buy-button">BUY TICKETS</button>
//   </div>
//   <div className="home-item">
//     <span className="home-date">JUL16</span>
//     <span className="home-place">PHOENIX, AZ</span>
//     <span className="home-area">AK-CHIN PAVILION</span>
//     <button className="buy-button">BUY TICKETS</button>
//   </div>
//   <div className="home-item">
//     <span className="home-date">JUL16</span>
//     <span className="home-place">LAS VEGAS, NV</span>
//     <span className="home-area">T-MOBILE ARENA</span>
//     <button className="buy-button">BUY TICKETS</button>
//   </div>
//   <div className="home-item">
//     <span className="home-date">JUL16</span>
//     <span className="home-place">CONCORD, CAI</span>
//     <span className="home-area">CONCORD PAVILION</span>
//     <button className="buy-button">BUY TICKETS</button>
//   </div>
// </div>
