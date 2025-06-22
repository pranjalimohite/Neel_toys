import React from 'react';
import bg3 from "../assets/Images/bg3.webp"

function BuyingChannels() {
  // WhatsApp number (in international format, without +)
  const whatsappNumber = "919393090909"; // Change to your number

  return (
    <>
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

      <div
        className="w-full h-[140px] sm:h-[200px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <h1 className="text-gray-800 text-3xl sm:text-5xl font-bold drop-shadow-lg animate-slideDown">
          Buying Channels
        </h1>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 my-6 sm:my-8">
        <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 sm:p-8 flex justify-center items-center w-72 sm:w-96 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="h-12 w-32 sm:h-20 sm:w-40 object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 sm:p-8 flex justify-center items-center w-72 sm:w-96 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <img
            src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
            alt="Flipkart"
            className="h-12 w-32 sm:h-20 sm:w-40 object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.8s both;
          }
          .animate-slideDown {
            animation: slideDown 0.8s both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </>
  );
}

export default BuyingChannels;