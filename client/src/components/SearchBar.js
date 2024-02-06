import React from "react";
import "../styles.css";
import searchIcon from "../images/search-icon.webp";

export default function SearchBar() {
    const [searchInput, setSearchInput] = React.useState("");

    // Handle the change when the user is typing
    function handleChange(event) {
        setSearchInput(event.target.value);
    }
    
    React.useEffect(() => {

    }, [searchInput])

    return (
        <div id="search-container">
            <img src={searchIcon} width="16px" height="16px" alt="Search" id="search-icon"/>
            <input 
                id="search-bar"
                name="search-bar"
                type="text"
                onChange={handleChange}
                autoComplete="off"
                placeholder="Search task"
            />
        </div>
    )
}