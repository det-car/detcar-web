import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/sections/topbar/Topbar";
import Hero from "./components/sections/hero/Hero";
import ServicesSection from "./components/sections/services/ServicesSection";
import ContactSection from "./components/sections/contact/ContactSection";
import Footer from "./components/sections/footer/Footer";
import Kontakt from "./components/pages/Kontakt";
import "./App.css";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ServicesSection />
              <ContactSection />
            </>
          }
        />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
