import { Link } from "react-router";
import ContactBtn from "./ContactButton";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <>
      <div className="shadow-sm">
        <div className="max-w-[1024px] w-full mx-auto px-4 flex justify-between items-center h-16">
          <Link to="/">
            <Logo />
          </Link>
          <NavMenu />
          <ContactBtn />
        </div>
      </div>
    </>
  );
}
