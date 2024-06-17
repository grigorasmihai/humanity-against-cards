import './NicknameLogin.css'
import { FaUserEdit } from "react-icons/fa";

export default function NicknameLogin() {
    return (
        <div>
    <div className = "NicknameLoginPagebody">
        <br />
        <h1> Quick Login</h1>
        <div className="input-box">
        <input type="text" placeholder='Username' required />
        <FaUserEdit className="icons" />
        </div>

        <div className="login-button">
        <button type="submit">Login</button>
        </div>
    </div>
    <footer>@2024 All rights reserved to THE BOYZ</footer>
        </div>

    )
}