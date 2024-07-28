import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CarSelector from "./CarSelector";
import { ServiceSize } from "./types";

interface ServiceCardProps {
  title: string;
  services: readonly string[];
  price: string;
  selectedSize: ServiceSize;
  onSelectSize: (size: ServiceSize) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  services,
  price,
  selectedSize,
  onSelectSize,
}) => {
  return (
    <Card className="w-full max-w-md !bg-black !text-myColor-white shadow-lg rounded-lg overflow-hidden border-4 !border-myColor-gray relative">
      <div className="absolute top-4 right-4">
        <CarSelector onSelect={onSelectSize} value={selectedSize} />
      </div>
      <CardHeader className="bg-myColor-gray p-4">
        <CardTitle className="text-xl font-bold !text-myColor-white">
          {title}
        </CardTitle>
        <CardDescription className="!text-myColor-white">
          Our premium services
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <ul className="list-disc pl-5 space-y-2">
          {services.map((service, index) => (
            <li key={index} className="!text-myColor-white py-2">
              {service}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-4 border-t !border-myColor-gray text-center">
        <span className="text-xl font-semibold !text-myColor-white">
          {price}
        </span>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
