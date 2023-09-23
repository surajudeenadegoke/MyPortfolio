import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import Experience from "./pages/Education";
import Education from "./pages/Experience";
import Navbar from "./Components/Navbar";
import "./styles/Navbar.css";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/my_CV" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
