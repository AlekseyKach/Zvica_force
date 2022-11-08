import axios from 'axios';
import React, { useState } from "react";

const URL_REGISTER = "http://127.0.0.1:8000/register/"
const Register = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const registerFunc = () => {
        
       


        axios.post(URL_REGISTER,{
                username: username,
                email: email,
                password: password,
                staff: false
        })
      };

  return (
    <div>
        <h1>Register/signup</h1>
        User<input value={username} onChange={(e)=>setusername(e.target.value)}></input><br/>
        Email<input value={email} onChange={(e)=>setemail(e.target.value)}></input><br/>
        password<input value={password} onChange={(e)=>setpassword(e.target.value)} type={'password'}></input><br/>
        <button onClick={()=>registerFunc()}>Register</button><hr/>
    </div>
  )
}

export default Register
