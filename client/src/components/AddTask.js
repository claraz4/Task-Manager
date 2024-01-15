import React from "react";
import "../styles.css";
import categories from "../categories";
import { Link } from "react-router-dom";
import all from "../months";
import axios from "axios";
import Title from "./Title";

// A PROBLEM TO FIX: YOU CAN'T SET A TASK FOR A DATE THAT ALREADY PASSED
// YOU NEED TO REMOVE THE DATES THAT ARE BEFORE TODAY
// YOU ALSO NEED TO ADD WHENEVER A TASK IS OVERDUE

// ADD A MESSAGE TO SAY THAT THE TASK WAS ADDED

// YOU NEED TO TAKE INTO CONSIDERATION ALL THE REQUIREMENTS IN THE SCHEMA THAT CAN CAUSE PROBLEMS IN ADDING THE TASK

export default function AddTask() {
    const [formData, setFormData] = React.useState({
        name: "",
        urgency: 3,
        category: 1,
        description: "",
        day: 1,
        month: 0,
        year: (new Date(Date.now())).getFullYear()
    });

    const [errorMessage, setErrorMessage] = React.useState("");
    const [showErrorMessage, setShowErrorMessage] = React.useState(false);

    const classname = " active-blue-button";
    const [btnStatus, setBtnStatus] = React.useState(["", "", " active-blue-button"]);

    // Handle form change
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    // Handle urgency change
    function handleClick(event) {
        const btn = Number(event.target.value);

        let newStatus = ["", "", ""];
        for (let i = 0; i < btnStatus.length; i++) {
            if (i === btn - 1) {
                newStatus[i] = classname;
            }
        }
        setBtnStatus(newStatus);

        setFormData(prevData => {
            return {
                ...prevData,
                urgency: btn
            }
        });
    }

    // Create the options array for categories
    const categoriesElement = categories.map((category, id) => {
        return (
            <option
                key={id}
                value={category.id}
            >
                {category.name}
            </option>
        )
    })

    // Finds out whether the year is a leap year
    const isLeapYear = (year) => {
        // apply logic rules to get to that final answer
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }

    // Create the day array for the date
    const {daysInMonths} = all;
    const [daysElement, setDaysElement] = React.useState([]);
    React.useEffect(() => {
        // find out the number of the days in that month
        let days;
        if (Number(formData.month) !== 1) {
            days = daysInMonths[formData.month];
        } else {
            // find out if the year is a leap year
            days = isLeapYear(Number(formData.year)) ? 29 : 28;
        }

        // construct the numbers array
        let daysArr = [];
        for (let i = 0; i < days; i++) {
            daysArr[i] = i + 1;
        }

        // construct the rendered array
        setDaysElement(daysArr.map((day, id) => {
            return (
                <option
                    key={id}
                    value={day}
                >
                    {day}
                </option>
            )
        }))

    }, [formData.month, formData.year]);

    // Create the months array for the date
    const { fullMonths } = all;
    const monthsElement = fullMonths.map((month, id) => {
        return (
            <option
                key={id}
                value={id}
            >
                {month}
            </option>
        )
    })

    // Create the years array for the date
    let years = [];
    const [yearsElement, setYearsElement] = React.useState([]);
    React.useEffect(() => {
        const currentYear = new Date(Date.now()).getFullYear();
        const range = 20;
        
        for (let i = 0; i < range; i++) {
            years[i] = currentYear + i;
        }

        setYearsElement(years.map((year, id) => {
            return (
                <option
                    key={id}
                    value={year}
                >
                    {year}
                </option>
            )
        }))
    }, []);

    // Handle the submission of the form
    async function handleSubmit(event) {
        event.preventDefault();

        // check that all required elements are filled
        if (formData.name.trim() === "") {
            showError("Please enter the task's title!");
            return;
        }

        try {
            await axios.post('/api/v1/tasks', formData);
        } catch (error) {
            console.log(error);
        }
    }

    // Changes when we show the error
    const showError = (msg) => {
        setErrorMessage(msg);
        setShowErrorMessage(true);

        setTimeout(() => setShowErrorMessage(false), 3900);
    }

    return (
        <div id="subpages-container">
            {showErrorMessage &&
                <p id="error-message">{errorMessage}</p>
            }
            <Title title="Create a New Task" />
            <form id="form-container" onSubmit={handleSubmit}>
                <label className="h1-title" htmlFor="task-name">Task Name</label>
                <input
                    name="name"
                    type="text"
                    id="task-name"
                    className="input-box"
                    onChange={handleChange}
                    autoFocus="on"
                    autoComplete="off"
                    placeholder="Workout"
                />
                <br />
                <br />

                <h1 className="h1-title">Urgency</h1>
                <div className="button-container">
                    <button type="button" value="1" className={`blue-button${btnStatus[0]}`} onClick={handleClick}>Very Urgent</button>
                    <button type="button" value="2" className={`blue-button${btnStatus[1]}`} onClick={handleClick}>Urgent</button>
                    <button type="button" value="3" className={`blue-button${btnStatus[2]}`} onClick={handleClick}>Not Urgent</button>
                </div>
                <br />
                <br />

                <label htmlFor="category" className="h1-title">Category</label>
                <select
                    id="category"
                    name="category"
                    className="select-input"
                    onChange={handleChange}
                >
                    <option disabled>--Select a category--</option>
                    {categoriesElement}
                </select>
                <br />
                <br />

                <h1 className="h1-title">Due Date</h1>
                <div id="date-input--container">
                    <select
                        id="day"
                        name="day"
                        className="select-input smaller-input"
                        onChange={handleChange}
                    >
                        <option disabled>--Select a day--</option>
                        {daysElement}
                    </select>

                    <select
                        id="month"
                        name="month"
                        className="select-input medium-input"
                        onChange={handleChange}
                    >
                        <option disabled>--Select a month--</option>
                        {monthsElement}
                    </select>

                    <select
                        id="year"
                        name="year"
                        className="select-input small-input"
                        onChange={handleChange}
                    >
                        <option disabled>--Select a year--</option>
                        {yearsElement}
                    </select>
                </div>
                <br />
                <br />

                <label htmlFor="description" className="h1-title">Description</label>
                <textarea 
                    name="description" 
                    id="description" 
                    placeholder="Workout shoulders, chest, and triceps."
                    className="textarea-input"
                    onChange={handleChange}
                    defaultValue={formData.description}
                ></textarea>
                <br />
                <br />

                <button className="blue-button">Add Task</button>
            </form>
        </div>
    );
}