import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ContactBtnProps {
  scrolled: boolean;
}

export const ContactBtn: React.FC<ContactBtnProps> = ({ scrolled }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/kontakt");
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className={`transition-colors duration-300 ${
        scrolled
          ? "!bg-myColor-orange !text-myColor-black"
          : "!bg-myColor-black !text-myColor-white"
      } border-2 !border-myColor-gray p-2 text-sm font-semibold hover:!bg-myColor-orange hover:!text-myColor-black md:p-4 md:text-lg`}
    >
      Kontakt
    </Button>
  );
};
