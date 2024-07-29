import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

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
      <SheetContent className="!bg-myColor-black border-l-2">
        <nav className="flex flex-col items-center space-y-8 p-4 mt-12">
          <SheetClose asChild>
            <Link
              to="/"
              className="text-myColor-white hover:text-myColor-orange text-lg"
            >
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/kontakt"
              className="text-myColor-white hover:text-myColor-orange text-lg"
            >
              Kontakt
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/gallery"
              className="text-myColor-white hover:text-myColor-orange text-lg"
            >
              Gallery
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
