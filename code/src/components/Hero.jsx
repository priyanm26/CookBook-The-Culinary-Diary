import React from 'react'
import '../styles/Hero.css' // Make sure this path is correct
import heroImg1 from '../images/hero-img1.png'
import heroImg2 from '../images/hero-img2.png'
import heroImg3 from '../images/hero-img3.png'
import heroImg4 from '../images/hero-img4.png'
import { IoArrowForward } from "react-icons/io5"; // The icon import belongs here

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-images">
            <img src={heroImg2} alt="Stir fry" />
            <img src={heroImg4} alt="Sweet potato fries" />
            <img src={heroImg3} alt="Healthy bowl" />
            <img src={heroImg1} alt="Biryani dish" />
        </div>
        <div className="hero-text">
              <h1>Your Next Favorite Meal Awaits..</h1>
              <p>Explore thousands of tried-and-true recipes for every taste, occasion, and skill level.</p>
              <a href="#recipies" className="hero-button">
                See Trending Dishes<IoArrowForward className='arrow-icon' />
              </a>
        </div>
    </div>
  )
}

export default Hero