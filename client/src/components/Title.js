import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Title(props) {
    const { title } = props;

    return (
        <div id="section-title">
            <Link className="go-back-button" to="/">&lt;</Link>
            <h2 className="h2-title">{title}</h2>
        </div>
    )
}