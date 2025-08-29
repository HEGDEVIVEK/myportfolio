import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import "../scss/Navbar.scss";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#aboutme"},
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  // Scroll-based active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // offset for navbar
      const currentSection = navigation.find((item) => {
        const el = document.querySelector(item.href);
        return el && el.offsetTop <= scrollPos && (el.offsetTop + el.offsetHeight) > scrollPos;
      });
      if (currentSection) setActiveSection(currentSection.href.slice(1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode globally
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      document.body.classList.toggle("dark-mode", !prev);
      return !prev;
    });
  };

  return (
    <div className="navbar-container">
      <header className="navbar">
        <nav className="navbar-nav" aria-label="Global">
          <h1 className="navbar-title">Vivek S Hegde</h1>

          {/* Desktop Navigation */}
          <div className="right-side">
          <div className="nav-links-desktop">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${activeSection === item.href.slice(1) ? "active" : ""}`}
              >
                {item.name}
              </a>
            ))}
          </div>

           {/* Dark/Light Toggle */}
            <button className="dark-toggle" onClick={toggleDarkMode}>
              {darkMode ? <IoSunnyOutline size={20} /> : <IoMoonOutline size={20} />}
            </button>
          </div>  

          {/* Mobile Menu */}
          <div className="nav-links-mobile">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="toggle-btn"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>

        {/* <hr className="nav-divider" /> */}

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-links">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-nav-link ${activeSection === item.href.slice(1) ? "active" : ""}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
