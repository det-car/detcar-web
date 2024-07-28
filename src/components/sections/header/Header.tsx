import { Topbar } from "./Topbar";
import { HeaderHero } from "./HeaderHero";

const Header: React.FC = () => {
  return (
    <header>
      <Topbar />
      <HeaderHero />
    </header>
  );
};

export default Header;
