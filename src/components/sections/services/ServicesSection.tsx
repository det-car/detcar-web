import { useState } from "react";
import SizeSelector from "./SizeSelector";
import ServiceCard from "./ServiceCard";
import { servicesData, ServiceSize } from "./types";

export default function PflegeSection() {
  const [selectedSize, setSelectedSize] = useState<ServiceSize | null>(null);

  const handleSizeSelect = (size: ServiceSize) => {
    setSelectedSize(size);
  };

  return (
    <div
      id="services"
      className="flex items-center justify-center flex-col p-4"
    >
      <h1 className="text-2xl font-bold text-center text-myColor-white p-4 border-b-2 border-myColor-orange mt-6">
        Dienstleistungen
      </h1>
      <div className="md:w-[525px] w-full h-[400px] m-6 flex justify-center items-start">
        {selectedSize ? (
          <ServiceCard
            title={servicesData[selectedSize].title}
            services={servicesData[selectedSize].services}
            price={servicesData[selectedSize].price}
            selectedSize={selectedSize}
            onSelectSize={handleSizeSelect}
          />
        ) : (
          <SizeSelector onSizeSelect={handleSizeSelect} />
        )}
      </div>
    </div>
  );
}
