import React from "react";
import "../styles.css";
import notificationBell from "../images/notification-bell-icon.webp";
import greenCheck from "../images/green-checkmark.webp";
import greenCircle from "../images/green-circle.webp";
import redCheck from "../images/check-button-checked.webp";
import redCircle from "../images/check-button-unchecked.webp";
import yellowCheck from "../images/yellow-checkmark.webp";
import yellowCircle from "../images/yellow-circle.webp";
import all from "../months";
import { Link } from "react-router-dom";
import bin from "../images/bin.webp"
import binCover from "../images/bin-cover.webp"
import DeleteTask from "./DeleteTask";

export default function SingleTask(props) {
    const { name, urgency, description, completed, id, day, month, year } = props;
    const { months } = all;
    const [isDeleting, setIsDeleting] = React.useState(false);
    let progress, color, status, backgroundColor;

    if (urgency === 1) {
        progress = completed ? redCheck : redCircle;
        color = "rgb(236, 82, 82)";
        backgroundColor = "rgba(236, 82, 82, 0.2)";
        status = "Very urgent";
    } else if (urgency === 2) {
        progress = completed ? yellowCheck : yellowCircle;
        color = "rgb(251, 166, 60)";
        backgroundColor = "rgba(251, 166, 60, 0.2)";
        status = "Urgent";
    } else {
        progress = completed ? greenCheck : greenCircle;
        color = "rgb(52, 167, 112)";
        backgroundColor = "rgba(52, 167, 112, 0.2)";
        status = "Not Urgent";
    }

    const [taskStatus] = React.useState(progress);

    // Handle the delete click
    function handleClick() {
        setIsDeleting(true);
    }

    // Sets the isDeleting to false
    function finishDelete() {
        setIsDeleting(false);
        window.location.reload();
    }

    return (
        <div id="single-task--container">
            <div id="todays-task--descriptions">
                <div className="category-img--container">
                    <img src={notificationBell} alt="Notification Bell" width="30px" height="30px" />{/* this should be the category picture */}
                </div>
                <div id="single-task--info" onClick={handleClick}>
                    <div id="single-task--title">
                        <h3>{name}</h3>
                        <Link to='/edit-task' state={ {info: { id: id, toLink: "/all-tasks" }} }>&#x2022;&#x2022;&#x2022;</Link>
                        <div id="bin-container">
                            <img src={binCover} alt="Bin" height="4px" width="17px" id="bin-cover" />
                            <img src={bin} alt="Bin" height="17px" width="17px" />
                        </div>
                    </div>
                    <h4 style={{ color: color }}>{status}</h4> {/* it will be in the color of the urgency (green, yellow, red) */}
                    <p>{description}</p>
                    <p className="task-date" style={{ backgroundColor: backgroundColor, color: color }}>{`${day} ${months[month]} ${year}`}</p>
                </div>
            </div>
            {/* here we have the circle that the user can press to change the state of the task. it will also differ in color depending on the urgency */}
            <img src={taskStatus} alt="Task Status" width="30px" height="30px" className="task-status-bg" />
            {isDeleting && 
                <DeleteTask 
                    name={name}
                    id={id}
                    day={day}
                    month={month}
                    year={year}
                    finishDelete={finishDelete}
                />}
        </div>
    )
}