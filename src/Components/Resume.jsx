import React from "react";
import "./Resume.css"; 

const Resume = () => {
  return (
    <div className="container mt-5 font-family-asif ">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title text-center ">Resume</h1>

          <hr />
          <h3> Kuldeep Gupta </h3>
          <h4>Contact</h4>
          <p>Email: <a href="mailto:kuldeepgupta8800@gmail.com">kuldeepgupta8800@gmail.com</a></p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/kuldeep12309" target="_blank" rel="noreferrer">
              github.com/kuldeep12309
            </a>
          </p>
          <p>Phone: +91-8418835697</p>

          <h4>Professional Summary</h4>
          <p>
            Detail-oriented and enthusiastic Frontend Developer with hands-on experience in building
            responsive and high-performance web applications using React.js. Proficient in modern frontend tools,
            UI libraries, and state management solutions. Passionate about clean code, user experience,
            and continuous learning.
          </p>

          <h4>Technical Skills</h4>
          <ul>
            <li>Languages: HTML5, CSS3, JavaScript (ES6+)</li>
            <li>Libraries & Frameworks: React.js, Redux Toolkit, Tailwind CSS, Bootstrap</li>
            <li>React Tools: Context API, useState, useEffect, useContext, React Hook Form</li>
            <li>APIs: RESTful API integration using Fetch API</li>
            <li>Version Control: Git & GitHub</li>
            <li>Responsive Design: Mobile-first development using Tailwind CSS & Bootstrap</li>
          </ul>

          <h4>Experience</h4>
          <p>
            <strong>Frontend Developer (Trainee)</strong> — Universal CodeBox
            <br />

          </p>
          <ul>
            <li>Developed responsive web UIs using React.js, Tailwind CSS, and Bootstrap.</li>
            <li>Utilized React Hooks (useState, useEffect, useContext) for state and effect management.</li>
            <li>Fetch API.</li>
            <li>Built reusable and modular components for scalable frontend architecture.</li>
            <li>Collaborated in a team environment using Git for version control.</li>
          </ul>

          <h4>Education</h4>
          <p><strong>Bachelor of Commerce (B.Com)</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
