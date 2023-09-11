import React  from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="jumbotron">
            <h1>Multiverse Adminstration</h1>
            <p>welcome to multiverse </p>
            <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        </div>
    )
}