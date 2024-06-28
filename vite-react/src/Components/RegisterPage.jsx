import './RegisterPage.css'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import Navbar from './Navbar';

export default function RegisterPage() {
    return (
        <div>
            <Navbar />
    <div className = "registerPagebody">
        <br />
        <h1>Register</h1>
        <div className="input-box">
        <input type="text" placeholder='Username' required />
        <FaUserEdit className="icons" />
        </div>

        <div className="input-box">
        <input type="password" placeholder='Password' required />
        <MdOutlinePassword className="icons"/>
        </div>

        <div className="input-box">
        <input type="password" placeholder='Confirm password' required />
        <MdOutlinePassword className="icons"/>
        </div>

        <div className="input-box">
        <input type="email" placeholder='Email' required></input>
        <MdOutlineMail className="icons"/>
        </div>

        <div className="terms-conditions">
            <label><input type="checkbox"/> I accept the general <a href='#'> terms and conditions of use </a> </label><br />
        </div>

        <div className="terms-conditions">
            <label><input type="checkbox"/> I accept the  <a href='#'>Privacy Policy</a> </label>
        </div>

        <div className="register-button">
        <button type="submit">Register</button>
        </div>
    </div>
    <footer>@2024 All rights reserved to THE BOYZ</footer>
        </div>
    )
}