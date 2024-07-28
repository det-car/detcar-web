import { Button } from "@/components/ui/button";

export const ContactBtn: React.FC = () => {
  return (
    <Button
      variant="outline"
      className="
          !bg-myColor-black
          !text-myColor-white 
          hover:!bg-myColor-orange
          hover:!text-myColor-black
          text-lg
          font-semibold 
          p-4
          !border-myColor-gray
          !border-2"
    >
      Kontakt
    </Button>
  );
};
