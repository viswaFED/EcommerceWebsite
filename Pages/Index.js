import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { NavGen } from "../Components/NavBar/NavbarElements";
import "./Index.css";

const Home = () => {
  return (
    <Fragment>
      <NavGen>
        <Link to={"../store"} className="home-button">
          Get our Latest allbum{" "}
        </Link>
      </NavGen>
      <div className="container">
        <h2 className="hometitle">Tours</h2>
        <div className="home-item">
          <span className="home-date">JUL16</span>
          <span className="home-place">DETROIT, MI</span>
          <span className="home-area">DTE ENERGY MUSIC THEATRE</span>
          <button className="buy-button">BUY TICKETS</button>
        </div>
        <div className="home-item">
          <span className="home-date">JUL16</span>
          <span className="home-place">TORONTO,ON</span>
          <span className="home-area">BUDWEISER STAGE</span>
          <button className="buy-button">BUY TICKETS</button>
        </div>
        <div className="home-item">
          <span className="home-date">JUL16</span>
          <span className="home-place">BRISTOW, VA</span>
          <span className="home-area">JIGGY LUBE LIVE</span>
          <button className="buy-button">BUY TICKETS</button>
        </div>
        <div className="home-item">
          <span className="home-date">JUL16</span>
          <span className="home-place">PHOENIX, AZ</span>
          <span className="home-area">AK-CHIN PAVILION</span>
          <button className="buy-button">BUY TICKETS</button>
        </div>
        <div className="home-item">
          <span className="home-date">JUL16</span>
          <span className="home-place">LAS VEGAS, NV</span>
          <span className="home-area">T-MOBILE ARENA</span>
          <button className="buy-button">BUY TICKETS</button>
        </div>
        <div className="home-item">
          <span className="home-date">JUL16</span>
          <span className="home-place">CONCORD, CAI</span>
          <span className="home-area">CONCORD PAVILION</span>
          <button className="buy-button">BUY TICKETS</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
