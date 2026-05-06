import Logo from "../assets/Logo.png";

const linkStyle =
  "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-20 w-full bg-black/50 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <a href="#home" className="flex h-12 w-20 items-center overflow-hidden">
          <img
            src={Logo}
            alt="Oxford Dog Grooming"
            className="object-contain"
          />
        </a>

        {/* Links */}
        <ul className="flex gap-6">
          <li>
            <a href="#services" className={linkStyle}>
              Services
            </a>
          </li>

          <li>
            <a href="#about" className={linkStyle}>
              About
            </a>
          </li>

          <li>
            <a href="#reviews" className={linkStyle}>
              Reviews
            </a>
          </li>

          <li>
            <a href="#faq" className={linkStyle}>
              FAQ
            </a>
          </li>

          <li>
            <a href="#contact" className={linkStyle}>
              Contact
            </a>
          </li>

          <li>
            <a href="#location" className={linkStyle}>
              Location
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
