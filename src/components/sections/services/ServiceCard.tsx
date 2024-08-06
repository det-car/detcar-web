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
    <Card className="relative w-full max-w-md overflow-hidden rounded-3xl border-4 !border-myColor-gray !bg-black !text-myColor-white shadow-lg">
      <div className="absolute right-4 top-4">
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
        <ul className="list-disc space-y-2 pl-5">
          {services.map((service, index) => (
            <li key={index} className="py-2 !text-myColor-white">
              {service}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="border-t !border-myColor-gray p-4 text-center">
        <span className="text-xl font-semibold !text-myColor-white">
          {price}
        </span>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
