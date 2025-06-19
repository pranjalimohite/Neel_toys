import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Products from './Components/Products.jsx'
import ContactUs from './Components/ContactUs.jsx'
import BuyingChannels from './Components/BuyingChannels.jsx'
import Cars from './Products/Cars.jsx'
import Jeep from './Products/Jeep.jsx'
import Buses from './Products/Buses.jsx'
import Plane from './Products/Plane.jsx'
import Bikes from './Products/Bikes.jsx'




const  router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "Aboutus",
        element: <AboutUs/>

      },{
        path: "Products",
        element:<Products/>
      },{
        path: "Contactus",
        element: <ContactUs/>
      },
      {
        path: "buyingchannels",
        element: <BuyingChannels/>
      },
      {
        path: "cars",
        element: <Cars/>
      },{
    
        path: "Jeep",
        element: <Jeep />
      },
      {
    
        path: "Plane",
        element: <Plane />
      },
      {
    
        path: "Buses",
        element: <Buses />
      },{
    
        path: "Bikes",
        element: <Bikes />
      },
      
      
    ]
  }])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
