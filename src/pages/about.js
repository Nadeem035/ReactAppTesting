import React from "react";
import { Link } from "react-router-dom";
function about (){
    return (
        <div>
            <h1>About Page</h1>
            <Link to="/">Home</Link> <br />
            <Link to="/contact">Contact</Link>
        </div>
    )
}
export default about;