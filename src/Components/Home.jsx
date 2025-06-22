import React from "react";
import { NavLink, Link } from "react-router-dom";
import Carousel from "./Carousel";
import car1 from "../assets/Images/IMG_0226.webp"
import bus1 from "../assets/Images/IMG_7310.webp"
import jeep1 from "../assets/Images/IMG_7344.webp"
import plane1 from "../assets/Images/IMG_7372.webp"
import D2 from "../assets/Images/IMG_0240.webp";
import D19 from "../assets/Images/IMG_0245.webp"

function Home() {
  // WhatsApp number (in international format, without +)
  const whatsappNumber = "919393090909"; // Change to your number

  return (
    <>
      <Carousel />
      <div className="my-8"></div>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full shadow-lg p-3 hover:bg-green-600 transition-colors"
        title="Chat with us on WhatsApp"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.029-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.318h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.455-4.438 9.889-9.895 9.889zm8.413-18.303A11.815 11.815 0 0012.05 0C5.495 0 .06 5.435.058 12.086c0 2.13.557 4.209 1.615 6.033L0 24l6.063-1.616a11.88 11.88 0 005.982 1.527h.005c6.554 0 11.989-5.435 11.991-12.086a11.86 11.86 0 00-3.486-8.464z" />
        </svg>
      </a>

      {/* Shop By Category Section */}
      <div className="bg-white flex justify-center items-center">
        <div className="w-full max-w-7xl px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#1C1C4D] mb-8 sm:mb-10">
            Shop By Category
          </h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
            <Link to="/cars" className="w-full flex justify-center">
              <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center py-6 w-64 sm:w-72 cursor-pointer transform hover:-translate-y-2 hover:scale-105 animate-fadeIn">
                <img src={car1} alt="Cars" loading="lazy" className="h-36 w-36 sm:h-44 sm:w-44 mb-4 object-contain rounded-lg transition-transform duration-300 hover:scale-110" />
                <h3 className="text-base sm:text-lg font-semibold text-[#1C1C4D]">Cars</h3>
              </div>
            </Link>
            <Link to="/Buses" className="w-full flex justify-center">
              <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center py-6 w-64 sm:w-72 cursor-pointer transform hover:-translate-y-2 hover:scale-105 animate-fadeIn delay-100">
                <img src={bus1} alt="Buses and Trucks" loading="lazy" className="h-36 w-36 sm:h-44 sm:w-44 mb-4 object-contain rounded-lg transition-transform duration-300 hover:scale-110" />
                <h3 className="text-base sm:text-lg font-semibold text-[#1C1C4D]">Buses and Trucks</h3>
              </div>
            </Link>
            <Link to="/Jeep" className="w-full flex justify-center">
              <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center py-6 w-64 sm:w-72 cursor-pointer transform hover:-translate-y-2 hover:scale-105 animate-fadeIn delay-200">
                <img src={jeep1} alt="Jeeps and Van"  loading="lazy" className="h-36 w-36 sm:h-44 sm:w-44 mb-4 object-contain rounded-lg transition-transform duration-300 hover:scale-110" />
                <h3 className="text-base sm:text-lg font-semibold text-[#1C1C4D]">Jeeps and Van</h3>
              </div>
            </Link>
            <Link to="/Plane" className="w-full flex justify-center">
              <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center py-6 w-64 sm:w-72 cursor-pointer transform hover:-translate-y-2 hover:scale-105 animate-fadeIn delay-300">
                <img src={plane1} alt="Aeroplane" loading="lazy" className="h-36 w-36 sm:h-44 sm:w-44 mb-4 object-contain rounded-lg transition-transform duration-300 hover:scale-110" />
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
            <img src={D2} alt="Dzire" loading="lazy" className="w-full h-48 sm:h-64 object-contain mb-4" />
            <div className="flex items-center gap-2 mt-2">
              <p className="text-xl sm:text-3xl font-medium">Dzire</p>
            </div>
          </div>

          <div className="border border-gray-200 shadow-md rounded-lg overflow-hidden p-4 bg-white transition-transform duration-300 hover:scale-105 animate-fadeIn delay-100">
            <img src={D19} alt="Innova" loading="lazy" className="w-full h-48 sm:h-64 object-contain mb-4" />
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