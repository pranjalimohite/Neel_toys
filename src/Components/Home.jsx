import React from "react";
import { NavLink, Link } from "react-router-dom";
import Carousel from "./Carousel";

function Home() {
  return (
    <>
      <Carousel />
      <div className="my-8"></div>

      {/* Shop By Category Section */}
      <div className="bg-white flex justify-center items-center">
        <div className="w-full max-w-7xl px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#1C1C4D] mb-8 sm:mb-10">
            Shop By Category
          </h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
            <Link to="/cars" className="w-full flex justify-center">
              <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center py-6 w-64 sm:w-72 cursor-pointer transform hover:-translate-y-2 hover:scale-105 animate-fadeIn">
                <img src="/IMG_8398.jpg" alt="Cars" className="h-36 w-36 sm:h-44 sm:w-44 mb-4 object-contain rounded-lg transition-transform duration-300 hover:scale-110" />
                <h3 className="text-base sm:text-lg font-semibold text-[#1C1C4D]">Cars</h3>
              </div>
            </Link>
            <Link to="/Buses" className="w-full flex justify-center">
              <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center py-6 w-64 sm:w-72 cursor-pointer transform hover:-translate-y-2 hover:scale-105 animate-fadeIn delay-100">
                <img src="/IMG_7310.jpg" alt="Buses and Trucks" className="h-36 w-36 sm:h-44 sm:w-44 mb-4 object-contain rounded-lg transition-transform duration-300 hover:scale-110" />
                <h3 className="text-base sm:text-lg font-semibold text-[#1C1C4D]">Buses and Trucks</h3>
              </div>
            </Link>
            <Link to="/Jeep" className="w-full flex justify-center">
              <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center py-6 w-64 sm:w-72 cursor-pointer transform hover:-translate-y-2 hover:scale-105 animate-fadeIn delay-200">
                <img src="/IMG_7344.jpg" alt="Jeeps and Van" className="h-36 w-36 sm:h-44 sm:w-44 mb-4 object-contain rounded-lg transition-transform duration-300 hover:scale-110" />
                <h3 className="text-base sm:text-lg font-semibold text-[#1C1C4D]">Jeeps and Van</h3>
              </div>
            </Link>
            <Link to="/Plane" className="w-full flex justify-center">
              <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center py-6 w-64 sm:w-72 cursor-pointer transform hover:-translate-y-2 hover:scale-105 animate-fadeIn delay-300">
                <img src="/IMG_7372.jpg" alt="Aeroplane" className="h-36 w-36 sm:h-44 sm:w-44 mb-4 object-contain rounded-lg transition-transform duration-300 hover:scale-110" />
                <h3 className="text-base sm:text-lg font-semibold text-[#1C1C4D]">Aeroplane</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Products */}
      <div className="bg-white px-2 sm:px-4 py-8 sm:py-10">
  <div className="text-center mb-8 sm:mb-10">
    <h2 className="text-2xl sm:text-4xl font-bold text-gray-700">Latest Products</h2>
    <p className="text-gray-600 mt-2 text-lg sm:text-2xl">
      Discover the perfect new range of automobiles that you need for your toy collection!
    </p>
  </div>

  <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 max-w-5xl mx-auto">
    <div className="border border-gray-200 shadow-md rounded-lg overflow-hidden p-4 bg-white transition-transform duration-300 hover:scale-105 animate-fadeIn">
      <img src="/IMG_0240.jpg" alt="Dzire" className="w-full h-48 sm:h-64 object-contain mb-4" />
      <div className="flex items-center gap-2 mt-2">
        <p className="text-xl sm:text-3xl font-medium">Dzire</p>
      </div>
    </div>

    <div className="border border-gray-200 shadow-md rounded-lg overflow-hidden p-4 bg-white transition-transform duration-300 hover:scale-105 animate-fadeIn delay-100">
      <img src="/IMG_0245.jpg" alt="Innova" className="w-full h-48 sm:h-64 object-contain mb-4" />
      <div className="flex items-center gap-2 mt-2">
        <p className="text-xl sm:text-3xl font-medium">Innovaa</p>
      </div>
    </div>
  </div>
</div>

      {/* Animations (TailwindCSS custom keyframes) */}
      <style>
        {`
          @media (max-width: 640px) {
            .w-72 { width: 90vw !important; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s both;
          }
          .animate-fadeIn.delay-100 { animation-delay: 0.1s; }
          .animate-fadeIn.delay-200 { animation-delay: 0.2s; }
          .animate-fadeIn.delay-300 { animation-delay: 0.3s; }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </>
  );
}

export default Home;