import { CarFront } from "lucide-react";
import { SheetNav } from "./SheetNav";
import { ContactBtn } from "./ContactBtn";

export const Topbar: React.FC = () => {
  return (
    <div className="h-[4rem] bg-myColor-black border-b-2 border-myColor-gray flex items-center justify-between px-4">
      <div className="flex items-center text-myColor-white">
        <CarFront className="h-9 w-9 mr-2 text-myColor-orange" />
        <span className="text-lg font-semibold">Det-Car.de</span>
      </div>
      <div className="flex items-center space-x-4">
        <ContactBtn />
        <SheetNav />
      </div>
    </div>
  );
};
