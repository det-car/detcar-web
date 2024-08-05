// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/sections/topbar/Topbar";
import Hero from "./components/sections/hero/Hero";
import ServicesSection from "./components/sections/services/ServicesSection";
import ContactSection from "./components/sections/contact/ContactSection";
import Footer from "./components/sections/footer/Footer";
import Kontakt from "./components/pages/Kontakt";
import Datenschutz from "./components/pages/Datenschutz";
import ScrollUp from "./components/ScrollUp";
import Loader from "./components/Loader";

import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {" "}
      {/* Add flex container */}
      <Router>
        {/* Topbar will be displayed on all pages */}
        <Topbar />

        <div className="flex-grow">
          {" "}
          {/* Make this container grow to fill the space */}
          {/* Define the routes for the application */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Main page components */}
                  <Hero />
                  <ServicesSection />
                  <ContactSection />
                  <Loader />
                </>
              }
            />
            {/* Kontakt page */}
            <Route
              path="/kontakt"
              element={
                <>
                  <Kontakt />
                  <Loader />
                </>
              }
            />
            <Route
              path="/datenschutz"
              element={
                <>
                  <Datenschutz />
                </>
              }
            />
          </Routes>
        </div>

        {/* Scroll up button */}
        <ScrollUp />

        {/* Footer will be displayed on all pages */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
