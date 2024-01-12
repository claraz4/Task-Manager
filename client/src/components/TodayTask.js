import React from "react";
import "../styles.css";
import notificationBell from "../images/notification-bell-icon.webp";
import greenCheck from "../images/green-checkmark.webp";
import greenCircle from "../images/green-circle.webp";
import redCheck from "../images/check-button-checked.webp";
import redCircle from "../images/check-button-unchecked.webp";
import yellowCheck from "../images/yellow-checkmark.webp";
import yellowCircle from "../images/yellow-circle.webp";

export default function TodayTask(props) {
    const { name, urgency } = props;
    let check, circle, color, status;

    if (urgency === 1) {
        check = redCheck;
        circle = redCircle;
        color = "rgb(236, 82, 82)";
        status = "Very urgent";
    } else if (urgency === 2) {
        check = yellowCheck;
        circle = yellowCircle;
        color = "rgb(251, 166, 60)";
        status = "Urgent";
    } else {
        check = greenCheck;
        circle = greenCircle;
        color = "rgb(52, 167, 112)";
        status = "Not Urgent";
    }

    const [taskStatus, setTaskStatus] = React.useState(circle);

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
            <img src={taskStatus} alt="Task Status" width="30px" height="30px" className="task-status-bg" />
        </div>
    )
}