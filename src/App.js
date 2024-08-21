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

  const [animationOptions, setAnimationOptions] = useState({
    fade: { duration: '1s', delay: '0s' },
    float: { direction: 'Top', duration: '1s', delay: '0s' },
    blur: { style: 'Gentle', duration: '1s', delay: '0s' },
    expand: { style: 'Gentle', direction: 'Right', duration: '1s', delay: '0s' },
    shrink: { style: 'Gentle', duration: '1s', delay: '0s' },
    reveal: { direction: 'Top', duration: '1s', delay: '0s' },
    shape: { shape: 'Oval', duration: '1s', delay: '0s' },
    flip: { style: 'Gentle', direction: 'Top', duration: '1s', delay: '0s' },
    grow: { style: 'Gentle', direction: '0', distance: '100px', duration: '1s', delay: '0s' },
    wink: { direction: 'Horizontal', duration: '1s', delay: '0s' },
    slide: { style: 'Gentle', direction: 'Top', duration: '1s', delay: '0s' },
    flash: { duration: '1s', delay: '0s' },
  });

  const handleOptionChange = (effect, option, value) => {
    setAnimationOptions(prevOptions => ({
      ...prevOptions,
      [effect]: {
        ...prevOptions[effect],
        [option]: value
      }
    }));
  };

  return (
    <div className="App">
      {animations.map((effect, index) => (
        <CarouselSlider
          key={index}
          effect={effect}
          slides={slides}
          options={animationOptions[effect]}
          onOptionChange={(option, value) => handleOptionChange(effect, option, value)}
        />
      ))}
    </div>
  );
}

function CarouselSlider({ effect, slides, options, onOptionChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    setActiveIndex(prevIndex);
  };

  const getFloatDirectionStyle = () => {
    if (!options.direction) return {};
    switch (options.direction.toLowerCase()) {
      case 'top':
        return { transform: 'translateY(-100%)' };
      case 'bottom':
        return { transform: 'translateY(100%)' };
      case 'left':
        return { transform: 'translateX(-100%)' };
      case 'right':
        return { transform: 'translateX(100%)' };
      default:
        return {};
    }
  };
  return (
    <div className={`carousel-container ${effect}`}>
      <h2>{effect.charAt(0).toUpperCase() + effect.slice(1)} Animation</h2>
      <div className="animation-options">
        {effect === 'fade' && (
          <>
            <label>Duration:</label>
            <input
              type="text"
              value={options.duration}
              onChange={e => onOptionChange('duration', e.target.value)}
            />
            <label>Delay:</label>
            <input
              type="text"
              value={options.delay}
              onChange={e => onOptionChange('delay', e.target.value)}
            />
          </>
        )}
        {effect === 'float' && (
          <>
            <label>Direction:</label>
            <select
              value={options.direction}
              onChange={e => onOptionChange('direction', e.target.value)}
            >
              <option value='top'>Top</option>
              <option value='bottom'>Bottom</option>
              <option value='left'>Left</option>
              <option value='right'>Right</option>
            </select>
            <label>Duration:</label>
            <input
              type="text"
              value={options.duration}
              onChange={e => onOptionChange('duration', e.target.value)}
            />
            <label>Delay:</label>
            <input
              type="text"
              value={options.delay}
              onChange={e => onOptionChange('delay', e.target.value)}
            />
          </>
        )}

      </div>
      <div className="carousel slide carouselWidth">
        <div className="carousel-inner">
          {slides.map((slide, slideIndex) => (
            <div
            key={slideIndex}
            className={`carousel-item ${slideIndex === activeIndex ? 'active' : ''} ${effect}`}
            style={{
              ...getFloatDirectionStyle(),
              '--animation-duration': options.duration,
              '--animation-delay': options.delay,
            }}
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
