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
      } hover:!bg-myColor-orange hover:!text-myColor-black text-lg font-semibold p-4 !border-myColor-gray border-2`}
    >
      Kontakt
    </Button>
  );
};
