import { useState } from "react";
import { Link } from "react-router-dom";
const RegistartionPage = () => {
    const [roleValue, setRoleValue] = useState("0")

    return ( 
        <div className="content">
            <form action="Login">
                <label htmlFor="">Username</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="text" />
                <label htmlFor="">Role</label>
                <select name="role-select" id="role-select" onChange={e => setRoleValue(e.target.value)}>
                    <option value="0">Competitor</option>
                    <option value="1">Teacher</option>
                    <option value="2">Judge</option>
                    <option value="3">Webmaster</option>
                </select>
                <label htmlFor="">Class</label>
                {roleValue === "0" && <select name="" id="">
                    <option value="">ASD</option>
                    <option value="">ASD2</option>
                </select>}
                <button>Login</button>
            </form>
            <Link to={"/login"}>
                <p>I already have an account</p>
            </Link>
        </div>
    );
}
 
export default RegistartionPage;