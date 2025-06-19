import React, { useState } from "react";
import Van1 from "../assets/Images/IMG_7314.webp";
import Van2 from "../assets/Images/IMG_7316.webp";
import Van3 from "../assets/Images/IMG_7320.webp";
import Thar1 from "../assets/Images/IMG_7331.webp";
import Thar2 from "../assets/Images/IMG_7339.webp";
import Thar3 from "../assets/Images/IMG_7343.webp";
import Thar4 from "../assets/Images/IMG_7344.webp";
import Van4 from "../assets/Images/IMG_7321.webp";
import bg1 from "../assets/Images/bg1.webp"
const jeeps = [
  {
    name: "Thaar",
    size: "Length - 13cm, Height - 5.5cm, Width - 3.5cm",
    colors: ["Red", "#C0C0C0", "black", "white", "green"],
    images: [
      Thar4,
      Thar1,
      Thar2,
      Thar3
    ],
  },
  {
    name: "Ecco Dlx",
    size: "Length - 15cm, Height - 9cm, Width - 5cm",
    colors: ["SteelBlue", "silver", "white", "black", "red", "green"],
    images: [
      Van4,
      Van1,
      Van2,
      Van3,
    ],
  },
];

function Jeep() {
  const [selectedJeep, setSelectedJeep] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const openModal = (jeep) => {
    setSelectedJeep(jeep);
    setMainImage(jeep.images[0]);
  };

  const closeModal = () => {
    setSelectedJeep(null);
    setMainImage("");
  };

  return (
    <>
      <div
        className="w-full h-[140px] sm:h-[200px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <h1 className="text-gray-800 text-3xl sm:text-5xl font-bold drop-shadow-lg animate-slideDown">THAAR AND VAN</h1>
      </div>

      {/* Cards */}
      <div className="min-h-screen bg-gray-50 py-8 sm:py-10 px-2 sm:px-4 flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {jeeps.map((jeep, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex flex-col items-center p-4 sm:p-8 w-full sm:w-96 h-[380px] sm:h-[440px] animate-fadeIn"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Always show the first image on the card */}
              <img
                src={jeep.images[0]}
                alt={jeep.name}
                loading="lazy"
                className="w-32 h-32 sm:w-60 sm:h-60 object-contain mb-2 sm:mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl sm:text-3xl font-semibold mb-2 sm:mb-4 text-[#1C1C4D]">
                {jeep.name}
              </h3>
              <button
                className="mt-auto bg-[#4f3a6b] text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-[#5a3f7c] transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(jeep)}
              >
                More Information
              </button>
            </div>
          ))}
        </div>

        {/* Modal for More Info */}
        {selectedJeep && (
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
                  alt={selectedJeep.name}
                  loading="lazy"
                  className="w-52 h-52 sm:w-96 sm:h-96 object-contain rounded-lg mb-4"
                />
                <div className="flex gap-2 flex-wrap justify-center">
                  {selectedJeep.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      loading="lazy"
                      className={`w-10 h-10 sm:w-20 sm:h-20 object-contain rounded cursor-pointer border ${mainImage === img ? "border-[#4f3a6b] border-2" : "border-gray-300"}`}
                      onClick={() => setMainImage(img)}
                    />
                  ))}
                </div>
              </div>
              {/* Right: Info */}
              <div className="flex-1 flex flex-col justify-center mt-6 md:mt-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#1C1C4D]">
                  {selectedJeep.name}
                </h3>
                <ul className="text-lg sm:text-xl space-y-2 sm:space-y-4">
                  {selectedJeep.model && (
                    <li>
                      <strong>Model:</strong> {selectedJeep.model}
                    </li>
                  )}
                  <li>
                    <strong>Size:</strong> {selectedJeep.size}
                  </li>
                  <li className="flex items-center gap-2 flex-wrap">
                    <strong>Color Available:</strong>
                    {selectedJeep.colors && selectedJeep.colors.length > 0 ? (
                      selectedJeep.colors.map((color, idx) => (
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

export default Jeep;