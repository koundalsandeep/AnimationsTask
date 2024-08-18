import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'; // Import your updated CSS

function App() {
  const [effect, setEffect] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "https://cdn.pixabay.com/photo/2016/12/18/12/39/doll-1915614_640.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KC0_bUtXVvPGXpfAP0VjBFZikZ4X2atlSQrSJTKGe-1B7zeY9ugTNPFcysbC8wGo-H4&usqp=CAU",
    "https://cdn.pixabay.com/photo/2016/12/18/12/39/doll-1915614_640.jpg"
  ];

  const applyEffect = (effectName) => {
    setEffect(effectName);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    setActiveIndex(prevIndex);
  };

  return (
    <div className="App">
      <div className={`carousel-container ${effect}`}>
        <div className="carousel slide carouselWidth">
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === activeIndex ? 'active' : ''} ${effect}`}
              >
                <img src={slide} className="d-block w-100" alt={`Slide ${index + 1}`} />
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
      <div className="button-container">
        <button className="button" onClick={() => applyEffect('fade')}>Fade</button>
        <button className="button" onClick={() => applyEffect('float')}>Float</button>
        <button className="button" onClick={() => applyEffect('blur')}>Blur</button>
        <button className="button" onClick={() => applyEffect('expand')}>Expand</button>
        <button className="button" onClick={() => applyEffect('shrink')}>Shrink</button>
        <button className="button" onClick={() => applyEffect('reveal')}>Reveal</button>
        <button className="button" onClick={() => applyEffect('shape')}>Shape</button>
        <button className="button" onClick={() => applyEffect('flip')}>Flip</button>
        <button className="button" onClick={() => applyEffect('grow')}>Grow</button>
        <button className="button" onClick={() => applyEffect('wink')}>Wink</button>
        <button className="button" onClick={() => applyEffect('slide')}>Slide</button>
        <button className="button" onClick={() => applyEffect('flash')}>Flash</button>
      </div>
    </div>
  );
}

export default App;
