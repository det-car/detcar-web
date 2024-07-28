import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/sections/header/Header";
import ServicesSection from "./components/sections/services/ServicesSection";
import ContactSection from "./components/sections/contact/ContactSection";
import Footer from "./components/sections/footer/Footer";
import Topbar from "./components/sections/header/Topbar";
import Kontakt from "./components/pages/Kontakt"; // Import Kontakt page
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
              <Header />
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
