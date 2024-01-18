import React from "react";
import "../styles.css";
import ImportantTask from "./ImportantTask";

export default function ImportantTasks() {
    // Get the important tasks
    const [tasks, setTasks] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/v1/tasks')
            .then((res) => res.json())
            .then((data) => setTasks(data.data))
            .catch((error) => console.log(error));
    }, [])
    
    const importantTasks = tasks.filter((task) => task.urgency === 1 && !task.completed);
    const importantTasksElement = importantTasks.map((task, id) => {
        return (
            <ImportantTask
                key={id}
                name={task.name}
                day={task.day}
                month={task.month}
                year={task.year}
                urgency={task.urgency}
                category={task.category}
                description={task.description}
                id={task._id}
                completed={task.completed}
                task={task}
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