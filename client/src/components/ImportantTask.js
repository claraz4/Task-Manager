import React from "react";
import "../styles.css";
import all from "../months";
import { Link } from "react-router-dom";
import CheckTask from "./CheckTask";

export default function ImportantTask(props) {
    const {
        name,
        day,
        month,
        year,
        description,
        id,
        completed,
        task
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
                <CheckTask 
                    urgency={1} 
                    completed={completed}
                    id={id}
                    task={task}
                />
            </div>
        </div>
    )
}