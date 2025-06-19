import React, { useState } from "react";

const bikes = [
  {
    name: "Super Bike",
    model: "RS-2024",
    size: "Length - 13cm, Height - 10cm, Width - 3.5cm",
    colors: ["red", "black", "yellow", "white", "SteelBlue"],
    images: [
      "IMG_7354.jpg",
      "IMG_7351.jpg",
      "IMG_7352.jpg"
    ],
  },
  // ...other bikes
];

function Bikes() {
  const [selectedBike, setSelectedBike] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const openModal = (bike) => {
    setSelectedBike(bike);
    setMainImage(bike.images[0]);
  };

  const closeModal = () => {
    setSelectedBike(null);
    setMainImage("");
  };

  return (
    <>
      <div className="w-full h-[140px] sm:h-[200px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('bg1.jpg')" }}>
        <h1 className="text-gray-800 text-3xl sm:text-5xl font-bold drop-shadow-lg animate-slideDown">BIKES</h1>
      </div>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-2 sm:px-4 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 max-w-6xl mx-auto">
          {bikes.map((bike, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex flex-col items-center p-4 sm:p-8 w-full sm:w-96 h-[420px] sm:h-[520px] animate-fadeIn"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Always show the first image on the card */}
              <img
                src={bike.images[0]}
                alt={bike.name}
                className="w-36 h-36 sm:w-60 sm:h-60 object-contain mb-4 sm:mb-6 rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl sm:text-4xl font-semibold mb-2 sm:mb-4 text-[#1C1C4D]">{bike.name}</h3>
              <button
                className="mt-auto bg-[#4f3a6b] text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-[#5a3f7c] transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(bike)}
              >
                More Information
              </button>
            </div>
          ))}
        </div>

        {/* Modal for More Info */}
        {selectedBike && (
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
                  alt={selectedBike.name}
                  className="w-52 h-52 sm:w-96 sm:h-96 object-contain rounded-lg mb-4"
                />
                <div className="flex gap-2 flex-wrap justify-center">
                  {selectedBike.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className={`w-10 h-10 sm:w-20 sm:h-20 object-contain rounded cursor-pointer border ${mainImage === img ? "border-[#4f3a6b] border-2" : "border-gray-300"}`}
                      onClick={() => setMainImage(img)}
                    />
                  ))}
                </div>
              </div>
              {/* Right: Info */}
              <div className="flex-1 flex flex-col justify-center mt-6 md:mt-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#1C1C4D]">{selectedBike.name}</h3>
                <ul className="text-lg sm:text-xl space-y-2 sm:space-y-4">
                  <li><strong>Model:</strong> {selectedBike.model}</li>
                  <li><strong>Size:</strong> {selectedBike.size}</li>
                  <li className="flex items-center gap-2 flex-wrap">
                    <strong>Color Available:</strong>
                    {selectedBike.colors && selectedBike.colors.length > 0 ? (
                      selectedBike.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="inline-block w-5 h-5 sm:w-6 sm:h-6 rounded-sm border border-gray-300"
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

export default Bikes;