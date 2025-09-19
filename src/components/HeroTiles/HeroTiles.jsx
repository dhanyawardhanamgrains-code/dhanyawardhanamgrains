import React from 'react'
import './HeroTiles.css'

const HeroTiles = ({ data }) => {
  return <>
    {data.map((item, index) => (
      <div key={item.id} className="hero-tile">
        <img src={item.image} alt="icon" />
        <div className="hero-tile-content">
          <div className="hero-tile-title">{item.title}</div>
          <div className="hero-tile-description">{item.description}</div>
        </div>
      </div>
    ))}
  </>
}

export default HeroTiles