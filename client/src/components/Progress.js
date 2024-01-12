import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Progress() {
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
                        <div className="progress-left"></div>
                    </div>
                    <h6>3/8</h6>
                </div>
                <div className="white-button">Claim that break!</div>
            </div>
            <Link className="add-button" to="./add-task">+</Link>
        </div>
    )
}