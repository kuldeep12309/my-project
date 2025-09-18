import React from "react";
const About = () => {
  const skills = [
    "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Redux Toolkit",
    "React Router", "Context API", "React Hook Form", "Tailwind CSS",
    "Bootstrap", "Fetch API", "Git & GitHub", "Responsive Design",
  ];

  return (
    <div className="container py-5 about-section" >
      <h1 className="text-center mb-5">About Me</h1>

      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <p className="text-center">
            Hello! I'm <strong>Kuldeep Gupta</strong>, a dedicated and enthusiastic{" "}
            <strong>Frontend Developer</strong> passionate about crafting clean, responsive,
            and user-friendly web interfaces. I specialize in building scalable React applications
            using modern tools like Redux Toolkit, Tailwind CSS, and React Hooks. My goal is to
            continuously learn and stay updated with the latest in frontend development while
            delivering high-quality web experiences.
          </p>
        </div>
      </div>

      <div className="mt-5 ">
        <h2 className="text-center mb-5 ">My Frontend Skills</h2>


        <div className="d-flex flex-wrap justify-content-center gap-3  ">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="badge bg-primary fs-6 px-2 py-2 skill-badge col"
              style={{ cursor: "default" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
