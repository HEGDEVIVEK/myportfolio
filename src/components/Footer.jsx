import { FaArrowUp } from "react-icons/fa";
import "../scss/Footer.scss"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <hr className="footer-divider" />
      <div className="footer-content">
        <p>© 2025 Vivek Hegde. All rights reserved.</p>
        <p>
          Built with <span>React</span> by <span>Vivek S Hegde</span>
        </p>
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
}
