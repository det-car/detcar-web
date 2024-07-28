import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Car, Bus, Truck, LucideIcon } from "lucide-react";
import { ServiceSize } from "./types";

interface SelectItemComponentProps {
  value: ServiceSize;
  Icon: LucideIcon;
  label: string;
}

const SelectItemComponent: React.FC<SelectItemComponentProps> = ({
  value,
  Icon,
  label,
}) => (
  <SelectItem value={value}>
    <div className="flex items-center">
      <Icon className="mr-2" />
      <span>{label}</span>
    </div>
  </SelectItem>
);

interface CarSelectorProps {
  onSelect: (size: ServiceSize) => void;
  value: ServiceSize;
}

const CarSelector: React.FC<CarSelectorProps> = ({ onSelect, value }) => {
  return (
    <Select onValueChange={onSelect} value={value}>
      <SelectTrigger className="w-[120px] md:w-[150px] !border-2 !border-myColor-white font-bold">
        <SelectValue placeholder="Select car size" />
      </SelectTrigger>
      <SelectContent className="!bg-myColor-black !border-2 !border-myColor-gray hover:!bg-black">
        <SelectItemComponent value="klein" Icon={Car} label="Klein" />
        <SelectItemComponent value="mittel" Icon={Bus} label="Mittel" />
        <SelectItemComponent value="gross" Icon={Truck} label="Groß" />
      </SelectContent>
    </Select>
  );
};

export default CarSelector;
