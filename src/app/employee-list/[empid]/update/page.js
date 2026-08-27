'use client';
import React, { useEffect, useState } from "react";

const UpdateInfo = ({ params }) => {
  const { empid }= React.use(params);
  const employeeId = empid;
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
      const getEmpInfo = async () => {
          let data = await fetch(`http://localhost:3000/api/employee/${employeeId}`)
          data = await data.json();
          // console.log(data.result.name)
          setName(data.result?.name || '');
          setSalary(data.result?.salary || '');
          setEmail(data.result?.email || '');
      }
      getEmpInfo();
  }, [employeeId]);
  const update = async () => {
      let data = await fetch(`http://localhost:3000/api/employee/${employeeId}`, {
           method: "PUT",
           body: JSON.stringify({name, salary, email})
      })
      data = await data.json();
      if (data.success){
         alert("Successfully Updated!!")
      } else {
         alert("Try Again")
      }
  }
  return (
    <>
       <h2>Update Employee Info</h2>
       <input type="text" placeholder="Enter Employee's Name" value={name} onChange={(e) => setName(e.target.value)} /> <br/> <br/>
       <input type="text" placeholder="Enter Employee's Salary" value={salary} onChange={(e) => setSalary(e.target.value)} /> <br/> <br/>
       <input type="text" placeholder="Enter Employee's Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br/> <br/>
       <button onClick={update}>Update</button>  
    </>
  )
}

export default UpdateInfo