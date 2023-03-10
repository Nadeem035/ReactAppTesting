
import { Link } from "react-router-dom";
function contact (){
    return (
        <div>
            <h1>Contact Page</h1>
            <Link to="/about">About</Link> <br />
            <Link to="/">Home</Link>
        </div>
    )
}
export default contact;