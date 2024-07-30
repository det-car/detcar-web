/* import { HashRouter as Router, Routes, Route } from "react-router-dom"; */ // GitHub pages can't handle server-side routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use this for server-side routing
import Topbar from "./components/sections/topbar/Topbar";
import Hero from "./components/sections/hero/Hero";
import ServicesSection from "./components/sections/services/ServicesSection";
import ContactSection from "./components/sections/contact/ContactSection";
import Footer from "./components/sections/footer/Footer";
import Kontakt from "./components/pages/Kontakt";
import ScrollUp from "./components/ScrollUp";
import Loader from "./components/Loader";

import "./App.css";

function App() {
  return (
    <Router>
      {/* Topbar will be displayed on all pages */}
      <Topbar />

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
            </>
          }
        />
        {/* Kontakt page */}
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      {/* Loader will be displayed on all pages */}
      <Loader />
      {/* Scroll up button */}
      <ScrollUp />
      {/* Footer will be displayed on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
