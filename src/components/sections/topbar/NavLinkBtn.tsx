import "./NavLinkBtn.css";

import { Link } from "react-router-dom";
import { SheetClose } from "@/components/ui/sheet";

interface NavLinkBtnProps {
  text: string;
  to: string;
}

const NavLinkBtn: React.FC<NavLinkBtnProps> = ({ text, to }) => {
  return (
    <SheetClose asChild>
      <Link to={to} className="nav-link-btn">
        {text}
      </Link>
    </SheetClose>
  );
};

export default NavLinkBtn;
