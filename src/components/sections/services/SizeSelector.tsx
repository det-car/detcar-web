import React from "react";
import { Car, Bus, Truck } from "lucide-react";
import SizeTooltip from "./SizeTooltip";
import { ServiceSize } from "./types";

interface SizeSelectorProps {
  onSizeSelect: (size: ServiceSize) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ onSizeSelect }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-12 border-2 border-myColor-gray rounded-3xl bg-zinc-900">
      <h1 className="text-2xl font-bold text-myColor-white text-center">
        Select the size of your vehicle:
      </h1>
      <div className="flex items-center justify-center gap-12">
        <SizeTooltip
          icon={
            <Car className="h-12 w-12 text-myColor-white hover:text-myColor-orange" />
          }
          tooltipText="Klein"
          onClick={() => onSizeSelect("klein")}
        />
        <SizeTooltip
          icon={
            <Bus className="h-12 w-12 text-myColor-white hover:text-myColor-orange" />
          }
          tooltipText="Mittel"
          onClick={() => onSizeSelect("mittel")}
        />
        <SizeTooltip
          icon={
            <Truck className="h-12 w-12 text-myColor-white hover:text-myColor-orange" />
          }
          tooltipText="Groß"
          onClick={() => onSizeSelect("gross")}
        />
      </div>
    </div>
  );
};

export default SizeSelector;
