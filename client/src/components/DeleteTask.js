import React from "react";
import "../styles.css";
import axios from "axios";
import all from "../months";

export default function DeleteTask(props) {
    const { name, id, day, month, year, finishDelete } = props;
    const { months } = all;
    console.log(id);

    // Delete a task
    async function deleteTask(id) {
        try {
            await axios.delete(`/api/v1/tasks/${id}`);
            // message to say it's delete
            finishDelete();
            window.location.reload();
        } catch (error) {
            console.log("error");
        }

        const previousItems = new Set(JSON.parse(localStorage.getItem("completedTask")) || []);
        previousItems.delete(name);
        localStorage.setItem("completedTask", JSON.stringify(Array.from(previousItems)));
    }

    // Go back to all tasks
    function goBack() {
        finishDelete();
    }

    return (
        <div id="delete-task--container">
            <h5 className="h5-title">Are you sure you want to delete the following task?</h5>
            <br />
            <h3 className="h3-title">{`TASK: ${name}`}</h3>
            <h3 className="h3-title">{`DUE: ${day} ${months[month]} ${year}`}</h3>

            <div id="btn--container">
                <button className="red-button" onClick={() => deleteTask(id)}>Delete</button>
                <button className="red-button" onClick={goBack}>Back to tasks</button>
            </div>
        </div>
    )
}