import { useState } from 'react'
import './Form.css'


export const Form = ()=>{
    const [info,setInfo] = useState({
        username : "",
        age: "",
        address : "",
        department : "",
        salary : "",
        marital_status : ""
    });
    const handlechange = (e)=>{
        const {id ,value} = e.target;
        setInfo({
            ...info,
            [id] : value
        })
    }
    // const handlesubmit=()=>{
        
    //     let payload = {
    //         username : info.username,
    //         age: info.age,
    //         address: info.address,
    //         Department : info.Department,
    //         salary : info.salary,
    //         marital_status: info.marital_status
    //     };
    //     fetch("http://localhost:8080/users",{
    //         method: "POST",
    //         headers:{
    //             "content-type" : "application/json"
    //         },
    //         body: JSON.stringify(payload)
    //     });
    // }
    return (
        <div className="userform">
            <label>Username : </label>
            <input onChange={handlechange} type="text" placeholder="Name" id="username" /><br />
            <label>Age : </label>
            <input onChange={handlechange} type="number" placeholder="Age" id="age" /><br />
            <label>Address : </label>
            <input onChange={handlechange} type="text" id="address" /><br />
            <label>Department : </label>
            <select onChange={handlechange} id="department">
                <option value="MAC">MAC Team</option>
                <option value="Instructor">Instructor</option>
                <option value="Operation">Operation</option>
            </select><br />
            <label>Salary : </label>
            <input onChange={handlechange} type="number"  id="salary" /><br />
            <label>Marital Status : </label>
            <input onChange={handlechange} type="checkbox" id="marital_status" /><br />
            <button onClick={()=>{
                const payload = {
                    username : info.username,
                    age: info.age,
                    address: info.address,
                    Department : info.department,
                    salary : info.salary,
                    marital_status: info.marital_status
                };
                fetch("http://localhost:8080/users",{
                    method: "POST",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(payload)
                });
            }}>submit</button>
        </div>
    )
}