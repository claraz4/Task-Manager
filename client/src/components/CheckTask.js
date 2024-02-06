import React from "react";
import "../styles.css";
import greenCheck from "../images/green-checkmark.webp";
import greenCircle from "../images/green-circle.webp";
import redCheck from "../images/check-button-checked.webp";
import redCircle from "../images/check-button-unchecked.webp";
import yellowCheck from "../images/yellow-checkmark.webp";
import yellowCircle from "../images/yellow-circle.webp";
import axios from "axios";

export default function CheckTask(props) {
    const { urgency, id, task } = props;
    const opacity1Class = "opacity-1";
    const opacity0Class = "opacity-0";

    const [completed, setCompleted] = React.useState(props.completed);
    const [opacity, setOpacity] = React.useState(completed ? opacity1Class : opacity0Class);

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

    async function handleClick() {
        // change the value of completed depending on the previous value

        try {
            await editTask(id);
        } catch (error) {
            console.log(error);
        }
        setCompleted(prev => !prev);
        window.location.reload();
    }

    const editTask = async (taskID) => {
        let res, updated;
        try {
            res = await axios.patch(`/api/v1/tasks/${taskID}`, {
                ...task,
                completed: !completed
            });
        } catch (error) {
            console.log(error);
        }

        updated = res.data.updatedData;
        handleLocalStorage(updated);
    }

    const handleLocalStorage = (updatedTask) => {
         // get the previous items
        const previousItems = new Set(JSON.parse(localStorage.getItem("completedTask")) || []);
        console.log("name: " + updatedTask.name + "   status: " + updatedTask.completed);
         if (updatedTask.completed) {
             setOpacity(opacity1Class);

             // add to the local storage
             previousItems.add(updatedTask.name);
             localStorage.setItem("completedTask", JSON.stringify(Array.from(previousItems)));
         } else {
             setOpacity(opacity0Class);
             // construct the new array
             previousItems.delete(updatedTask.name);
             localStorage.setItem("completedTask", JSON.stringify(Array.from(previousItems)));
         }
         console.log(previousItems)
    };

    
    return (
        <div id="check-buttons--container">
            <img 
                src={circle} 
                alt="Checkmark" 
                width="30px" 
                height="30px" 
                className="task-status-bg circle-button" 
                onClick={handleClick}
            />
            <img 
                src={check} 
                alt="Checkmark" 
                width="30px" 
                height="30px" 
                className={`task-status-bg check-button ${opacity} ${!completed ? "hover" : ""}`}
                style={ { opacity: opacity } }
                onClick={handleClick}
            />
        </div>
    )
}