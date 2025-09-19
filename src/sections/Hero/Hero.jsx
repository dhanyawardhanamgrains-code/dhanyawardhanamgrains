import React from "react";
import HeroTiles from "../../components/HeroTiles/HeroTiles";
import "./Hero.css";
import { heroTilesData } from "../../data/hero";

const Hero = () => {
  return (
    <>
      <div id="hero" className="hero-section-container">
        <div className="hero-container">
          <div className="hero-content-container">
            <div className="hero-content-text">
              <h1>Nurturing Tradition, <br /> Delivering Quality</h1>
              <div className="hero-content-text-description">
                <p>
                  Premium rice processing with advanced parboiling technology.{" "}
                  <br />
                  From traditional varieties to modern processing excellence.
                </p>
              </div>
            </div>
            <div className="hero-content-tiles">
                <HeroTiles className="hero-tile" data={heroTilesData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
