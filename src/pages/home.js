import { Link } from "react-router-dom";

function home (){
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/about">About</Link> <br />
            <Link to="/contact">Contact</Link>
        </div>
    )
}
export default home;