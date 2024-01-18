import React from "react";
import "../styles.css";
import notificationBell from "../images/notification-bell-icon.webp";
import CheckTask from "./CheckTask";

export default function TodayTask(props) {
    const { name, urgency, completed, id } = props;
    let color, status;

    if (urgency === 1) {
        color = "rgb(236, 82, 82)";
        status = "Very urgent";
    } else if (urgency === 2) {
        color = "rgb(251, 166, 60)";
        status = "Urgent";
    } else {
        color = "rgb(52, 167, 112)";
        status = "Not Urgent";
    }

    return (
        <div id="todays-task--container">
            <div id="todays-task--descriptions">
                <div className="category-img--container">
                    <img src={notificationBell} alt="Notification Bell" width="30px" height="30px" />{/* this should be the category picture */}
                </div>
                <div id="todays-task--info">
                    <h3>{name}</h3>
                    <h4 style={{ color: color }}>{status}</h4> {/* it will be in the color of the urgency (green, yellow, red) */}
                </div>
            </div>
            {/* here we have the circle that the user can press to change the state of the task. it will also differ in color depending on the urgency */}
            <CheckTask 
                urgency={urgency} 
                completed={completed}
                id={id}    
            />
        </div>
    )
}