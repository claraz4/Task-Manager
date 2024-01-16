import React from "react";
import "../styles.css";
import { useLocation } from "react-router-dom";
import Title from "./Title";
import TaskForm from "./TaskForm";

export default function EditTask() {
    const location = useLocation();
    const task = location.state.data;
    const id = task._id;

    delete task.completed;
    delete task.__v;
    delete task._id;
    
    const [formData, setFormData] = React.useState(task);
    
    // Handle the submission to the API
    const backendSubmit = () => console.log("hi");

    return (
        <div id="subpages-container">
            <Title title="Edit Task" />
            <TaskForm 
                formData={formData} 
                setFormData={setFormData} 
                backendFunction={backendSubmit}
                submitBtnText="Submit Changes"
            />
        </div>
    )
}