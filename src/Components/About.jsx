import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const About = () => {
  const skills = [
    { name: "HTML5", level: 95, color: "danger" },
    { name: "CSS3", level: 90, color: "info" },
    { name: "JavaScript (ES6+)", level: 88, color: "warning" },
    { name: "React.js", level: 85, color: "info" },
    { name: "Redux Toolkit", level: 98, color: "secondary" },
    { name: "React Router", level: 96, color: "primary" },
    { name: "Context API", level: 98, color: "success" },
    { name: "React Hook Form", level: 99, color: "warning" },
    { name: "Tailwind CSS", level: 85, color: "info" },
    { name: "Bootstrap", level: 90, color: "primary" },
    { name: "Fetch API", level: 99, color: "secondary" },
    { name: "Git & GitHub", level: 88, color: "dark" },
    { name: "Responsive Design", level: 97, color: "success" },
  ];

  return (
    <div className="py-5 about-section ">
      <h1 className="text-center mb-5">About Me</h1>

      <div className="row mb-5">
        <div >
          <p className="text-center m-3">
            Hello! I'm <strong>Kuldeep Gupta</strong>, a dedicated and
            enthusiastic <strong>Frontend Developer</strong> passionate about
            crafting clean, responsive, and user-friendly web interfaces. I
            specialize in building scalable React applications using modern
            tools like Redux Toolkit, Tailwind CSS, and React Hooks. My goal is
            to continuously learn and stay updated with the latest in frontend
            development while delivering high-quality web experiences.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-center mb-4">My Frontend Skills</h2>

        <div className="row m-3">
          {skills.map((skill, index) => (
            <div className="col-12 col-md-4 mb-4" key={index}>
              <div className="d-flex justify-content-between mb-1">
                <strong>{skill.name}</strong>
                <span>{skill.level}%</span>
              </div>
              <ProgressBar
                now={skill.level}
                variant={skill.color}
                animated
                striped
                style={{ height: "10px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
