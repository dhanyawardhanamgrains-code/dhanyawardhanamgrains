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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Get navbar height dynamically based on screen size
      const navbar = document.querySelector('.navbar-container')
      const navbarHeight = navbar ? navbar.offsetHeight : 88
      
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    closeMobileMenu() // Close mobile menu after navigation
  }

  return <>
    <div  id="nav" className='navbar-container'>
      <div className='nav-container'>
        <div className='logo-container' onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} style={{ cursor: 'pointer' }}>
          <img className='logo-img' src="/logo.svg" alt="logo" />
          <div className='text-block'>
            <h1>Dhanyawardhanam</h1>
            <p>Grains</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className='nav-links'>
          <div className='nav-links-container'>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Products</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Process</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>Benefits</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          </div>
          <button 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            id='get-quote-button'>
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
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Products</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Process</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>Benefits</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
      </div>
      <button 
        id='mobile-get-quote-button' 
        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
        <span>Get Quote</span>
      </button>
    </div>
  </>
}

export default Navbar