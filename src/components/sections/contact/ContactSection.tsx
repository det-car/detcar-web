import { Phone, Mail, MapPin } from "lucide-react";

import ContactCard from "./ContactCard";

export default function ContactSection() {
  return (
    <section className="mt-24 w-full text-myColor-white">
      <div className="flex min-h-[600px] flex-col items-center justify-center md:flex-row">
        <div className="hidden h-[400px] w-[100px] flex-col items-start justify-center gap-8 rounded-bl-3xl rounded-tl-3xl border-2 border-none bg-[#424242] p-[35px] md:flex">
          <Phone className="h-6 w-6 text-zinc-400" />
          <Mail className="h-6 w-6 text-zinc-400" />
          <MapPin className="h-6 w-6 text-zinc-400" />
        </div>
        <ContactCard />
        <div className="h-[400px] w-full md:max-w-[550px]">
          <iframe
            src="https://maps.google.com/maps?q=Galluswarte%2C%20Frankfurt%20am%20Main&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
            className="h-full w-full rounded-none border-0 border-none grayscale md:rounded-br-3xl md:rounded-tr-3xl"
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
