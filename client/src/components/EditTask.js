import React from "react";
import "../styles.css";
import { useLocation } from "react-router-dom";
import Title from "./Title";
import TaskForm from "./TaskForm";
import axios from "axios";
import DeleteTask from "./DeleteTask";
import { useNavigate } from "react-router-dom";

export default function EditTask() {
    const location = useLocation();
    const navigate = useNavigate();
    const toLink = location.state.info.toLink;
    const [taskID] = React.useState(location.state.info.id);
    const [isLoading, setIsLoading] = React.useState(true);
    
    const [formData, setFormData] = React.useState({});
    const [isDeleting, setIsDeleting] = React.useState(false);

    const [name, setName] = React.useState("");
    const [id, setID] = React.useState("");
    const [day, setDay] = React.useState(0);
    const [month, setMonth] = React.useState("");
    const [year, setYear] = React.useState(2024);

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
            setID(formData._id);
            setName(formData.name);
            setDay(formData.day);
            setMonth(formData.month);
            setYear(formData.year);
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

    // The user pressed the delete button
    function handleDelete() {
        setIsDeleting(true);
    }

    // Sets the isDeleting to false
    function finishDelete() {
        setIsDeleting(false);
        navigate('/');
    }

    return (
        <div id="subpages-container">
            <Title title="Edit Task" toLink={toLink} />
            {!isLoading && 
                <div>
                    <TaskForm 
                        formData={formData} 
                        setFormData={setFormData} 
                        backendFunction={backendSubmit}
                        submitBtnText="Submit Changes"
                    />
                    <button onClick={handleDelete} className="red-button-large">Delete Task</button>
                </div>
            }
            {!isLoading && isDeleting && 
                <DeleteTask 
                    name={name}
                    id={id}
                    day={day}
                    month={month}
                    year={year}
                    finishDelete={finishDelete}
                />}
        </div>
    )
}