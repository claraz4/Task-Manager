import React from "react";
import "../styles.css";
import TodayTask from "./TodayTask";

export default function TodayTasks() {
    const [tasks, setTasks] = React.useState([]);
    const [todayTask, setTodayTask] = React.useState([]);
    const [todayTaskElement, setTodayTaskElement] = React.useState([]);
    
    const fetchData = async () => {
        try {
            const res = await fetch('/api/v1/tasks');
            const data = await res.json();
            setTasks(() => data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const areDateEqual = (date1, date2) => {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        )
    }

    // Get the tasks from the database
    React.useEffect(() => {
        fetchData();
    }, []);

    // Get the tasks from today
    React.useEffect(() => {
        setTodayTask(() => tasks.filter((task) => {
            const dueDate = new Date(task.year, task.month, task.day);
            return areDateEqual(dueDate, new Date(Date.now()));
        }));
    }, [tasks])

    // Create the rendered array
    React.useEffect(() => {
        setTodayTaskElement(() => todayTask.map((task, id) => {
            return (
                <TodayTask 
                key={id}
                name={task.name}
                urgency={task.urgency}
                />
                )
        })); 
    }, [todayTask]);

    return (
        <div id="todays-tasks--container">
            <div id="today-tasks-title">
                <h2 className="h2-title">Today's Tasks</h2>
                <p className="h4-title">See all</p>
            </div>
            {todayTaskElement}
        </div>
    )
}