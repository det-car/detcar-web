import "./App.css";

import Header from "./components/sections/header/Header";
import ThemeSwitcher from "./components/ThemeSwitcher";

import CarSelecter from "./components/CarSelecter";
import ServiceTable from "./components/ServiceTable";
import Map from "./components/Map";

function App() {
  const prices = ["$50.00", "$100.00", "$150.00", "$200.00"];
  return (
    <>
      <Header />
      {/*       <ThemeSwitcher />
      <CarSelecter />
      <ServiceTable prices={prices} />
      <Map /> */}
    </>
  );
}

export default App;
