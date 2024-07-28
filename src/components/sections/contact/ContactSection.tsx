import { Phone, Mail, MapPin } from "lucide-react";

import ContactCard from "./ContactCard";

export default function ContactSection() {
  return (
    <section className="bg-myColor-gray text-myColor-white w-full mt-24">
      <div className="flex md:flex-row flex-col items-center justify-center min-h-[600px]">
        <div className="hidden h-[400px] w-[100px] bg-[#424242] border-2 border-none rounded-tl-3xl rounded-bl-3xl md:flex flex-col items-start justify-center gap-8 p-[35px]">
          <Phone className="h-6 w-6 text-zinc-400" />
          <Mail className="h-6 w-6 text-zinc-400" />
          <MapPin className="h-6 w-6 text-zinc-400" />
        </div>
        <ContactCard />
        <div className="h-[400px] max-w-[550px] w-full">
          <iframe
            src="https://maps.google.com/maps?q=Galluswarte%2C%20Frankfurt%20am%20Main&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
            className="border-0 w-full h-full grayscale md:rounded-tr-3xl md:rounded-br-3xl rounded-none border-none"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Galluswarte, Frankfurt am Main"
            aria-label="Galluswarte, Frankfurt am Main"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
