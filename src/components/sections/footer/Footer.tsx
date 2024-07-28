import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 border-t-2 border-myColor-orange text-myColor-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Adresse */}
          <div>
            <h5 className="text-lg font-semibold mb-2 border-b-[0.5px] border-myColor-orange">
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
            <h5 className="text-lg font-semibold mb-2 border-b-[0.5px] border-myColor-orange">
              Kontakt
            </h5>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Mail className="mr-2 min-w-6 min-h-6" />
                <a
                  href="mailto:info@detcar.de"
                  className="text-light border-b-[1px] hover:border-myColor-orange"
                >
                  info@detcar.de
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 min-w-6 min-h-6" />
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

        <div className="flex md:flex-row flex-col justify-between items-center mt-6">
          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Det-Car. Alle Rechte vorbehalten.
          </p>

          {/* Links */}
          <div className="flex space-x-4">
            <a
              href="/datenschutz"
              className="text-light border-b-[1px] hover:border-primary-green"
            >
              Datenschutz
            </a>
            <a
              href="/impressum"
              className="text-light border-b-[1px] hover:border-primary-green"
            >
              Impressum
            </a>
            <a
              href="/agb"
              className="text-light border-b-[1px] hover:border-primary-green"
            >
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
