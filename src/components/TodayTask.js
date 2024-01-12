import React from "react";
import "../styles.css";
import notificationBell from "../images/notification-bell-icon.webp";

export default function TodayTask(props) {
    return (
        <div id="todays-task--container">
            <div className="category-img--container">
                <img src={notificationBell} alt="Notification Bell" width="30px" height="30px" />{/* this should be the category picture */}
            </div>
            <div id="todays-task--info">
                <h3>Props Name</h3>
                <h4>Task status</h4> {/* it will be in the color of the urgency (green, yellow, red) */}
            </div>
            {/* here we have the circle that the user can press to change the state of the task. it will also differ in color depending on the urgency */}
        </div>
    )
}