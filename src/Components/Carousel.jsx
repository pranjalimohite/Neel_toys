import React, { useEffect, useState } from "react";
import slide1 from "../assets/Images/abc.webp"
import slide2 from "../assets/Images/front1.webp"
import slide3 from "../assets/Images/video1.mp4"

const slides = [
  { type: "image", src: slide1, fit: "fill" },
  { type: "image", src: slide2, fit: "fill" },
  { type: "video", src: slide3, fit: "fill" }, 
  
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.carouselContainer}>
      {slides.map((slide, index) =>
        slide.type === "image" ? (
          <img
            key={index}
            src={slide.src}
            loading="lazy"
            alt={`Slide ${index + 1}`}
            style={{
              ...styles.image,
              objectFit: slide.fit,
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 1 : 0,
            }}
          />
        ) : (
          <video
            key={index}
            src={slide.src}
            style={{
              ...styles.image,
              objectFit: slide.fit,
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 1 : 0,
            }}
            autoPlay
            loop
            muted
            playsInline
          />
        )
      )}
    </div>
  );
}

const styles = {
  carouselContainer: {
    position: "relative",
    width: "100%",
    height: "500px",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "500px",
    transition: "opacity 0.8s ease-in-out",
  },
};

export default Carousel;