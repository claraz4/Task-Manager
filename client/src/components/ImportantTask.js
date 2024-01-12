import React from "react";
import "../styles.css";
import uncheckedButton from "../images/check-button-unchecked.webp";
import checkedCheck from "../images/check-button-checked.webp";
import all from "../months";

export default function ImportantTask(props) {
    const {
        name,
        dueDate,
        urgency,
        category,
        description
    } = props;

    const { months } = all;
    
    return (
        <div id="important-task--container">
            <div id="task">
                <div id="task-info">
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>
                <p>&#x2022;&#x2022;&#x2022;</p>
            </div>
            <div id="task-deadline">
                <p>{`${dueDate.getDate()} ${months[dueDate.getMonth()]} ${dueDate.getFullYear()}`}</p>
                <img src={uncheckedButton} alt="Checkmark" width="30px" height="30px" className="task-status-bg" />
            </div>
        </div>
    )
}