import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {
  const [country, setCountry] = useState("IN");
  const countryCodes = { IN: "+91", US: "+1", UK: "+44" };
  const form = useRef();

  // WhatsApp number (in international format, without +)
  const whatsappNumber = "919393090909"; // Change to your number

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_vyr60sb",
      "template_zimbrpa",
      form.current,
      "qBHjY0mvkpdwJqasK"
    )
    .then(
      (result) => {
        alert("Message sent!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message.");
      }
    );
  };

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

      <div className="bg-gradient-to-t from-[#523d6e] to-[#d3b8ee] text-white font-sans">
        <div className="min-h-screen flex items-center justify-center px-2 sm:px-6 py-8 sm:py-10">
          <div className="bg-[#4f3a6b] w-full max-w-6xl flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg animate-fadeIn">
            <div className="w-full md:w-1/2 px-6 sm:px-8 py-8 sm:py-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 animate-slideDown">Contact Us</h2>
              <p className="mb-6 text-base sm:text-lg leading-relaxed text-gray-200 animate-fadeIn delay-100">
                Contact Neel Toys - Where Every Message Starts a Smile!
              </p>
              <div className="text-xs sm:text-sm space-y-4">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z" /></svg>
                  <span className='text-2xl'>neeltoy67@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1l2 2m13-2h1l-2 2m0 4h1l-2 2m-13-2h1l2 2M8 21h8m-8-2h8m-8-2h8m-8-2h8m-8-2h8m-8-2h8m-8-2h8m-8-2h8" /></svg>
                  <span className='text-2xl'>Support: (+91) 9393090909</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-white text-gray-800 px-6 sm:px-8 py-8 sm:py-12 rounded-t-xl md:rounded-none md:rounded-r-xl">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 animate-slideDown">Have questions or need a toy recommendation?<br /> <br /> Reach out to us!</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-4 animate-fadeIn delay-200">
                <div className="flex flex-col md:flex-row gap-4">
                  <input name="user_name" type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" required />
                  <input name="company" type="text" placeholder="Company" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <input name="user_email" type="email" placeholder="abc123@gmail.com" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" required />
                  <div className="flex w-full gap-2">
                    <select
                      className="border border-gray-300 rounded-md px-2 py-2"
                      value={country}
                      onChange={e => setCountry(e.target.value)}
                      name="country"
                    >
                      <option value="US">US</option>
                      <option value="IN">IN</option>
                      <option value="UK">UK</option>
                    </select>
                    <input
                      name="phone"
                      type="tel"
                      placeholder={countryCodes[country]}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      required
                    />
                  </div>
                </div>
                <input name="address" type="text" placeholder="Address" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                <textarea name="message" placeholder="Type your message here" rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" required></textarea>
                <button type="submit" className="bg-[#4f3a6b] text-white px-6 py-2 rounded-md hover:bg-[#5a3f7c] transition">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 text-black font-sans">
        <section className="py-8 sm:py-12 px-2 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 animate-slideDown">GET IN TOUCH</h2>
          <div className="flex flex-col md:flex-row justify-center items-start gap-6 sm:gap-12 max-w-6xl mx-auto">
            <div className="flex-1 border border-gray-300 rounded-xl p-6 sm:p-8 bg-white shadow animate-fadeIn">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 text-teal-900 rounded-full p-4">
                  
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">ADDRESS</h3>
              <p className="text-base sm:text-xl leading-relaxed">
                102, gov estate, area, Masat,<br />
                Dadra and Nagar Haveli and Daman and Diu 
                <br />
                396240
              </p>
            </div>
            <div className="flex-1 border border-gray-300 rounded-xl p-6 sm:p-8 bg-white shadow animate-fadeIn delay-100">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 text-teal-900 rounded-full p-4">
                  
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">PHONE</h3>
              <p className="text-base sm:text-xl leading-relaxed">
                +91 9393090909<br />
                +91 9510947933 <br />
              </p>
            </div>
            <div className="flex-1 border border-gray-300 rounded-xl p-6 sm:p-8 bg-white shadow animate-fadeIn delay-200">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 text-teal-900 rounded-full p-4">
                 
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">EMAIL</h3>
              <p className="text-base sm:text-xl leading-relaxed">
                <strong>Request for Proposal</strong><br />
                neeltoy67@gmail.com
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Google Map */}
      <div className="w-full flex justify-center items-center overflow-x-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6164.428681433415!2d73.00951190677422!3d20.25139223607112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be735432af4324f%3A0x9d43dba59894654e!2sTejas%20agro%20product!5e0!3m2!1sen!2sin!4v1749724273001!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0, maxWidth: "1700px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Neel Toys Location"
        />
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

export default ContactUs;