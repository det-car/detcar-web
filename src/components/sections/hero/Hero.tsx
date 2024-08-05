import ContactPopover from "./ContactPopover";
import heroBackground from "./../../../assets/images/temp-bg.jpg";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="hero-shadow relative h-[55vh] w-full">
      <img
        src={heroBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white">
        <h1 className="mb-4 mt-36 text-3xl font-bold md:text-4xl">
          Perfektion im Detail
        </h1>
        <p className="mb-24 max-w-[800px] text-lg md:text-2xl">
          Ihr Auto verdient nur das Beste. Wir sind spezialisiert darauf, das
          Beste aus Ihrem Fahrzeug herauszuholen und es in neuem Glanz
          erstrahlen zu lassen.
        </p>
        <ContactPopover />
      </div>
    </div>
  );
};

export default Hero;
