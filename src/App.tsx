import "./App.css";

import Header from "./components/sections/header/Header";
import ServicesSection from "./components/sections/services/ServicesSection";
import ContactSection from "./components/sections/contact/ContactSection";
import Footer from "./components/sections/footer/Footer";

import ThemeSwitcher from "./components/ThemeSwitcher";

import ServiceTable from "./components/ServiceTable";
import Map from "./components/Map";

function App() {
  const prices = ["$50.00", "$100.00", "$150.00", "$200.00"];
  return (
    <>
      <Header />
      <ServicesSection />
      <ContactSection />
      <Footer />

      {/*       <ThemeSwitcher />
      <CarSelecter />
      <ServiceTable prices={prices} />
      <Map /> */}
    </>
  );
}

export default App;
