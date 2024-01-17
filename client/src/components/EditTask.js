import React from "react";
import "../styles.css";
import { useLocation } from "react-router-dom";
import Title from "./Title";
import TaskForm from "./TaskForm";
import axios from "axios";

export default function EditTask() {
    const location = useLocation();
    const toLink = location.state.info.toLink;
    const [taskID] = React.useState(location.state.info.id);
    const [isLoading, setIsLoading] = React.useState(true);
    
    const [formData, setFormData] = React.useState({});

    React.useEffect(() => {
        // Handles get single task requests
        const fetchTask = async (id) => {
            try {
                const res = await fetch(`/api/v1/tasks/${id}`);
                const data = await res.json();
                setFormData(data.data);
            } catch (error) {
                console.log(error);
            }
        }

        if (taskID) {
            fetchTask(taskID);
        }
    }, [taskID]);

    React.useEffect(() => {
        if (formData && Object.keys(formData).length !== 0) {
            setIsLoading(false);
        }
    }, [formData])
    
    // Handle the submission to the API
    const backendSubmit = async () => {
        try {
            await axios.patch(`/api/v1/tasks/${taskID}`, formData);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="subpages-container">
            <Title title="Edit Task" toLink={toLink} />
            {!isLoading && <TaskForm 
                formData={formData} 
                setFormData={setFormData} 
                backendFunction={backendSubmit}
                submitBtnText="Submit Changes"
            />}
        </div>
    )
}