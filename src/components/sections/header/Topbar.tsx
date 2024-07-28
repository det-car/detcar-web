import React, { useState, useEffect } from "react";
import { CarFront } from "lucide-react";
import { SheetNav } from "./SheetNav";
import { ContactBtn } from "./ContactBtn";

export const Topbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full h-[4rem] bg-myColor-black border-b-2 border-myColor-gray flex items-center justify-between px-4 z-50">
      <div className="flex items-center text-myColor-white">
        <CarFront className="h-9 w-9 mr-2 text-myColor-orange" />
        <span className="text-lg font-semibold">Det-Car.de</span>
      </div>
      <div className="flex items-center space-x-4">
        <ContactBtn scrolled={scrolled} />
        <SheetNav />
      </div>
    </div>
  );
};
