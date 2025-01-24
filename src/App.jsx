import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Privacy from "./PrivacyManagement/PrivacyManagement";
import Features from "./Features/Features";
import Testimonials from "./Testimonials/Testimonials";
import Join from "./JoinUs/Joinus";
import Product from "./ProductNews/Productnews";
import "./index.css";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import MoreFeatures from "./components/MoreFeatures";

const Home = () => {
  return (
    <>
      <Hero />
      <Privacy />
      <Features />
      <Testimonials />
      <Join />
      <Product />
      <Footer />
    </>
  );
};

const App = () => {
  const location = useLocation();

  // Define the routes where you want to remove the `home-container`
  const noContainerRoutes = ["/contact-us", "/pricing", "/morefeatures"];

  // Check if the current path matches any route in `noContainerRoutes`
  const isNoContainer = noContainerRoutes.includes(location.pathname);

  return (
    <div className={isNoContainer ? "" : "home-container"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/morefeatures" element={<MoreFeatures />} />
      </Routes>
    </div>
  );
};

export default App;
