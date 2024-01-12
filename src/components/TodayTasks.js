import React from "react";
import "../styles.css";
import tasks from "../tasks";
import TodayTask from "./TodayTask";

export default function TodayTasks() {
    const [todayTask, setTodayTask] = React.useState([]);
    const [todayTaskElement, setTodayTaskElement] = React.useState([]);
    
    const areDateEqual = (date1, date2) => {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        )
    }

    React.useEffect(() => {
        setTodayTask(tasks.filter((task) => areDateEqual(task.dueDate, new Date(Date.now()))));
    }, [tasks]);

    React.useEffect(() => {
        setTodayTaskElement(todayTask.map((task, id) => {
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