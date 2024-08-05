import React, { useState, useEffect } from "react";
import { SheetNav } from "./SheetNav";
import { ContactBtn } from "./ContactBtn";
import logo from "./../../../assets/images/logo-cropped.svg";

const Topbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="/* */ fixed top-0 z-50 flex h-[4rem] w-full items-center justify-between border-b-2 border-myColor-gray bg-[#1a1a1a] bg-[rgba(0,0,0,1)] pr-4">
      <div className="flex items-center text-myColor-white">
        {/*         <CarFront className="h-9 w-9 mr-2 text-myColor-orange" />
        <span className="text-lg font-semibold italic">Det-Car.de</span> */}
        <a href="/">
          <img src={logo} alt="" className="max-h-[3.5rem]" />
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <ContactBtn scrolled={scrolled} />
        <SheetNav />
      </div>
    </div>
  );
};

export default Topbar;
