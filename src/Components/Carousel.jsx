import React, { useEffect, useState } from "react";

const slides = [
  { type: "image", src: "/n.jpeg", fit: "fill" },
  { type: "image", src: "/front1.jpeg", fit: "fill" },
  { type: "video", src: "/video1.mp4", fit: "fill" }, 
  
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