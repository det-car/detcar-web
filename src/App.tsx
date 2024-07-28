import "./App.css";

import Header from "./components/Header";

import ThemeSwitcher from "./components/ThemeSwitcher";

import CarSelecter from "./components/CarSelecter";
import Map from "./components/Map";

function App() {
  return (
    <>
      <ThemeSwitcher />
      <CarSelecter />
      <Map />
    </>
  );
}

export default App;
