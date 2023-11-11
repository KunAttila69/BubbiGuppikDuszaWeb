import { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
    const [login, setLogin] = useState()

    fetch("localhost:3000")
        .then((response)=>{
            setLogin(response.data)
        })
    return ( 
        <div className="content">
            <form action="Login">
                <label htmlFor="">Username</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="text" />
                <button>Login</button>
            </form>
            <Link to={"/register"}>
                <p>I don't have an account</p>
            </Link>
        </div>
    );
}
 
export default LoginPage;