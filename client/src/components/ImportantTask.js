import React from "react";
import "../styles.css";
import uncheckedButton from "../images/check-button-unchecked.webp";
import all from "../months";
import { Link } from "react-router-dom";

export default function ImportantTask(props) {
    const {
        name,
        day,
        month,
        year,
        description,
        id
    } = props;

    const { months } = all;
    
    return (
        <div id="important-task--container">
            <div id="task">
                <div id="task-info">
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>
                <Link to='/edit-task' state={ {info: { id: id, toLink: "/" }} }>&#x2022;&#x2022;&#x2022;</Link>
            </div>
            <div id="task-deadline">
                <p>{`${day} ${months[month]} ${year}`}</p>
                <img src={uncheckedButton} alt="Checkmark" width="30px" height="30px" className="task-status-bg" />
            </div>
        </div>
    )
}