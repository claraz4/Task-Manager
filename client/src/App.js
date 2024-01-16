import React from "react";
import "./styles.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; 
import AddTask from "./components/AddTask"
import AllTasks from "./components/AllTasks";
import EditTask from "./components/EditTask";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-task" element={<AddTask />} />
          <Route exact path="/all-tasks" element={<AllTasks />} />
          <Route exact path="/edit-task" element={<EditTask />} />
        </Routes>
      </Router>
    </div>
  );
}
