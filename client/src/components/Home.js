import React from "react";
import "../styles.css";
import Navbar from "./Navbar";
import Progress from "./Progress";
import ImportantTasks from "./ImportantTasks";
import TodayTask from "./TodayTasks";

export default function Home() {
    // maybe you can have a tab for stats (daily progress, weekly progress, tasks completed, tasks overdue...)
    return (
        <div>
            <Navbar />
            <div className="page-container">
                <Progress />
                <ImportantTasks />
                <TodayTask />
            </div>
        </div>
    );
}