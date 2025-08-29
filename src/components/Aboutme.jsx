import "../scss/Aboutme.scss";
import vivekImage from "../assests/Vivek.jpeg";

export default function AboutMe() {
  return (
    <div id="aboutme" className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={vivekImage} alt="Vivek S Hegde" />
        </div>
        <div className="about-description">
          <p>
            I’m a Computer Science graduate student at the University of Texas
            at San Antonio, with over 2 years of professional experience in
            full-stack development. I enjoy designing and building scalable,
            high-performance applications that blend modern web technologies
            with strong backend architectures.
          </p>

          <p>
            🚀 My experience spans across React.js, Tailwind CSS, Node.js,
            Express.js, MongoDB, and AWS, along with cloud monitoring, CI/CD,
            and containerization. At Accenture, I developed enterprise-grade web
            solutions—optimizing load times, creating reusable UI components,
            and implementing cloud-native APIs using AWS Lambda and Dockerized
            microservices.
          </p>

          <p>
            📊 Beyond software engineering, I have a strong foundation in data
            analysis and machine learning, with hands-on projects in sentiment
            analysis and predictive modeling. I’ve also built mobile
            applications with React Native, integrating real-time APIs to
            deliver seamless user experiences.
          </p>

          <p>
            🌟 I thrive in collaborative environments, enjoy tackling complex
            problems, and continuously seek opportunities to innovate through
            technology.
          </p>
        </div>
      </div>
    </div>
  );
}
