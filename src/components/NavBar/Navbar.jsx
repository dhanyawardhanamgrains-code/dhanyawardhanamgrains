import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return <>
    <div  id="nav" className='navbar-container'>
      <div className='nav-container'>
        <div className='logo-container'>
          <img className='logo-img' src="/logo.svg" alt="logo" />
          <div className='text-block'>
            <h1>Dhanyawardhanam</h1>
            <p>Grains</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className='nav-links'>
          <div className='nav-links-container'>
            <a href="#nav">Home</a>
            <a href="#products">Products</a>
            <a href="#process">Process</a>
            <a href="#benefits">Benefits</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <button id='get-quote-button'>
            <span>Get Quote</span>
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    {/* Mobile Navigation */}
    <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
      <div className='mobile-nav-links'>
        <a href="#nav" onClick={closeMobileMenu}>Home</a>
        <a href="#products" onClick={closeMobileMenu}>Products</a>
        <a href="#process" onClick={closeMobileMenu}>Process</a>
        <a href="#benefits" onClick={closeMobileMenu}>Benefits</a>
        <a href="#about" onClick={closeMobileMenu}>About</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
      </div>
      <button id='mobile-get-quote-button' onClick={closeMobileMenu}>
        <span>Get Quote</span>
      </button>
    </div>
  </>
}

export default Navbar