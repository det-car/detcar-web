import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-light border-t-2 border-myColor-orange bg-none pt-4 text-myColor-white">
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-2">
          {/* Adresse */}
          <div>
            <h5 className="mb-2 border-b-[0.5px] border-myColor-orange text-lg font-semibold">
              Adresse
            </h5>
            <p>
              Det-Car.de
              <br />
              Musterstrasse 123
              <br />
              123456 Frankfurt am Main
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h5 className="mb-2 border-b-[0.5px] border-myColor-orange text-lg font-semibold">
              Kontakt
            </h5>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Mail className="mr-2 min-h-6 min-w-6" />
                <a
                  href="mailto:info@detcar.de"
                  className="text-light border-b-[1px] hover:border-myColor-orange"
                >
                  info@detcar.de
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 min-h-6 min-w-6" />
                <a
                  href="tel:+4912345678"
                  className="text-light border-b-[1px] hover:border-myColor-orange"
                >
                  +49 123 45678
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-myColor-white py-4 md:flex-row">
          {/* Copyright */}
          <p className="ml-6 text-center md:text-left">
            &copy; {new Date().getFullYear()} Det-Car. Alle Rechte vorbehalten.
          </p>

          {/* Links */}
          <div className="mr-6 flex space-x-4">
            <a
              href="/datenschutz"
              className="text-light border-b-[1px] transition-colors duration-150 hover:border-myColor-orange"
            >
              Datenschutz
            </a>
            <a
              href="/impressum"
              className="text-light border-b-[1px] transition-colors duration-150 hover:border-myColor-orange"
            >
              Impressum
            </a>
            <a
              href="/agb"
              className="text-light border-b-[1px] transition-colors duration-150 hover:border-myColor-orange"
            >
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
