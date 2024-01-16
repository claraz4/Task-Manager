import React from "react";
import "../styles.css";
import notificationBell from "../images/notification-bell-icon.webp";
import all from "../months";
import { useNavigate } from "react-router-dom";

export default function SearchResults(props) {
    const [input, setInput] = React.useState(props.input);
    const [tasks, setTasks] = React.useState([]);
    const [task, setTask] = React.useState({});
    const [tasksResultElement, setTasksResultElement] = React.useState([]);
    const { months } = all;
    const navigate = useNavigate();

    // MAYBE MOVE THIS STEP TO THE EDIT TASK (FROM THE LOADING) AND INSTEAD THE STATE WILL BE THE ID
    // Handles get single task requests
    const fetchTask = async (id) => {
        try {
            const res = await fetch(`/api/v1/tasks/${id}`);
            const data = await res.json();
            setTask(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Change the input according to the props
    React.useEffect(() => {
        setInput(props.input);
    }, [props.input, props.focusedInput])

    // Get the data
    const fetchData = async () => {
        try {
            const res = await fetch('/api/v1/tasks');
            const data = await res.json();
            setTasks(() => data.data);
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    // Create the tasks result
    React.useEffect(() => {
        // find the tasks that start with the name written
        const tasksArray = tasks.filter((task) => task.name.toLowerCase().startsWith(input.toLowerCase()));
        
        // create the rendering array
        setTasksResultElement(tasksArray.map((task, id) => (
            <div id="task-searched" key={id} onClick={() => handleClick(task._id)}>
                <img src={notificationBell} alt="Category" width="40px" height="40px" />
                <h3 className="h3-title">{task.name}</h3>
                <h4 className="h4-title">{`${task.day} ${months[task.month]} ${task.year}`}</h4>
            </div>
        )));
    }, [input])

    // Handle the button click
    async function handleClick(id) {
        await fetchTask(id);
    } 

    React.useEffect(() => {
        if (Object.keys(task).length !== 0) {
            navigate('/edit-task', { state: { data: task } });
        }
    }, [task])

    return (
        <div id="search-results--container">
            {tasksResultElement}
        </div>
    )
}