import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <Link to="/mainpage" className="title">Home</Link>
            <ul>
                <li>
                    <Link to="/login" replace>Login</Link>
                </li>
                <li>
                <a href="#"><Link to="/register" replace> Register </Link></a>
                </li>
                <li>
                    <Link to="">Settings</Link>
                </li>
            </ul>
        </nav>
        
    )
}