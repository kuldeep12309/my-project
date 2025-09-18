import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Thanks for visiting!",
        "Let's build something awesome.",
        "Frontend Developer • React Lover ",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5 font-family-asif container-fluid">
      <div className="container text-center">
        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <h3 className="typed-footer-text">
              <span ref={typedRef}></span>
            </h3>
          </div>
        </div>

        <div className="row justify-content-center mb-3">
          <div className="col-auto">
            <a
              href="https://github.com/kuldeep12309/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-sm mx-2"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kuldeep-gupta-a0b299327/"
              target="_blank"
              className="btn btn-outline-light btn-sm mx-2"
            >
              LinkedIn
            </a>
        
            
          </div>
        </div>

        <hr className="border-light" />
        <p className="mb-0 small">
          &copy; {new Date().getFullYear()} <strong>Kuldeep Gupta</strong>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
