import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Types from "./pages/Types";
import Blog from "./pages/Blog";
import About from "./pages/About";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function App() {
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />/
          <Route path="/types" element={<Types />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
