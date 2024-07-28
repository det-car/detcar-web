export const servicesData = {
    klein: {
      title: "Klein Packet",
      services: ["Full Body Wash", "Interior Cleaning", "Tire Polishing"] as const,
      price: "75€+",
    },
    mittel: {
      title: "Mittel Packet",
      services: [
        "Full Body Wash",
        "Interior Cleaning",
        "Engine Detailing",
        "Tire Polishing",
      ] as const,
      price: "175€+",
    },
    gross: {
      title: "Gross Packet",
      services: [
        "Full Body Wash",
        "Interior Cleaning",
        "Engine Detailing",
        "Tire Polishing",
        "Wax Coating",
        "Leather Treatment",
      ] as const,
      price: "295€",
    },
  } as const;
  
  export type ServiceSize = keyof typeof servicesData;