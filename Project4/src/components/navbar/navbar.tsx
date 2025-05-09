import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import {Link, useLocation} from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inHomeSection, setInHomeSection] = useState(true);
  const [activeSection, setActiveSection] = useState("#home");

  const location = useLocation();
  const isRoot = location.pathname === "/";

  const sections = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#work", label: "Work" },
    { id: "#contact", label: "Contact" }
  ];

  const homeRef = useRef<HTMLElement | null>(null);

  const handleClick = (section: string) => {
    setActiveSection(section);
    toggleMenu();
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInHomeSection(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.8,
      }
    );

    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeRef.current = homeElement;
      observer.observe(homeElement);
    }

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {inHomeSection && (
        <nav   className={`fixed top-0 left-0 w-full z-50 px-20 py-6 flex justify-between items-center transition-all duration-500 ease-in-out ${
          isRoot ? "bg-transparent" :"bg-white shadow-md"
        }`}
        >
          {isRoot ? (
            <Link to="/#home">
              <h1 className="font-semibold text-black text-xl">@ArielSharon</h1>
            </Link>
          ) : (
            <Link to="/#home" className="font-semibold text-black text-xl">@ArielSharon</Link>
          )}
          <ul className="flex gap-10 text-black text-xl">
            {isRoot ? (
                <li><a href="#about" className="hover:text-gray-600 transition duration-300">About</a></li>
            ) : (
              <Link to={"/#about"} className="hover:text-gray-600 transition duration-300">
                About
              </Link>
            )}

            {isRoot ? (
                <li><a href="#work" className="hover:text-gray-600 transition duration-300">Work</a></li>
            ) : (
              <Link to={"/#work"}>
                <li><a href="#" className="hover:text-gray-600 transition duration-300">Work</a></li>
              </Link>
            )}
            {isRoot ? (
              <Link to={"/contact"}>
                <li><a className="hover:text-gray-600 transition duration-300">Contact</a></li>
              </Link>
            ) : (
              <Link to={"/contact"}>
                <li><a className="hover:text-gray-600 transition duration-300">Contact</a></li>
              </Link>
            )}
          </ul>
        </nav>
      )}

      {!inHomeSection && (
        <>
          <button
            className="fixed top-[60px] right-[60px] z-50 p-5 bg-black shadow-lg rounded-full text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>

          <div
            className={`fixed top-0 right-0 min-h-full w-1/2 bg-black shadow-lg z-60 transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button onClick={toggleMenu} aria-label="Close menu">
              <X size={50} className="fixed top-[60px] right-[60px] z-40 p-2 bg-white shadow-lg rounded-full" />
            </button>
            <div className="flex flex-col h-full my-10 ml-20 justify-between">
              <ul className="flex flex-col gap-8 text-white text-6xl mt-32 list-none">
                {sections.map(({ id, label }) => (
                  <li className="flex flex-row gap-5 items-center">
                    {activeSection === id && (
                      <span className="text-white">•</span>
                    )}
                    <a
                      href={id}
                      className="hover:text-gray-600"
                      onClick={() => handleClick(id)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
                <ul className="absolute bottom-5 flex flex-row gap-6 text-white text-xl">
                  <li><a href="https://www.linkedin.com/in/taufiqurrahman-8627191aa/" className="hover:text-gray-600" onClick={toggleMenu}>Linkedin</a></li>
                  <li><a href="https://github.com/Virtuozs" className="hover:text-gray-600" onClick={toggleMenu}>Github</a></li>
                  <li><a href="https://discord.com/users/385426070934913035" className="hover:text-gray-600" onClick={toggleMenu}>Discord</a></li>
                  <li><a href="#webflow" className="hover:text-gray-600" onClick={toggleMenu}>Webflow</a></li>
                </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
