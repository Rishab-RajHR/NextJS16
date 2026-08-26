'use client';

import { useState } from "react";

const Register = () => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const registerUser = async () => {
      //  console.log(username,age);
      let data = await fetch('/api/users', {
           method: 'POST',
           headers: {
              'Content-Type': 'application/json' 
           },
           body: JSON.stringify({username,age})
      })
      data = await data.json();
      console.log(data)
  }
  return (
    <>
     <h2>Register Users</h2>
     <input type="text" placeholder="Enter Your Name" onChange={(e) => setUserName(e.target.value)}/>  <br/> <br/>
     <input type="number" placeholder="Enter Your Age" onChange={(e) => setAge(e.target.value)}/> <br/> <br/>
     <button onClick={registerUser}>Register</button>
    </>
  )
}

export default Register