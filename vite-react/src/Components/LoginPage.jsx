import './LoginPage.css'
import { FaUserEdit } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import {Link} from "react-router-dom";


export default function LoginPage() {
    return (
        <div>
    <div className = "loginPageBody">
        <br />
        <h1>Login</h1>
        <div className="input-box">
        <input type="text" placeholder='Username' required />
        <FaUserEdit className="loginicon" />
        </div>

        <div className="input-box">
        <input type="password" placeholder='Password' required />
        <MdOutlinePassword className="loginicon"/>
        </div>

        <div className="remember-forgot-password">
            <label><input type="checkbox"/> Remember me </label><br />
            <a href='#'>Forgot Password?</a>
        </div>

        <div className="login-button">
        <button type="submit">Login</button>
        </div>
        <br />
        <div className="register-button">
            <p>Don't have an account? <a href="registration"><Link to="register"> Register </Link></a></p>
        </div>
        <div className="quicklogin-button">
            <p>Lazy to make an account? <a href="quicklogin"><Link to="quicklogin">Quick Login </Link></a></p>
        </div>
    </div>
    <footer>@2024 All rights reserved to THE BOYZ</footer>
    </div>
    )
}
