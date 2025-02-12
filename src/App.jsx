import React, { useEffect } from "react";
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
import Career from "./components/Career";
import { Toaster } from "react-hot-toast";
import useAppStore from "./store/useAppStore";
import DashboardNav from "./dashboard/dashboardNav";
import ProtectedRoute from "./dashboard/ProtectedRoute";
import { Loader } from "lucide-react";

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
  const { user, isCheckingAuth, authCheck } = useAppStore();
  const location = useLocation();
  console.log("auth user is here : ", user);
  // console.log("Token being sent: ", document.cookie);
  useEffect(() => {
    authCheck();
  }, [authCheck]);

  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 w-10 h-10" />
        </div>
      </div>
    );
  }

  const isDashboardRoute = location.pathname.startsWith("/dashboard/");

  // Define the routes where you want to remove the `home-container`
  const noContainerRoutes = [
    "/contact-us",
    "/pricing",
    "/morefeatures",
    "/career",
    "/dashboard/:name",
  ];

  // Check if the current path matches any route in `noContainerRoutes`
  const isNoContainer = noContainerRoutes.some((route) =>
    location.pathname.startsWith(route.replace(":name", ""))
  );

  return (
    <div className={isNoContainer ? "" : "home-container"}>
      {/* Show Navbar only if NOT on the dashboard route */}
      {!isDashboardRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/morefeatures" element={<MoreFeatures />} />
        <Route path="/career" element={<Career />} />

        {/* Protected Route for Dashboard */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard/:name" element={<DashboardNav />} />
        </Route>
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
