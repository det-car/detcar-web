import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Kontakt: React.FC = () => {
  return (
    <div>
      <div className="flex h-[36vh] items-end justify-start">
        <h1 className="mb-12 ml-8 pt-20 text-center text-5xl font-bold text-myColor-orange md:ml-24">
          Kontakt
        </h1>
      </div>
      <div className="bg-myColor-white p-4 md:p-20">
        <div className="grid gap-2 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h1 className="mb-12 text-3xl font-semibold">Det-Car.de</h1>
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <Phone className="text-myColor-black" size={30} />
                <div>
                  <h4 className="text-xl font-semibold">Telefon</h4>
                  <p className="text-myColor-black">+49 123 45678910</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-myColor-black" size={30} />
                <div>
                  <h4 className="text-xl font-semibold">E-Mail</h4>
                  <p className="text-myColor-black">info@det-car.de</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-myColor-black" size={30} />
                <div>
                  <h4 className="text-xl font-semibold">Adresse</h4>
                  <p className="text-myColor-black">
                    Musterstrasse 123, 12345 Musterstadt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-[400px] md:h-auto">
            <iframe
              src="https://maps.google.com/maps?q=Galluswarte%2C%20Frankfurt%20am%20Main&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
              className="h-full w-full rounded-none border-0 grayscale md:rounded-br-3xl md:rounded-tr-3xl"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Galluswarte, Frankfurt am Main"
              aria-label="Galluswarte, Frankfurt am Main"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
