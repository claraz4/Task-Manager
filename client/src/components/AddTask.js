import React from "react";
import "../styles.css";
import axios from "axios";
import Title from "./Title";
import TaskForm from "./TaskForm";

// A PROBLEM TO FIX: YOU CAN'T SET A TASK FOR A DATE THAT ALREADY PASSED (forget about this)
// YOU NEED TO REMOVE THE DATES THAT ARE BEFORE TODAY (forget about this)
// YOU ALSO NEED TO ADD WHENEVER A TASK IS OVERDUE

export default function AddTask() {
    const [formData, setFormData] = React.useState({
        name: "",
        urgency: 3,
        category: 1,
        description: "",
        day: 1,
        month: 0,
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