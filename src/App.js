import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css"; // Import your updated CSS

function App() {
  const animations = [
    "fade",
    "float",
    "blur",
    "expand",
    "shrink",
    "reveal",
    "shape",
    "flip",
    "grow",
    "wink",
    "slide",
    "flash",
  ];

  const slides = [
    "https://www.w3schools.com/bootstrap/la.jpg",
    "https://www.w3schools.com/bootstrap/chicago.jpg",
    "https://www.w3schools.com/bootstrap/ny.jpg",
  ];

  const [animationOptions, setAnimationOptions] = useState({
    fade: {
      duration: "1s",
      delay: "0s",
      autoplayTimeout: 1,
      autoplayHoverPause: false,
    },
    float: {
      direction: "Top",
      duration: "1s",
      delay: "0s",
      autoplayTimeout: 1,
      autoplayHoverPause: false,
    },
    blur: {
      style: "Gentle",
      duration: "1s",
      delay: "0s",
      autoplayTimeout: 1,
      autoplayHoverPause: false,
    },
    expand: {
      style: "Gentle",
      direction: "Right",
      duration: "1s",
      delay: "0s",
      autoplayTimeout: 1,
      autoplayHoverPause: false,
    },
    shrink: {
      style: "Gentle",
      duration: "1s",
      delay: "0s",
      autoplayTimeout: 1,
      autoplayHoverPause: false,
    },
    reveal: {
      direction: "Top",
      duration: "1s",
      delay: "0s",
      autoplayTimeout: 1,
      autoplayHoverPause: false,
    },
    shape: {
      shape: "Oval",
      duration: "1s",
      delay: "0s",
      autoplayTimeout: 1,
      autoplayHoverPause: false,
    },
    flip: {
      style: "Gentle",
      direction: "Top",
      duration: "1s",
      delay: "0s",
      autoplayTimeout: 1,
      autoplayHoverPause: false,
    },
    grow: {
      style: "Gentle",
      direction: "0",
      distance: "100px",
      duration: "1s",
      delay: "0s",
      autoplayTimeout: 1,
      autoplayHoverPause: false,
    },
    wink: {
      direction: "Horizontal",
      duration: "1s",
      delay: "0s",
      autoplayTimeout: 1,
      autoplayHoverPause: false,
    },
    slide: {
      style: "Gentle",
      direction: "Top",
      duration: "1s",
      delay: "0s",
      autoplayTimeout: 1,
      autoplayHoverPause: false,
    },
    flash: {
      duration: "1s",
      delay: "0s",
      autoplayTimeout: 1,
      autoplayHoverPause: false,
    },
  });

  const handleOptionChange = (effect, option, value) => {
    setAnimationOptions((prevOptions) => ({
      ...prevOptions,
      [effect]: {
        ...prevOptions[effect],
        [option]: value,
      },
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
          onOptionChange={(option, value) =>
            handleOptionChange(effect, option, value)
          }
        />
      ))}
    </div>
  );
}

