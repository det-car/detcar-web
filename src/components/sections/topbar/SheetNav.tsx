import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
            <a className="text-myColor-white hover:text-myColor-orange text-lg">
              Home
            </a>
          </SheetClose>
          <a className="text-myColor-white hover:text-myColor-orange text-lg">
            Kontakt
          </a>
          <a className="text-myColor-white hover:text-myColor-orange text-lg">
            Service
          </a>
        </nav>
        {/*         <SheetClose asChild>
          <Button type="submit">Save changes</Button>
        </SheetClose> */}
      </SheetContent>
    </Sheet>
  );
}
