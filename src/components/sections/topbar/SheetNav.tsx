import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "./../../../assets/images/logo-cropped.svg";

import NavLinkBtn from "./NavLinkBtn";

export function SheetNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="bg-!none hover:!bg-myColor-black"
        >
          <Menu className="h-9 w-9 text-myColor-white hover:cursor-pointer" />
        </Button>
      </SheetTrigger>
      <SheetContent className="z-50 flex flex-col justify-between border-l-2 !bg-myColor-black">
        <nav className="mt-12 flex flex-col items-center space-y-8 p-4">
          <NavLinkBtn to="/" text="Home" />
          <NavLinkBtn to="/kontakt" text="Kontakt" />
          <NavLinkBtn to="/gallery" text="Gallery" />
        </nav>
        <img src={logo} alt="Logo" />
      </SheetContent>
    </Sheet>
  );
}