function CarouselSlider({ effect, slides, options, onOptionChange }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    let interval;
    if (options.autoplay && !isPaused) {
      interval = setInterval(() => {
        handleNext();
      }, options.autoplayTimeout * 1000);
    }
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, options.autoplay, options.autoplayTimeout]);
  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    setActiveIndex(prevIndex);
  };
  const handleMouseEnter = () => {
    if (options.autoplayHoverPause) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (options.autoplayHoverPause) {
      setIsPaused(false);
    }
  };

  const getBlurStyleClass = () => {
    if (effect === "blur") {
      switch (options.style.toLowerCase()) {
        case "gentle":
          return "blur-gentle";
        case "moderate":
          return "blur-moderate";
        case "intense":
          return "blur-intense";
        default:
          return "blur-gentle"; // Default style
      }
    }
    return "";
  };

  const getFlipStyleClass = () => {
    if (effect === "flip") {
      switch (options.style.toLowerCase()) {
        case "gentle":
          return "flip-gentle";
        case "moderate":
          return "flip-moderate";
        case "intense":
          return "flip-intense";
        default:
          return "flip-gentle"; // Default style
      }
    }
    return "";
  };

  const getExpandStyleClass = () => {
    if (effect === "expand") {
      switch (options.style.toLowerCase()) {
        case "gentle":
          return "expand-gentle";
        case "moderate":
          return "expand-moderate";
        case "intense":
          return "expand-intense";
        default:
          return "expand-gentle"; // Default style
      }
    }
    return "";
  };

  const getShrinkStyleClass = () => {
    if (effect === "shrink") {
      switch (options.style.toLowerCase()) {
        case "gentle":
          return "shrink-gentle";
        case "moderate":
          return "shrink-moderate";
        case "intense":
          return "shrink-intense";
        default:
          return "shrink-gentle"; // Default style
      }
    }
    return "";
  };

  const getShapeStyleClass = () => {
    if (effect === "shape") {
      switch (options.shape.toLowerCase()) {
        case "oval":
          return "shape-oval";
        case "circle":
          return "shape-circle";
        case "square":
          return "shape-square";
        case "diamond":
          return "shape-diamond";
        default:
          return "";
      }
    }
    return "";
  };

  const getRevealStyleClass = () => {
    if (effect === "reveal") {
      switch (options.direction.toLowerCase()) {
        case "top":
          return "reveal-top";
        case "bottom":
          return "reveal-bottom";
        case "left":
          return "reveal-left";
        case "right":
          return "reveal-right";
      }
    }
    return "";
  };

  const getFloatDirectionStyle = () => {
    if (effect === "float") {
      if (!options.direction) return {};
      switch (options.direction.toLowerCase()) {
        case "top":
          return { transform: "translateY(-100%)" };
        case "bottom":
          return { transform: "translateY(100%)" };
        case "left":
          return { transform: "translateX(-100%)" };
        case "right":
          return { transform: "translateX(100%)" };
        default:
          return {};
      }
      return "";
    }
  };

  const getFlipAnimation = () => {
    if (effect === "flip") {
      if (!options.direction) return "";
      switch (options.direction.toLowerCase()) {
        case "top":
          return "flipTop";
        case "bottom":
          return "flipBottom";
        case "left":
          return "flipLeft";
        case "right":
          return "flipRight";
        default:
          return "";
      }
    }
    return "";
  };

  const getExpandAnimation = () => {
    if (effect === "expand") {
      if (!options.direction) return {};
      switch (options.direction.toLowerCase()) {
        case "right":
          return "expandRight";
        case "top right":
          return "expandTopRight";
        case "top":
          return "expandTop";
        case "top":
          return "expandTop";
        case "top left":
          return "expandTopLeft";
        case "left":
          return "expandLeft";
        case "bottom left":
          return "expandBottomLeft";
        case "bottom":
          return "expandBottom";
        case "bottom right":
          return "expandBottomRight";
        case "center":
          return "expandCenter";
        default:
          return "expandRight"; // Default direction
      }
    }
    return "";
  };
  return (
    <div className={`carousel-container  ${effect}}`}>
      <h2>{effect.charAt(0).toUpperCase() + effect.slice(1)} Animation</h2>
      <div className="animation-options">
        {effect === "fade" && (
          <>
            <label>Duration:</label>
            <input
              type="text"
              value={options.duration}
              onChange={(e) => onOptionChange("duration", e.target.value)}
            />
            <label>Delay:</label>
            <input
              type="text"
              value={options.delay}
              onChange={(e) => onOptionChange("delay", e.target.value)}
            />
          </>
        )}
        {effect === "float" && (
          <>
            <label>Direction:</label>
            <select
              value={options.direction}
              onChange={(e) => onOptionChange("direction", e.target.value)}
            >
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
            <label>Duration:</label>
            <input
              type="text"
              value={options.duration}
              onChange={(e) => onOptionChange("duration", e.target.value)}
            />
            <label>Delay:</label>
            <input
              type="text"
              value={options.delay}
              onChange={(e) => onOptionChange("delay", e.target.value)}
            />
          </>
        )}
        {effect === "blur" && (
          <>
            <label>Motion Style:</label>
            <select
              value={options.style}
              onChange={(e) => onOptionChange("style", e.target.value)}
            >
              <option>Gentle</option>
              <option>Moderate</option>
              <option>Intense</option>
            </select>
            <label>Duration:</label>
            <input
              type="text"
              value={options.duration}
              onChange={(e) => onOptionChange("duration", e.target.value)}
            />
            <label>Delay:</label>
            <input
              type="text"
              value={options.delay}
              onChange={(e) => onOptionChange("delay", e.target.value)}
            />
          </>
        )}
        {effect === "expand" && (
          <>
            <label>Motion Style:</label>
            <select
              value={options.style}
              onChange={(e) => onOptionChange("style", e.target.value)}
            >
              <option>Gentle</option>
              <option>Moderate</option>
              <option>Intense</option>
            </select>
            <label>Direction:</label>
            <select
              value={options.direction}
              onChange={(e) => onOptionChange("direction", e.target.value)}
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
              onChange={(e) => onOptionChange("duration", e.target.value)}
            />
            <label>Delay:</label>
            <input
              type="text"
              value={options.delay}
              onChange={(e) => onOptionChange("delay", e.target.value)}
            />
          </>
        )}
        {effect === "shrink" && (
          <>
            <label>Motion Style:</label>
            <select
              value={options.style}
              onChange={(e) => onOptionChange("style", e.target.value)}
            >
              <option>Gentle</option>
              <option>Moderate</option>
              <option>Intense</option>
            </select>
            <label>Duration:</label>
            <input
              type="text"
              value={options.duration}
              onChange={(e) => onOptionChange("duration", e.target.value)}
            />
            <label>Delay:</label>
            <input
              type="text"
              value={options.delay}
              onChange={(e) => onOptionChange("delay", e.target.value)}
            />
          </>
        )}
        {effect === "reveal" && (
          <>
            <label>Direction:</label>
            <select
              value={options.direction}
              onChange={(e) => onOptionChange("direction", e.target.value)}
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
              onChange={(e) => onOptionChange("duration", e.target.value)}
            />
            <label>Delay:</label>
            <input
              type="text"
              value={options.delay}
              onChange={(e) => onOptionChange("delay", e.target.value)}
            />
          </>
        )}
        {effect === "shape" && (
          <>
            <label>Shape:</label>
            <select
              value={options.shape}
              onChange={(e) => onOptionChange("shape", e.target.value)}
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
              onChange={(e) => onOptionChange("duration", e.target.value)}
            />
            <label>Delay:</label>
            <input
              type="text"
              value={options.delay}
              onChange={(e) => onOptionChange("delay", e.target.value)}
            />
          </>
        )}
        {effect === "flip" && (
          <>
            <label>Motion Style:</label>
            <select
              value={options.style}
              onChange={(e) => onOptionChange("style", e.target.value)}
            >
              <option>Gentle</option>
              <option>Moderate</option>
              <option>Intense</option>
            </select>
            <label>Direction:</label>
            <select
              value={options.direction}
              onChange={(e) => onOptionChange("direction", e.target.value)}
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
              onChange={(e) => onOptionChange("duration", e.target.value)}
            />
            <label>Delay:</label>
            <input
              type="text"
              value={options.delay}
              onChange={(e) => onOptionChange("delay", e.target.value)}
            />
          </>
        )}
        {effect === "grow" && (
          <>
            <label>Motion Style:</label>
            <select
              value={options.style}
              onChange={(e) => onOptionChange("style", e.target.value)}
            >
              <option>Gentle</option>
              <option>Moderate</option>
              <option>Intense</option>
            </select>
            <label>Direction (0-360°):</label>
            <input
              type="text"
              value={options.direction}
              onChange={(e) => onOptionChange("direction", e.target.value)}
            />
            <label>Distance:</label>
            <input
              type="text"
              value={options.distance}
              onChange={(e) => onOptionChange("distance", e.target.value)}
            />
            <label>Duration:</label>
            <input
              type="text"
              value={options.duration}
              onChange={(e) => onOptionChange("duration", e.target.value)}
            />
            <label>Delay:</label>
            <input
              type="text"
              value={options.delay}
              onChange={(e) => onOptionChange("delay", e.target.value)}
            />
          </>
        )}
        {effect === "wink" && (
          <>
            <label>Direction:</label>
            <select
              value={options.direction}
              onChange={(e) => onOptionChange("direction", e.target.value)}
            >
              <option>Horizontal</option>
              <option>Vertical</option>
            </select>
            <label>Duration:</label>
            <input
              type="text"
              value={options.duration}
              onChange={(e) => onOptionChange("duration", e.target.value)}
            />
            <label>Delay:</label>
            <input
              type="text"
              value={options.delay}
              onChange={(e) => onOptionChange("delay", e.target.value)}
            />
          </>
        )}
        {effect === "slide" && (
          <>
            <label>Motion Style:</label>
            <select
              value={options.style}
              onChange={(e) => onOptionChange("style", e.target.value)}
            >
              <option>Gentle</option>
              <option>Moderate</option>
              <option>Intense</option>
            </select>
            <label>Direction:</label>
            <select
              value={options.direction}
              onChange={(e) => onOptionChange("direction", e.target.value)}
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
              onChange={(e) => onOptionChange("duration", e.target.value)}
            />
            <label>Delay:</label>
            <input
              type="text"
              value={options.delay}
              onChange={(e) => onOptionChange("delay", e.target.value)}
            />
          </>
        )}
        {effect === "flash" && (
          <>
            <label>Duration:</label>
            <input
              type="text"
              value={options.duration}
              onChange={(e) => onOptionChange("duration", e.target.value)}
            />
            <label>Delay Between Loops:</label>
            <input
              type="text"
              value={options.delay}
              onChange={(e) => onOptionChange("delay", e.target.value)}
            />
          </>
        )}
        <label>Autoplay:</label>
        <input
          type="checkbox"
          checked={options.autoplay}
          onChange={(e) => onOptionChange("autoplay", e.target.checked)}
        />
        <label>Autoplay Timeout (ms):</label>
        <input
          type="number"
          value={options.autoplayTimeout}
          onChange={(e) => onOptionChange("autoplayTimeout", e.target.value)}
        />
        <label>Autoplay Hover Pause:</label>
        <input
          type="checkbox"
          checked={options.autoplayHoverPause}
          onChange={(e) =>
            onOptionChange("autoplayHoverPause", e.target.checked)
          }
        />
      </div>
      <div className="carousel slide carouselWidth">
        <div
          className="carousel-inner"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`carousel-item ${
                slideIndex === activeIndex ? "active" : ""
              } ${effect} ${getBlurStyleClass()} ${getExpandStyleClass()} ${getShrinkStyleClass()} ${getRevealStyleClass()} ${getShapeStyleClass()} ${getFlipStyleClass()}`}
              style={{
                ...getFloatDirectionStyle(),
                "--animation-duration": options.duration,
                "--expand-animation": getExpandAnimation(),
                "--flip-animation": getFlipAnimation(),
                "--animation-delay": options.delay,
              }}
            >
              <img
                src={slide}
                className="d-block w-100"
                alt={`Slide ${slideIndex + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={handlePrev}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={handleNext}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default App;
