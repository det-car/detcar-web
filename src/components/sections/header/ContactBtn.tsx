import { Button } from "@/components/ui/button";

interface ContactBtnProps {
  scrolled: boolean;
}

export const ContactBtn: React.FC<ContactBtnProps> = ({ scrolled }) => {
  return (
    <Button
      variant="outline"
      className={`transition-colors duration-300 ${
        scrolled
          ? "!bg-myColor-orange !text-myColor-black"
          : "!bg-myColor-black !text-myColor-white"
      } hover:!bg-myColor-orange hover:!text-myColor-black text-lg font-semibold p-4 !border-myColor-gray border-2`}
    >
      Kontakt
    </Button>
  );
};
