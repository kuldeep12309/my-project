const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Git & GitHub",
    "Responsive Design",
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">About Me</h1>
      <p className="lead text-center mb-5">
        I am a passionate Frontend Developer with experience in creating
        responsive and dynamic web applications.
      </p>

      <h2 className="mb-4 text-center">My Frontend Skills</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="badge bg-success fs-5 px-4 py-6"
            style={{ cursor: "default" }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default About;
