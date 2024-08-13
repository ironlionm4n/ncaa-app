import ThemeToggle from "../ThemeToggle";
import { TypographyH2 } from "../ui/typography/TypographyH2";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    <nav className="dark:bg-black bg-white flex flex-row items-center justify-between p-4">
      <TypographyH2 text="NCAA CFB App 🏈" />
      <div className="flex flex-row gap-4 items-center">
        <NavButton linkAddress="/" title="Home" />
        <NavButton linkAddress="/conferences" title="Conferences" />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
