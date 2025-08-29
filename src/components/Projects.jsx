import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { CiMobile1 } from "react-icons/ci";
import "../scss/Projects.scss"

export default function Projects() {
  const projects = [
    {
      icon: <CiMobile1 />,
      title: "News App",
      description: "Designed and developed an Android mobile application fetching real-time news via NewsAPI.org.Implemented category filtering (Technology, Sports, Science, etc.), improving content discovery.Optimized API calls using Retrofit, reducing data load time by 35%.",
      tags: ["React Native", "NewsAPI.org"],
      link: "",
      badge: "Mobile App",
      gitIcon: <FaGithub />
    },
    {
      icon: <FaCode color="#007396" />,
      title: "Covid-19 Sentimental Analysis",
      description:
        "Analyzed sentiments on economic crises based on tweets from various Twitter users. Helped organizations analyze economic trends, improving decision-making processes.Implemented Na ̈ıve Bayes, Logistic Regression, and SVM algorithms for Twitter-based sentiment analysis.Extracted real-time tweets using Tweepy API, enabling dynamic sentiment monitoring.",
      tags: ["Naıve Bayes,", "Logistic Regression", "SVM", "HTML"],
      link: "",
      badge: "AI/ML",
      gitIcon: <FaGithub />
    }
  ];

  return (
    <div id="projects" className="projects-container">
      {/* Section Title */}
      <h2 className="projects-title">Featured Projects</h2>
      

      {/* Project Cards */}
      <div className="projects-section">
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            <div className="project-card-header">
              <div className="project-icon">{project.icon}</div>
              <span className="project-badge">{project.badge}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-footer"
            >
              <span>{project.gitIcon}</span>
              <span>Code</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
