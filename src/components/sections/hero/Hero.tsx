import ContactPopover from "./ContactPopover";
import heroBackground from "./../../../assets/images/temp-bg.jpg";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[55vh] hero-shadow">
      <img
        src={heroBackground}
        alt=""
        className="absolute inset-0 w-full h-full object-cover "
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Thesis</h1>
        <p className="text-lg md:text-2xl mb-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <ContactPopover />
      </div>
    </div>
  );
};

export default Hero;