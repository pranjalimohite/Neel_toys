import React, { useState } from "react";
import Bus1 from "../assets/Images/IMG_7325.webp";
import Bus2 from "../assets/Images/IMG_7326.webp";
import Bus3 from "../assets/Images/IMG_7330.webp"
import goodCarrier from "../assets/Images/IMG_7310.webp"
import goodCarrier1 from "../assets/Images/IMG_7306.webp"
import goodCarrier2 from "../assets/Images/IMG_7307.webp"
import garbageTruck from "../assets/Images/IMG_7279.webp"
import garbageTruck1 from "../assets/Images/IMG_7277.webp"
import garbageTruck2 from "../assets/Images/IMG_7278.webp"
import oliTanker from "../assets/Images/IMG_7286.webp"
import oliTanker1 from "../assets/Images/IMG_7285.webp"
import waterTanker from "../assets/Images/IMG_7298.webp"
import waterTanker1 from "../assets/Images/IMG_7296.webp"
import waterTanker2 from "../assets/Images/IMG_7299.webp"
import milkVan from "../assets/Images/IMG_7280.webp"
import milkVan1 from "../assets/Images/IMG_7283.webp"
import dumper from "../assets/Images/IMG_7303.webp"
import dumper1 from "../assets/Images/IMG_7302.webp"
import dumper2 from "../assets/Images/IMG_7305.webp"
import bg1 from "../assets/Images/bg1.webp"

const buses = [
  {
    name: "DOUBLE DECKER BUS DELUX",
    size: "Length - 13cm, Height - 5.5cm, Width - 3.5cm",
    colors: ["Red"],
    images: [
      Bus3,
      Bus1,
      Bus2
    ],
  },
  {
    name: "GOODS CARRIER",
    size: "Length - 15cm, Height - 8cm, Width - 6cm",
    colors: ["brown", "blue", "white", "orange"],
    images: [
      goodCarrier,
      goodCarrier1,
      goodCarrier2
    ],
  },
  {
    name: "GARBAGE TRUCK",
    size: "Length - 15cm, Height - 7cm, Width - 6.5cm ",
    colors: ["ivory", "brown", "blue", "white", "orange"],
    images: [
      garbageTruck,
      garbageTruck1,
      garbageTruck2
    ],
  },
  {
    name: "OIL TANKER",
    size: "Length - 16cm, Height - 8cm, Width - 6.5cm ",
    colors: ["ivory", "brown", "blue", "white", "orange"],
    images: [
      oliTanker,
      oliTanker1
    ],
  },
  {
    name: "WATER TANKER",
    size: "Length - 16cm, Height - 8cm, Width - 6.5cm ",
    colors: ["ivory", "brown", "blue", "white", "orange"],
    images: [
      waterTanker,
      waterTanker1,
      waterTanker2
    ],
  },
  {
    name: "MILK VAN",
    size: "Length - 16cm, Height - 7cm, Width - 6cm ",
    colors: ["ivory", "brown", "blue", "white", "orange"],
    images: [
      milkVan,
      milkVan1
    ],
  },
  {
    name: "DUMPER TRUCK",
    size: "Length - 15cm, Height - 8cm, Width - 6.5cm ",
    colors: ["ivory", "brown", "blue", "white", "orange"],
    images: [
      dumper,
      dumper1,
      dumper2
    ],
  },
];

function Buses() {
  const [selectedBus, setSelectedBus] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const openModal = (bus) => {
    setSelectedBus(bus);
    setMainImage(bus.images[0]);
  };

  const closeModal = () => {
    setSelectedBus(null);
    setMainImage("");
  };

  return (
    <>
      <div
        className="w-full h-[140px] sm:h-[200px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <h1 className="text-gray-800 text-3xl sm:text-5xl font-bold drop-shadow-lg animate-slideDown">BUSES AND TRUCK</h1>
      </div>
      <div className="min-h-screen bg-gray-50 py-8 sm:py-10 px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {buses.map((bus, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex flex-col items-center p-4 sm:p-6 aspect-square animate-fadeIn"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Always show the first image on the card */}
              <img src={bus.images[0]} alt={bus.name} loading="lazy" className="w-36 h-36 sm:w-45 sm:h-45 object-contain mb-4 rounded-lg transition-transform duration-300 hover:scale-105" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#1C1C4D]">{bus.name}</h3>
              <button
                className="mt-auto bg-[#4f3a6b] text-white px-4 py-2 rounded hover:bg-[#5a3f7c] transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(bus)}
              >
                More Information
              </button>
            </div>
          ))}
        </div>

        {/* Modal for More Info */}
        {selectedBus && (
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
                  alt={selectedBus.name}
                  loading="lazy"
                  className="w-64 h-64 sm:w-[30rem] sm:h-[30rem] object-contain rounded-lg mb-4"
                />
                <div className="flex gap-2 flex-wrap justify-center">
                  {selectedBus.images.map((img, idx) => (
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
                <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-[#1C1C4D]">
                  {selectedBus.name}
                </h3>
                <ul className="text-lg sm:text-2xl space-y-4 sm:space-y-6">
                  {selectedBus.model && (
                    <li>
                      <strong>Model:</strong> {selectedBus.model}
                    </li>
                  )}
                  <li>
                    <strong>Size:</strong> {selectedBus.size}
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <strong>Color Available:</strong>
                    {selectedBus.colors && selectedBus.colors.length > 0 ? (
                      selectedBus.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="inline-block w-7 h-7 sm:w-9 sm:h-9 rounded-sm border border-gray-300"
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

export default Buses;
