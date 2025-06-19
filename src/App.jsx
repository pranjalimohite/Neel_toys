import React from "react";
import Header from "./Header/Header.jsx";
import './index.css';
import './App.css';
import Home from "./Components/Home.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import Footer from "./Footer/Footer.jsx";
import Products from "./Components/Products.jsx";
import Cars from "./Products/Cars.jsx";


function App() {
  return (
    <>
    <Header/>
    <Cars/>
    <Footer/>
    
    </>
  );
}
export default App;