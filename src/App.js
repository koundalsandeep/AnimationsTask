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
      <div className="button-container">
        <h3>Duration</h3>
        <div className="duration-buttons">
          {['1s', '2s', '3s', '4s', '5s'].map(duration => (
            <button
              key={duration}
              className='button'
              onClick={() => document.documentElement.style.setProperty('--animation-duration', duration)}
            >
              {duration}
            </button>
          ))}
        </div>
      </div>
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
              <option value='lrft'>Left</option>
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
        {effect === 'blur' && (
          <>
            <label>Motion Style:</label>
            <select
              value={options.style}
              onChange={e => onOptionChange('style', e.target.value)}
            >
              <option>Gentle</option>
              <option>Moderate</option>
              <option>Intense</option>
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
        {effect === 'expand' && (
          <>
            <label>Motion Style:</label>
            <select
              value={options.style}
              onChange={e => onOptionChange('style', e.target.value)}
            >
              <option>Gentle</option>
              <option>Moderate</option>
              <option>Intense</option>
            </select>
            <label>Direction:</label>
            <select
              value={options.direction}
              onChange={e => onOptionChange('direction', e.target.value)}
            >
              <option>Right</option>
              <option>Top Right</option>
              <option>Top</option>
              <option>Top Left</option>
              <option>Left</option>
              <option>Bottom Left</option>
              <option>Bottom</option>
              <option>Bottom Right</option>
              <option>Center</option>
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
        {effect === 'shrink' && (
          <>
            <label>Motion Style:</label>
            <select
              value={options.style}
              onChange={e => onOptionChange('style', e.target.value)}
            >
              <option>Gentle</option>
              <option>Moderate</option>
              <option>Intense</option>
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
        {effect === 'reveal' && (
          <>
            <label>Direction:</label>
            <select
              value={options.direction}
              onChange={e => onOptionChange('direction', e.target.value)}
            >
              <option>Top</option>
              <option>Bottom</option>
              <option>Left</option>
              <option>Right</option>
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
        {effect === 'shape' && (
          <>
            <label>Shape:</label>
            <select
              value={options.shape}
              onChange={e => onOptionChange('shape', e.target.value)}
            >
              <option>Oval</option>
              <option>Circle</option>
              <option>Square</option>
              <option>Diamond</option>
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
        {effect === 'flip' && (
          <>
            <label>Motion Style:</label>
            <select
              value={options.style}
              onChange={e => onOptionChange('style', e.target.value)}
            >
              <option>Gentle</option>
              <option>Moderate</option>
              <option>Intense</option>
            </select>
            <label>Direction:</label>
            <select
              value={options.direction}
              onChange={e => onOptionChange('direction', e.target.value)}
            >
              <option>Top</option>
              <option>Bottom</option>
              <option>Left</option>
              <option>Right</option>
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
        {effect === 'grow' && (
          <>
            <label>Motion Style:</label>
            <select
              value={options.style}
              onChange={e => onOptionChange('style', e.target.value)}
            >
              <option>Gentle</option>
              <option>Moderate</option>
              <option>Intense</option>
            </select>
            <label>Direction (0-360°):</label>
            <input
              type="text"
              value={options.direction}
              onChange={e => onOptionChange('direction', e.target.value)}
            />
            <label>Distance:</label>
            <input
              type="text"
              value={options.distance}
              onChange={e => onOptionChange('distance', e.target.value)}
            />
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
        {effect === 'wink' && (
          <>
            <label>Direction:</label>
            <select
              value={options.direction}
              onChange={e => onOptionChange('direction', e.target.value)}
            >
              <option>Horizontal</option>
              <option>Vertical</option>
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
        {effect === 'slide' && (
          <>
            <label>Motion Style:</label>
            <select
              value={options.style}
              onChange={e => onOptionChange('style', e.target.value)}
            >
              <option>Gentle</option>
              <option>Moderate</option>
              <option>Intense</option>
            </select>
            <label>Direction:</label>
            <select
              value={options.direction}
              onChange={e => onOptionChange('direction', e.target.value)}
            >
              <option>Top</option>
              <option>Bottom</option>
              <option>Left</option>
              <option>Right</option>
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
        {effect === 'flash' && (
          <>
            <label>Duration:</label>
            <input
              type="text"
              value={options.duration}
              onChange={e => onOptionChange('duration', e.target.value)}
            />
            <label>Delay Between Loops:</label>
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
                '--animation-duration': options.duration,
                '--animation-delay': options.delay,
                '--animation-direction': options.direction,
                '--animation-distance': options.distance,
                '--animation-shape': options.shape,
                '--animation-style': options.style,
                // Additional dynamic styles for other options
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
