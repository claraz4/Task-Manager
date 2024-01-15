import React from "react";
import "../styles.css";
import notificationBell from "../images/notification-bell-icon.webp";
import greenCheck from "../images/green-checkmark.webp";
import greenCircle from "../images/green-circle.webp";
import redCheck from "../images/check-button-checked.webp";
import redCircle from "../images/check-button-unchecked.webp";
import yellowCheck from "../images/yellow-checkmark.webp";
import yellowCircle from "../images/yellow-circle.webp";

export default function SingleTask(props) {
    const { name, urgency, description, completed } = props;
    let progress, color, status;

    if (urgency === 1) {
        progress = completed ? redCheck : redCircle;
        color = "rgb(236, 82, 82)";
        status = "Very urgent";
    } else if (urgency === 2) {
        progress = completed ? yellowCheck : yellowCircle;
        color = "rgb(251, 166, 60)";
        status = "Urgent";
    } else {
        progress = completed ? greenCheck : greenCircle;
        color = "rgb(52, 167, 112)";
        status = "Not Urgent";
    }

    const [taskStatus] = React.useState(progress);

    return (
        <div id="single-task--container">
            <div id="todays-task--descriptions">
                <div className="category-img--container">
                    <img src={notificationBell} alt="Notification Bell" width="30px" height="30px" />{/* this should be the category picture */}
                </div>
                <div id="single-task--info">
                    <div id="single-task--title">
                        <h3>{name}</h3>
                        <p>&#x2022;&#x2022;&#x2022;</p>
                    </div>
                    <h4 style={{ color: color }}>{status}</h4> {/* it will be in the color of the urgency (green, yellow, red) */}
                    <p>{description}</p>
                </div>
            </div>
            {/* here we have the circle that the user can press to change the state of the task. it will also differ in color depending on the urgency */}
            <img src={taskStatus} alt="Task Status" width="30px" height="30px" className="task-status-bg" />
        </div>
    )
}