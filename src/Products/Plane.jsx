import React, { useState } from "react";
import JETR1 from "../assets/Images/IMG_7356.webp";
import JETR2 from "../assets/Images/IMG_7358.webp";
import JETD1 from "../assets/Images/IMG_7360.webp";
import JETD2 from "../assets/Images/IMG_7362.webp";
import F161 from "../assets/Images/IMG_7366.webp";
import F162 from "../assets/Images/IMG_7367.webp";
import F163 from "../assets/Images/IMG_7371.webp";
import plane2 from "../assets/Images/IMG_7355.webp";
import plane3 from "../assets/Images/IMG_7364.webp";
import plane4 from "../assets/Images/IMG_7370.webp";
import bg1 from "../assets/Images/bg1.webp"

const planes = [
  {
    name: "JET - 747 REGULAR",
    size: "Length - 19cm, Height - 4cm, Width - 17cm",
    colors: ["Red", "Blue", "ivory", "white", "grey"],
    images: [
      plane2,
      JETR1,
      JETR2,
    ],
  },
  {
    name: "JET - 747 DLX",
    size: "Length - 19cm, Height - 4cm, Width - 17cm",
    colors: ["Blue", "orange", "yellow", "#C11C84"],
    images: [
      plane3,
      JETD2,
      JETD1
    ],
  },
  {
    name: "F-16",
    size: "Length -  21cm, Height - 3cm, Width - 18cm",
    colors: ["Green", "white", "ivory", "grey", "black"],
    images: [
      plane4,
      F161,
      F162,
      F163,
    ],
  },
];

function Plane() {
  const [selectedPlane, setSelectedPlane] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const openModal = (plane) => {
    setSelectedPlane(plane);
    setMainImage(plane.images[0]);
  };

  const closeModal = () => {
    setSelectedPlane(null);
    setMainImage("");
  };

  return (
    <>
      <div
        className="w-full h-[140px] sm:h-[200px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <h1 className="text-gray-800 text-3xl sm:text-5xl font-bold drop-shadow-lg animate-slideDown">AEROPLANE</h1>
      </div>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 sm:py-10 px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-20 max-w-6xl mx-auto">
          {planes.map((plane, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex flex-col items-center p-4 sm:p-8 w-full sm:w-96 h-[380px] sm:h-[520px] animate-fadeIn"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Always show the first image on the card */}
              <img
                src={plane.images[0]}
                alt={plane.name}
                className="w-32 h-32 sm:w-60 sm:h-60 object-contain mb-4 sm:mb-6 rounded-lg transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4 text-[#1C1C4D]">
                {plane.name}
              </h3>
              <button
                className="mt-auto bg-[#4f3a6b] text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-[#5a3f7c] transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(plane)}
              >
                More Information
              </button>
            </div>
          ))}
        </div>

        {/* Modal for More Info */}
        {selectedPlane && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-[98vw] max-w-5xl p-4 sm:p-10 relative animate-slideUp">
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
                  alt={selectedPlane.name}
                  loading="lazy"
                  className="w-52 h-52 sm:w-96 sm:h-96 object-contain rounded-lg mb-4"
                />
                <div className="flex gap-2 flex-wrap justify-center">
                  {selectedPlane.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      loading="lazy"
                      alt={`Thumbnail ${idx + 1}`}
                      className={`w-10 h-10 sm:w-20 sm:h-20 object-contain rounded cursor-pointer border ${mainImage === img ? "border-[#4f3a6b] border-2" : "border-gray-300"}`}
                      onClick={() => setMainImage(img)}
                    />
                  ))}
                </div>
              </div>
              {/* Right: Info */}
              <div className="flex-1 flex flex-col justify-center mt-6 md:mt-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#1C1C4D]">
                  {selectedPlane.name}
                </h3>
                <ul className="text-lg sm:text-xl space-y-2 sm:space-y-4">
                  {selectedPlane.model && (
                    <li>
                      <strong>Model:</strong> {selectedPlane.model}
                    </li>
                  )}
                  <li>
                    <strong>Size:</strong> {selectedPlane.size}
                  </li>
                  <li className="flex items-center gap-2 flex-wrap">
                    <strong>Color Available:</strong>
                    {selectedPlane.colors && selectedPlane.colors.length > 0 ? (
                      selectedPlane.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="inline-block w-5 h-5 sm:w-7 sm:h-7 rounded-sm border border-gray-300"
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

export default Plane;