import React from 'react';
import aboutus from "../assets/Images/about_us.webp"
import Display from "../assets/Images/DisplayP.webp"
import trade from "../assets/Images/TradeMark.webp"
import bg3 from "../assets/Images/bg3.webp"

function AboutUs() {
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

      {/* Welcome Section */}
      <>
      <div>
        <img className="h-[400px] w-full" src={aboutus} alt="AboutUs" loading="lazy"/>
      </div>
      <section className="py-12 px-2 sm:px-6 lg:px-8 bg-amber-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 animate-slideDown">
              WELCOME TO NEELTOYS
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-2xl text-gray-600 mb-4 sm:mb-6 max-w-3xl mx-auto animate-fadeIn delay-100">
              Welcome to Neel Toys, where we believe in the magic of play!
            </h2>
            <div className="text-gray-600 space-y-4 max-w-4xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl animate-fadeIn delay-200">
                Our journey began with a simple idea: to create toys that inspire imagination and bring joy to children of all ages.
              </p>
              <p className="text-base sm:text-lg md:text-xl animate-fadeIn delay-300">
                At Neel Toys, we are committed to quality, safety, and sustainability. Each toy is crafted with care, using non-toxic materials and designed to withstand the test of time.
              </p>
              <h2 className="text-lg sm:text-2xl text-black animate-fadeIn delay-400">
                Join us in our mission to make childhood magical, one toy at a time!
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-12 px-2 sm:px-6 lg:px-8 bg-gray-50 animate-fadeIn">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 animate-slideDown">
      OUR MISSION AND VISION
    </h1>
    <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-12 animate-fadeIn delay-100">
      Our goal is to deliver safe, durable, and exciting toys that not only entertain but also help children understand the world of transportation in fun and engaging ways.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slideLeft">
        <div className="text-xl sm:text-2xl font-bold text-yellow-700 mb-3 sm:mb-4">Our Mission</div>
        <p className="text-gray-600 text-base sm:text-lg">
          At Neel Toys, our mission is to spark curiosity and fuel imagination through play. We specialize in crafting high-quality, transport-themed toys—from cars and trucks to buses —that inspire kids to explore, learn, and dream big.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center animate-fadeIn delay-300">
        <img
          src={Display}
          alt="Display Photo"
          loading="lazy"
          className="w-40 h-40 sm:w-56 sm:h-56 object-cover mx-auto rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slideRight">
        <div className="text-xl sm:text-2xl font-bold text-yellow-700 mb-3 sm:mb-4">Our Vision</div>
        <p className="text-gray-600 text-base sm:text-lg">
          At Neel Toys, our vision is to become a trusted leader in the world of transport-themed toys by reimagining how children learn, play, and grow through motion and imagination.
        </p>
        </div>
    </div>
  </div>
</section>
      

      {/* Certified By Section */}
      <div
        className="w-full h-[140px] sm:h-[200px] bg-cover bg-center flex items-center justify-center animate-fadeIn"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <h1 className="text-gray-800 text-2xl sm:text-5xl font-bold drop-shadow-lg">Certified By</h1>
      </div>

      <div className="w-full flex flex-col items-center gap-6 my-6 sm:my-8 animate-fadeIn delay-200">
        <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 sm:p-8 flex justify-center items-center">
          <img
            src={trade}
            alt="Trademark"
            loading="lazy"
            className="h-24 w-40 sm:h-40 sm:w-64 object-contain"
          />
          
        </div>
        <h2>BIS CERTIFIED TOYS</h2>
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
          .animate-fadeIn.delay-100 { animation-delay: 0.1s; }
          .animate-fadeIn.delay-200 { animation-delay: 0.2s; }
          .animate-fadeIn.delay-300 { animation-delay: 0.3s; }
          .animate-fadeIn.delay-400 { animation-delay: 0.4s; }
          .animate-slideLeft {
    animation: slideLeft 0.8s both;
  }
  .animate-slideRight {
    animation: slideRight 0.8s both;
  }
  @keyframes slideLeft {
    from { opacity: 0; transform: translateX(-40px);}
    to { opacity: 1; transform: translateX(0);}
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(40px);}
    to { opacity: 1; transform: translateX(0);}
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
    </>
  );
}
export default AboutUs;