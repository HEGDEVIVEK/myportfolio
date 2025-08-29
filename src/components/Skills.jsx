// SkillsSection.jsx
import React from 'react';
import "../scss/Skills.scss"

// Icons
import {FaDocker, FaReact, FaNodeJs, FaJava, FaPython, FaGit, FaGithub,} from 'react-icons/fa';
import { FaAws } from "react-icons/fa";
import { DiMongodb } from 'react-icons/di';
import {SiInsomnia, SiJavascript, SiMysql, SiExpress,SiSpringboot, SiReactos, SiPostman, SiJira} from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { icon: <FaJava color="#007396" />, label: "Java" },
        { icon: <SiJavascript color="#F7DF1E" />, label: "JavaScript" },
        { icon: <FaPython color="#3776AB" />, label: "Python" },
        { icon: <SiSpringboot color="#6DB33F" />, label: "Spring Boot" },
        { icon: <FaReact color="#61DAFB" />, label: "React" },
        { icon: <SiReactos color="#61DAFB" />, label: "React Native" },
        { icon: <SiExpress color="#000000" />, label: "Express" },
        { icon: <FaNodeJs color="#339933" />, label: "Node.js" },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { icon: <FaAws color="#FF9900" />, label: "AWS" },
        { icon: <FaDocker color="#2496ED" />, label: "Docker" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMysql color="#4479A1" />, label: "MySQL" },
        { icon: <DiMongodb color="#47A248" />, label: "MongoDB" },
        { icon: <FaAws color="#569A31" />, label: "AWS S3" }, // using AWS but green variant
      ],
    },
    {
      title: "Tools & Version Control",
      skills: [
        { icon: <FaGit color="#F05032" />, label: "Git" },
        { icon: <FaGithub color="#181717" />, label: "GitHub" },
        { icon: <SiPostman color="#FF6C37" />, label: "Postman" },
        { icon: <SiInsomnia color="#370f8dff" />, label: "Insomnia" }, // no direct insomnia icon
        { icon: <SiJira color="#0052CC" />, label: "Jira" },
      ],
    },
  ];

  return (
    <div id="skills" className='skills-container'>
      <h2 className="skill-title">Skills</h2>

      <div className="skills-section">
        {categories.map((category, idx) => (
          <div className="skills-card" key={idx}>
            <h2 className="eachskills-title">{category.title}</h2>
            <hr />
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="icon-box">{skill.icon}</div>
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
