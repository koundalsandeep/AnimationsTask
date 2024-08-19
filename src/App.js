import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'; // Import your updated CSS

function App() {
  const animations = [
    'fade',
    'float',
    'blur',
    'expand',
    'shrink',
    'reveal',
    'shape',
    'flip',
    'grow',
    'wink',
    'slide',
    'flash'
  ];

  const slides = [
    "https://www.w3schools.com/bootstrap/la.jpg",
    "https://www.w3schools.com/bootstrap/chicago.jpg",
    "https://www.w3schools.com/bootstrap/ny.jpg"
  ];

  return (
    <div className="App">
      {animations.map((effect, index) => (
        <CarouselSlider key={index} effect={effect} slides={slides} />
      ))}
    </div>
  );
}

function CarouselSlider({ effect, slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    setActiveIndex(prevIndex);
  };

  return (
    <div className={`carousel-container ${effect}`}>
      <h2>{effect.charAt(0).toUpperCase() + effect.slice(1)} Animation</h2>
      <div className="carousel slide carouselWidth">
        <div className="carousel-inner">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`carousel-item ${slideIndex === activeIndex ? 'active' : ''} ${effect}`}
            >
              <img src={slide} className="d-block w-100" alt={`Slide ${slideIndex + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default App;
