import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom"; 

createRoot(document.getElementById("root")).render(

  <BrowserRouter className="container"> 
    <App />
  </BrowserRouter>
);
