import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Products2 from "./components/Products/Products2";
import TopProducts from "./components/Products/TopProducts";
import Banner from "./components/Banner/Banner";

import AOS from "aos";
import "aos/dist/aos.css"

import { useEffect } from "react";
import Suscribe from "./components/Banner/Suscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration:800,
      easing: "ease-in-out",
      delay: 100
    });
    AOS.refresh();
  },[])

  return (
    <>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Suscribe/>
      <Products2/>
      <Testimonials/>
      <Footer/>
    </>
  )

}

export default App
