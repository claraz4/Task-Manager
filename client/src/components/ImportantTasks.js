import React from "react";
import "../styles.css";
import ImportantTask from "./ImportantTask";
import tasks from "../tasks";

export default function ImportantTasks() {
    const importantTasks = tasks.filter((task) => task.urgency === 1);
    const importantTasksElement = importantTasks.map((task, id) => {
        return (
            <ImportantTask
                key={id}
                name={task.name}
                dueDate={task.dueDate}
                urgency={task.urgency}
                category={task.category}
                description={task.description}
            />
        )
    })
    
    return (
        <div id="important-tasks--container">
            <h2 className="h2-title">Important Tasks:</h2>
            <div id="important-tasks">
                {importantTasksElement}
            </div>
        </div>
    )
}