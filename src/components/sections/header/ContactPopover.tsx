import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PhoneCall, Phone, Mail, MapPin } from "lucide-react";

export function ContactPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="!bg-myColor-black !border-2 !border-myColor-gray p-6 text-xl font-semibold hover:!bg-myColor-gray"
        >
          <PhoneCall className="h-5 w-5 mr-2 text-white" />
          Kontakt
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 !bg-black !border-myColor-gray !border-2 text-white">
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Kontakt</h4>
            <p className="text-sm text-gray-400">
              Nehmen Sie Kontakt mit uns auf.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-white" />
              <Label className="text-white" htmlFor="telefon">
                Telefon
              </Label>
            </div>
            <p id="telefon" className="text-sm text-gray-300">
              +49 123 456 789
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-white" />
              <Label className="text-white" htmlFor="email">
                Email
              </Label>
            </div>
            <p id="email" className="text-sm text-gray-300">
              contact@info.de
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-white" />
              <Label className="text-white" htmlFor="location">
                Location
              </Label>
            </div>
            <p id="location" className="text-sm text-gray-300">
              1234 Straße, Stadt, Land
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ContactPopover;
