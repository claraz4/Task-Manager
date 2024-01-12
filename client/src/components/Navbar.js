import React from "react";
import "../styles.css";
import searchIcon from "../images/search-icon.webp";
import notificationBell from "../images/notification-bell-icon.webp";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav id="navbar-container">
            <div id="search-container">
                <img src={searchIcon} width="16px" height="16px" alt="Search" id="search-icon"/>
                <h4 className="h4-title">Search tasks</h4>
            </div>
            <div id="profile-container">
                <div id="profile-pic"></div>
                <div id="notification-container">
                    <img src={notificationBell} alt="Notification Bell" width="20px" height="20px" />
                    <div id="notification-notifier"></div>
                </div>
            </div>
        </nav>
    )
}