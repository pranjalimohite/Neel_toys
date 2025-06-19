import React from 'react';
import { NavLink } from "react-router-dom";

const productCards = [
  {
    img: "IMG_0240.jpg",
    alt: "Cars & SUVs | MUVs",
    title: "Cars & SUVs | MUVs",
    link: "/cars",
    delay: "0s"
  },
  {
    img: "IMG_7324.jpg",
    alt: "Trucks and Buses",
    title: "Trucks and Buses",
    link: "/Buses",
    delay: "0.1s"
  },
  {
    img: "IMG_7354.jpg",
    alt: "Bikes",
    title: "Bikes",
    link: "/Bikes",
    delay: "0.2s"
  },
  {
    img: "IMG_7372.jpg",
    alt: "Aeroplanes",
    title: "Aeroplanes",
    link: "/Plane",
    delay: "0.3s"
  },
  {
    img: "IMG_7321.jpg",
    alt: "Jeeps & Van",
    title: "Jeeps & Van",
    link: "/Jeep",
    delay: "0.4s"
  }
];

const Products = () => {
  return (
    <>
      <div
        className="w-full h-[140px] sm:h-[200px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('bg1.jpg')" }}
      >
        <h1 className="text-gray-800 text-3xl sm:text-5xl font-bold drop-shadow-lg animate-slideDown">Our Collections</h1>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10 py-6 px-2 sm:px-4 max-w-6xl mx-auto">
        {productCards.map((card, idx) => (
          <div
            key={idx}
            className="w-full bg-gray-100 py-4 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between rounded-md shadow-sm mx-auto animate-fadeIn"
            style={{ animationDelay: card.delay }}
          >
            {/* Logo */}
            <img
              src={card.img}
              alt={card.alt}
              className="h-28 w-28 sm:h-40 sm:w-40 object-contain mb-4 sm:mb-0 sm:mr-6 rounded-lg shadow transition-transform duration-300 hover:scale-105"
            />

            {/* Title */}
            <h2 className="text-xl sm:text-3xl font-semibold text-gray-800 text-center flex-1 animate-slideLeft">
              {card.title}
            </h2>

            {/* Button */}
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <NavLink to={card.link}>
                <button className="bg-gray-900 text-white w-40 sm:w-52 text-base sm:text-xl px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-transform duration-300 hover:scale-105 animate-slideRight">
                  View All
                  <span className="text-xl">→</span>
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.8s both;
          }
          .animate-slideDown {
            animation: slideDown 0.8s both;
          }
          .animate-slideLeft {
            animation: slideLeft 0.8s both;
          }
          .animate-slideRight {
            animation: slideRight 0.8s both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes slideLeft {
            from { opacity: 0; transform: translateX(-40px);}
            to { opacity: 1; transform: translateX(0);}
          }
          @keyframes slideRight {
            from { opacity: 0; transform: translateX(40px);}
            to { opacity: 1; transform: translateX(0);}
          }
        `}
      </style>
    </>
    );
};

export default Products;