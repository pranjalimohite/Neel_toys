import React from 'react';

function AboutUs() {
  return (
    <>
      {/* Welcome Section */}

      <>
      <div>
        <img className="h-[400px] w-full" src="/about_us.jpg" alt="AboutUs" />
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
          src="/DisplayP.jpeg"
          alt="Display Photo"
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
        style={{ backgroundImage: "url('bg3.jpg')" }}
      >
        <h1 className="text-gray-800 text-2xl sm:text-5xl font-bold drop-shadow-lg">Certified By</h1>
      </div>

      <div className="w-full flex flex-col items-center gap-6 my-6 sm:my-8 animate-fadeIn delay-200">
        <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 sm:p-8 flex justify-center items-center">
          <img
            src="/TradeMark.png"
            alt="Trademark"
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