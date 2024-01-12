import React from "react";
import "../styles.css";
import tasks from "../tasks";
import TodayTask from "./TodayTask";

export default function TodayTasks() {
    const areDateEqual = (date1, date2) => {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        )
    }
    
    const todayTask = tasks.filter((task) => areDateEqual(task.dueDate, new Date(Date.now())));
    // const todayTaskElement = todayTask.map((task, id) => {
    //     return (
    //         <TodayTask 
                
    //         />
    //     )
    // })
    
    return (
        <div id="todays-tasks--container">
            <div id="today-tasks-title">
                <h2 className="h2-title">Today's Tasks</h2>
                <p className="h4-title">See all</p>
            </div>
            <TodayTask />
        </div>
    )
}