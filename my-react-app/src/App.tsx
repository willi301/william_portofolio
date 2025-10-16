// src/App.tsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.tsx";
import Projects from "./pages/project.tsx";
import Contact from "./pages/contact.tsx";

const App: React.FC = () => {
  return (
    <div>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

