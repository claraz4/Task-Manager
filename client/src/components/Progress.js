import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

// I DON'T KNOW WHY BUT WHEN I CLICK THE CHECK BUTTON FROM THIS PAGE, I NEED TO GO TO ALL TASKS FOR THE CHANGES TO APPEAR

export default function Progress() {
    const [tasksCompleted, setTasksCompleted] = React.useState(0);
    const [goalTask, setGoalTask] = React.useState(8);
    const [width, setWidth] = React.useState(tasksCompleted / goalTask * 100);

    React.useEffect(() => {
        setWidth(tasksCompleted / goalTask * 100);
    }, [tasksCompleted, goalTask]);

    console.log(width)

    React.useEffect(() => {
        console.log(tasksCompleted)
        setTasksCompleted(JSON.parse(localStorage.getItem("completedTask")).length);
    }, [localStorage.getItem("completedTask")]);

    return (
        <div id="progress-container">
            <div id="daily-progress--container">
                {/* In this box, the user will be setting to himself a specific amount of tasks to reach a break. 
                Once that amount completed, they will get a break. Maybe try to set some break ideas if he does: "Claim break". 
                Maybe if someone finishes tasks from other days, he will reach his break faster to reward not procrastinating.
                Very urgent tasks are also counted as 2.*/}
                <h3>Come on, deserve that break!</h3>
                <div className="progress-stats">
                    <div className="progress-bar">
                        <div className="progress-left" style={ { "width" : width + "%" }}></div>
                    </div>
                    <h6>{tasksCompleted}/{goalTask}</h6>
                </div>
                <div className="white-button">Claim that break!</div>
            </div>
            <Link className="add-button" to="./add-task">+</Link>
        </div>
    )
}