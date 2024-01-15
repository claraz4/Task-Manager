import React from "react";
import "../styles.css";
import searchIcon from "../images/search-icon.webp";
import notificationBell from "../images/notification-bell-icon.webp";
import SearchResults from "./SearchResults";

export default function Navbar() {
    const [searchInput, setSearchInput] = React.useState("");
    const [focusedInput, setFocusedInput] = React.useState(false);

    // Handle the change when the user is typing
    function handleChange(event) {
        setSearchInput(event.target.value);
    }
    
    // Know when the user is in the search bar
    function handleFocus() {
        setFocusedInput(true);
    }

    function handleBlur() {
        setFocusedInput(false);
    }

    return (
        <div>
            <nav id="navbar-container">
                <div id="search-container">
                    <img src={searchIcon} width="16px" height="16px" alt="Search" id="search-icon"/>
                    <input 
                        id="search-bar"
                        name="search-bar"
                        type="text"
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="Search task"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>
                <div id="profile-container">
                    <div id="profile-pic"></div>
                    <div id="notification-container">
                        <img src={notificationBell} alt="Notification Bell" width="20px" height="20px" />
                        <div id="notification-notifier"></div>
                    </div>
                </div>
            </nav>
            {focusedInput && <SearchResults input={searchInput} focusedInput={focusedInput} />}
        </div>
    )
}