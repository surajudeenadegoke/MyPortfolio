import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import New from "./pages/New";
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
          <Route path="/experience" element={<Experience />} />
          <Route path="/my_CV" element={<New />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
