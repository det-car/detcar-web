import { House, Phone, Mail } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardWithForm() {
  return (
    <Card className="w-full md:max-w-[850px] md:w-[450px] h-[550px] !bg-myColor-white md:rounded-3xl rounded-none border-none p-6">
      <CardHeader>
        <CardTitle className="text-myColor-black !font-bold text-5xl">
          Kontakt
        </CardTitle>
        <CardDescription>Nehmen Sie Kontakt mit uns auf.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-16 mt-6">
        <div className="flex items-center space-x-4">
          <div className="bg-black p-4 rounded-full">
            <House className="text-white" size={30} />
          </div>
          <div>
            <h4 className="text-myColor-black font-semibold mb-1 text-2xl">
              Adresse
            </h4>
            <p className="text-myColor-black">
              Musterstraße 1, 12345 Musterstadt
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-black p-4 rounded-full">
            <Phone className="text-white" size={30} />
          </div>
          <div>
            <h4 className="text-myColor-black font-semibold mb-1 text-2xl">
              Telefon
            </h4>
            <p className="text-myColor-black">+49 123 456 789</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-black p-4 rounded-full">
            <Mail className="text-white" size={30} />
          </div>
          <div>
            <h4 className="text-myColor-black font-semibold mb-1 text-2xl">
              E-Mail
            </h4>
            <p className="text-myColor-black">info@musterstadt.de</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
