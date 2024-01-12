import React from "react";
import "./styles.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; 

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
