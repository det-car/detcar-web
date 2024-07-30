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
      <SelectTrigger className="w-[120px] !border-[1px] !border-[#414241] font-bold md:w-[150px]">
        <SelectValue placeholder="Select car size" />
      </SelectTrigger>
      <SelectContent className="!border-2 !border-myColor-gray !bg-myColor-black hover:!bg-black">
        <SelectItemComponent value="klein" Icon={Car} label="Klein" />
        <SelectItemComponent value="mittel" Icon={Bus} label="Mittel" />
        <SelectItemComponent value="gross" Icon={Truck} label="Groß" />
      </SelectContent>
    </Select>
  );
};

export default CarSelector;
