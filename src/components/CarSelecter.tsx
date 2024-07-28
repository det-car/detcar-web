import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Car, Bus, Truck, LucideIcon } from "lucide-react";

interface SelectItemComponentProps {
  value: string;
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

const CarSelecter: React.FC = () => {
  return (
    <Select>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Select car size" />
      </SelectTrigger>
      <SelectContent>
        <SelectItemComponent value="small" Icon={Car} label="Small" />
        <SelectItemComponent value="medium" Icon={Bus} label="Medium" />
        <SelectItemComponent value="big" Icon={Truck} label="Big" />
      </SelectContent>
    </Select>
  );
};

export default CarSelecter;
