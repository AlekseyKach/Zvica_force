import React, { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
const Login = () => {
    const [loginUser, setloginUser] = useState(false)
    const [username, setusername] = useState("")
    const [password, setpassword] = useState()
    const login = async () => {
        // console.log("bef");
        let response = await fetch("http://127.0.0.1:8000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        let data = await response.json();
 
        if (response.status === 200) {
            console.log(jwt_decode(data.access));
            setloginUser(true)
            // setUser(jwt_decode(data.access))
            localStorage.setItem("authTokens", JSON.stringify(data));
            // history.push('/')
        } else {
            alert("Something went wrong!");
        }
    };
  return (
    <div>
         <h1>Login</h1>
                {loginUser}
                Logged:{loginUser  && 'True'}{loginUser ==false  && 'false'}<br></br>
               User <input value={username} onChange={(e)=>setusername(e.target.value)}/>
               Pwd <input  value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <button onClick={() => login()}>Login</button>

    </div>
  )
}

export default Login