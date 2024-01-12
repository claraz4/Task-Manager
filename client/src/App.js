import React from "react";
import "./styles.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; 
import AddTask from "./components/AddTask"

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-task" element={<AddTask />} />
        </Routes>
      </Router>
    </div>
  );
}
