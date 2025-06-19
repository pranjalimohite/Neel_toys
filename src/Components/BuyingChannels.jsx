import React from 'react';

function BuyingChannels() {
  return (
    <>
      <div
        className="w-full h-[140px] sm:h-[200px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/bg3.jpg')" }}
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