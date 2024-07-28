import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Kontakt: React.FC = () => {
  return (
    <div>
      <div className="h-[36vh] bg-[#1a1a1a] flex items-end justify-start">
        <h1 className="text-5xl text-myColor-orange font-bold text-center pt-20 ml-24 mb-12">
          Kontakt
        </h1>
      </div>
      <div className="bg-myColor-white p-20">
        <div className="grid md:grid-cols-2 gap-2">
          {/* Contact Information */}
          <div>
            <h1 className="text-3xl font-semibold mb-12">Det-Car.de</h1>
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
              className="border-0 w-full h-full grayscale md:rounded-tr-3xl md:rounded-br-3xl rounded-none"
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
