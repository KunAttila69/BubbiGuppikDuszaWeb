import { useState } from "react";
import { Link } from "react-router-dom";
const RegistartionPage = () => {
    const [roleValue, setRoleValue] = useState("0")

    return ( 
        <div id="register-content">
            <form action="Login">
                <label htmlFor="username">Felhasználónév : </label>
                <input type="text" class="register-input" id="username" placeholder="Username"/>
                <label htmlFor="password">Jelszó : </label>
                <input type="password" class="register-input" id="password" placeholder="Password"/>
                <label htmlFor="register-role-select">Szerepkör</label>
                <select name="role-select" id="register-role-select" class="register-input" onChange={e => setRoleValue(e.target.value)}>
                    <option value="0">Versenyző</option>
                    <option value="1">Tanár</option>
                </select>
                {roleValue === "0" &&
                    <div id="register-class-content">
                        <label htmlFor="register-class-dropdown">Class</label>
                        <select name="" id="register-class-dropdown" class="register-input">
                            <option value="">ASD</option>
                            <option value="">ASD2</option>
                        </select>
                    </div>
                    }
                <button>REGISZTRÁCIÓ</button>
            </form>
            <Link to={"/login"}>
                <p>I already have an account</p>
            </Link>
        </div>
    );
}
 
export default RegistartionPage;