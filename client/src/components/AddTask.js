import React from "react";
import "../styles.css";
import axios from "axios";
import Title from "./Title";
import all from "../months";
import TaskForm from "./TaskForm";

// A PROBLEM TO FIX: YOU CAN'T SET A TASK FOR A DATE THAT ALREADY PASSED (forget about this)
// YOU NEED TO REMOVE THE DATES THAT ARE BEFORE TODAY (forget about this)

// Make the default day at first the day of today

export default function AddTask() {
    const [formData, setFormData] = React.useState({
        name: "",
        urgency: 3,
        category: 1,
        description: "",
        day: (new Date(Date.now())).getDate(),
        month: (new Date(Date.now())).getMonth(),
        year: (new Date(Date.now())).getFullYear()
    });

    // Submit the form to the backend
    const backendSubmit = async () => {
        try {
            await axios.post('/api/v1/tasks', formData);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="subpages-container">
            <Title title="Create a New Task" toLink="/" />
            <TaskForm 
                formData={formData} 
                setFormData={setFormData} 
                backendFunction={backendSubmit}
                submitBtnText="Add Task"
            />
        </div>
    );
}