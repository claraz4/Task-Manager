import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Title(props) {
    const { title, toLink } = props;

    return (
        <div id="section-title">
            <Link className="go-back-button" to={toLink}>&lt;</Link>
            <h2 className="h2-title">{title}</h2>
        </div>
    )
}