import React from 'react'

const HeroSection = () => {
  return (
    <div className="container hero-section--main-container">
        <div className="hero-section--content-container">
            <img src="/images/profile-image.png" alt="John" className="hero-section--profile-image" />
            <div className="hero-section--content">
                <h1>Hi, I am John, <br /> Creative Technologist</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
        <button type="button" className="btn btn-accent btn--download">Download Resume</button>
    </div>
  )
}

export default HeroSection
