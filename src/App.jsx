import { Routes, Route } from "react-router-dom"; 
import NavBar from "./Components/NavBar";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
