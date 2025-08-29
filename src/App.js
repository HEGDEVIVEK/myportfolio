import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Aboutme from "./components/Aboutme"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Educations"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
