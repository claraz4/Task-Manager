import React from "react";
import "../styles.css";
import Title from "./Title";
import SingleTask from "./SingleTask";

// I need to have the overdue tasks, the completed tasks, and the current tasks
export default function AllTasks() {
    const [tasks, setTasks] = React.useState([]);
    const [overdueTasks, setOverdueTasks] = React.useState([]);
    const [completedTasks, setCompletedTasks] = React.useState([]);
    const [currentTasks, setCurrentTasks] = React.useState([]);

    // Get all tasks
    const fetchData = async () => {
        try {
            const res = await fetch('/api/v1/tasks');
            const data = await res.json();
            setTasks(() => data.data);
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    const taskElement = (task, id) => {
        return (
            <SingleTask 
                key={id}
                name={task.name}
                urgency={task.urgency}
                description={task.description}
                completed={task.completed}
            />
        )
    }
    
    // Create the arrays to be rendered
    React.useEffect(() => {
        // overdue array
        const tomorrowsDate = new Date(Date.now() + 86400); // 1 day = 86 400 sec
        const overdueTasksArray = tasks.filter((task) => {
            const taskDate = new Date(task.year, task.month, task.day);
            return tomorrowsDate.getTime() > taskDate.getTime() && !task.completed;
        })
        setOverdueTasks(overdueTasksArray.map((task, id) => taskElement(task, id)))
        
        // completed tasks
        const completedTasksArray = tasks.filter((task) => task.completed);
        setCompletedTasks(completedTasksArray.map((task, id) => taskElement(task, id)));

        // current tasks
        const currentTasksArray = tasks.filter((task) => !completedTasksArray.includes(task) && !overdueTasksArray.includes(task));
        setCurrentTasks(currentTasksArray.map((task, id) => taskElement(task, id)));

    }, [tasks])

    return (
        <div id="subpages-container">
            <Title title="All Tasks" />

            <h1 className="h1-title">Overdue Tasks</h1>
            <br />
            <div>{overdueTasks}</div>
            <br />
            <br />

            <h1 className="h1-title">Completed Tasks</h1>
            <br />
            <div>{completedTasks}</div>
            <br />
            <br />

            <h1 className="h1-title">Current Tasks</h1>
            <br />
            <div>{currentTasks}</div>
            <br />
            <br />
        </div>
    )
}