import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Header.css";
import { Link } from "react-router-dom"; // ✅ सही import

const Header = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "Frontend Developer",
        "React Enthusiast",
        "UI/UX Designer",
        "Web Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="container-fluid header-section d-flex align-items-center">
      <div className="row align-items-center">
        <div className="col-md-6 p-5 text-center text-md-start animate__animated animate__fadeInLeft">
          <h1
            className="display-2 fl-bold"
            style={{ fontSize: "20px", fontFamily: "asif" }}
          >
            Hi, I'm{" "}
            <span className="typed-wrapper">
              <span ref={typedEl} className="text-primary"></span>
            </span>
          </h1>

          <p className="lead mt-5">
            I design and build modern, fast, and responsive web applications
            using the latest technologies.
          </p>

          {/* ✅ Fixed Link */}
          <Link to="/resume" className="btn btn-primary mt-4">
            Resume
          </Link>
        </div>

        <div className="col-md-6 text-center p-5 animate__animated animate__fadeInRight">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Frontend Developer"
            className="img-fluid rounded img"
          />
          <h4
            className="m-2"
            style={{
              color: "green",
              fontStyle: "italic",
              fontSize: "30px",
            }}
          >
            Kuldeep Gupta
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Header;
