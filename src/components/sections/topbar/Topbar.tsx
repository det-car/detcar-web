import React, { useState, useEffect } from "react";
import { CarFront } from "lucide-react";
import { SheetNav } from "./SheetNav";
import { ContactBtn } from "./ContactBtn";

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
    <div className="fixed top-0 w-full h-[4rem] /* bg-[#1a1a1a] */  bg-[rgba(37,37,37,0.9)] border-b-2 border-myColor-gray flex items-center justify-between px-4 z-50">
      <div className="flex items-center text-myColor-white">
        <CarFront className="h-9 w-9 mr-2 text-myColor-orange" />
        <span className="text-lg font-semibold italic">Det-Car.de</span>
      </div>
      <div className="flex items-center space-x-4">
        <ContactBtn scrolled={scrolled} />
        <SheetNav />
      </div>
    </div>
  );
};

export default Topbar;