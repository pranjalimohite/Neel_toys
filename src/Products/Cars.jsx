import React, { useState } from "react";
import dzireCar from "../assets/Images/IMG_0224.jpg";
import OlaD from "../assets/Images/OlaD.jpeg";
import AmbI from "../assets/Images/AmbI.jpeg";
import OlaI from "../assets/Images/OlaI.jpeg";
import PoliceI from "../assets/Images/PoliceI.jpeg";
import TaxiD from "../assets/Images/TaxiD.jpeg";
import TaxiI from "../assets/Images/TaxiI.jpeg";
import UberD from "../assets/Images/UberD.jpeg";
import UberI from "../assets/Images/UberI.jpeg";
import D1 from "../assets/Images/IMG_0226.jpg";
import D2 from "../assets/Images/IMG_0240.jpg";
import D3 from "../assets/Images/IMG_0248.jpg";
import I1 from "../assets/Images/IMG_0252.jpg";
import IT1 from "../assets/Images/IMG_0269.jpg";
import DT1 from "../assets/Images/IMG_0271.jpg";

const cars = [
  {
    name: "INNOVAA CAR",
    size: "Length - 14.5cm, Height - 7cm, Width - 6.5cm",
    colors: ["Red", "golden", "silver", "black", "white", "yellow"],
    images: [
      "/IMG_0245.jpg",
      I1
    ],
  },
  {
    name: "INNOVAA TAXI",
    size: "Length - 14.5cm, Height - 7cm, Width - 6.5cm",
    colors: ["Black", "Yellow"],
    images: [
      TaxiI,
      IT1
    ],
  },
  {
    name: "INNOVAA POLICE ",
    size: "Length - 14.5cm, Height - 7cm, Width - 6.5cm",
    colors: ["white"],
    images: [
      PoliceI,
      
    ],
  },
  {
    name: "INNOVAA AMBULANCE",
    size: "Length - 14.5cm, Height - 7cm, Width - 6.5cm",
    colors: ["white"],
    images: [
      AmbI,
      
    ],
  },
  {
    name: "INNOVAA UBER",
    size: "Length - 14.5cm, Height - 7cm, Width - 6.5cm",
    colors: ["White"],
    images: [
      UberI,
      
    ],
  },
  {
    name: "INNOVAA OLA",
    size: "Length - 14.5cm, Height - 7cm, Width - 6.5cm",
    colors: ["white"],
    images: [
      OlaI,
      
    ],
  },
  {
    name: "DZIRE CAR",
    size: "Length - 14.8cm, Height - 7cm, Width - 7cm",
    colors: ["Red", "brown", "silver", "golden", "white", "green"],
    images: [
      dzireCar,
      D1, D2, D3
    ],
  },
  {
    name: "DZIRE TAXI",
    size: "Length - 14.8cm, Height - 7cm, Width - 7cm",
    colors: ["Black", "yellow"],
    images: [
      TaxiD,
      DT1
    ],
  },
  {
    name: "DZIRE UBER",
    size: "Length - 14.8cm, Height - 7cm, Width - 7cm",
    colors: ["white"],
    images: [
      UberD,
      
    ],
  },
  {
    name: "DZIRE OLA",
    size: "Length - 14.8cm, Height - 7cm, Width - 7cm",
    colors: ["white"],
    images: [
      OlaD,
      
    ],
  },
  {
    name: "CAR COMBO SET - 6",
    size: "6 ",
    colors: ["silver", "golden", "white", "grey", "ivory"],
    images: [
      "/IMG_8428.jpg",
      
    ],
  }
];

function Cars() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const openModal = (car) => {
    setSelectedCar(car);
    setMainImage(car.images[0]);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setMainImage("");
  };

  return (
    <>
      <div
        className="w-full h-[140px] sm:h-[200px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
      >
        <h1 className="text-gray-800 text-3xl sm:text-5xl font-bold drop-shadow-lg animate-slideDown">CARS</h1>
      </div>
      <div className="min-h-screen bg-gray-50 py-8 sm:py-10 px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {cars.map((car, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex flex-col items-center p-4 sm:p-6 aspect-square animate-fadeIn"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Always show the first image on the card */}
              <img src={car.images[0]} alt={car.name} className="w-40 h-40 sm:w-50 sm:h-50 object-contain mb-4 rounded-lg transition-transform duration-300 hover:scale-105" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#1C1C4D]">{car.name}</h3>
              <button
                className="mt-auto bg-[#4f3a6b] text-white px-4 py-2 rounded hover:bg-[#5a3f7c] transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(car)}
              >
                More Information
              </button>
            </div>
          ))}
        </div>

        {/* Modal for More Info */}
        {selectedCar && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-[98vw] max-w-6xl p-4 sm:p-10 md:p-14 relative animate-slideUp">
              <button
                className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-800"
                onClick={closeModal}
                aria-label="Close"
              >
                &times;
              </button>
              {/* Left: Large Image and Thumbnails */}
              <div className="flex-1 flex flex-col items-center justify-center mb-6 md:mb-0 md:mr-8">
                <img
                  src={mainImage}
                  alt={selectedCar.name}
                  className="w-64 h-64 sm:w-[28rem] sm:h-[28rem] object-contain rounded-lg mb-4"
                />
                <div className="flex gap-2 flex-wrap justify-center">
                  {selectedCar.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className={`w-14 h-14 sm:w-20 sm:h-20 object-contain rounded cursor-pointer border ${mainImage === img ? "border-[#4f3a6b] border-2" : "border-gray-300"}`}
                      onClick={() => setMainImage(img)}
                    />
                  ))}
                </div>
              </div>
              {/* Right: Info */}
              <div className="flex-1 flex flex-col justify-center mt-6 md:mt-0">
                <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-[#1C1C4D]">
                  {selectedCar.name}
                </h3>
                <ul className="text-lg sm:text-2xl space-y-4 sm:space-y-6">
                  {selectedCar.model && (
                    <li>
                      <strong>Model:</strong> {selectedCar.model}
                    </li>
                  )}
                  <li>
                    <strong>Size:</strong> {selectedCar.size}
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <strong>Color Available:</strong>
                    {selectedCar.colors && selectedCar.colors.length > 0 ? (
                      selectedCar.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="inline-block w-7 h-7 sm:w-10 sm:h-10 rounded-sm border border-gray-300"
                          style={{ backgroundColor: color }}
                          title={color}
                        ></span>
                      ))
                    ) : (
                      <span className="text-gray-500 ml-2">N/A</span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
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
          .animate-slideUp {
            animation: slideUp 0.8s both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </>
  );
}

export default Cars;