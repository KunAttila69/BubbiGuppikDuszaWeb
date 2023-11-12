import { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const Login = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch("http://localhost:3001/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
    
            if (response.status === 401) {
                alert("Hibás felhasználónév vagy jelszó");
                return;
            }
    
            if (!response.ok) {
                throw new Error(`Hiba! Status: ${response.status}`);
            }
    
            const message = await response.text();
            console.log(message);
            alert(message);
        } catch (error) {
            console.error('Fetch error:', error);
        }

    }
    
    return ( 
        <div id="login-content">
            <form action="Login" autoComplete="off">
                <label htmlFor="username">Felhasználónév : </label>
                <input type="text" id="username" name="username" placeholder="Felhasználónév" class="login-input" onChange={e=>setUsername(e.target.value)}/>
                <label htmlFor="password">Jelszó : </label>
                <input type="password" id="password" name="password" placeholder="Jelszó" class="login-input" onChange={e=>setPassword(e.target.value)}/>
                <button id="login-btn" onClick={Login}>BEJELENTKEZÉS</button>
            </form>
            <div id="login-register-btn">
            <Link to={"/register"}>
                <p>Még nem regisztráltam</p>
            </Link>
            </div>
        </div>
    );
}
 
export default LoginPage;