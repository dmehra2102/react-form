import { useEffect, useState } from "react"

export const TableList = ()=>{
    const [list ,setList] = useState([]);
    useEffect(()=>{
            fetch("http://localhost:8080/users").then((d)=> d.json()).then((data)=> {
                setList(data);
                // console.log(data)
                // console.log(data[0].username)
            });
            // console.log(list)
        // console.log(typeof list[0]);
        // console.log(list[0]);
        console.log(list)
    },[]);
    return (
           <div>
               <table>
                        <thead>
                           <tr>
                               <th>Name</th>
                               <th>Age</th>
                               <th>Address</th>
                               <th>Department</th>
                               <th>Salary</th>
                               <th>Martial Status</th>
                           </tr>
                       </thead>
               {list.map((el)=>{
                    
                   return <tbody>
                        <tr>
                            <td>{el.username}</td>
                            <td>{el.age}</td>
                            <td>{el.address}</td>
                            <td>{el.Department}</td>
                            <td>{el.salary}</td>
                            <td>{(el.marital_status==="")? "Not Married" : "Married"}</td>
                        </tr>
                    </tbody>
                  
                })}
                </table>
           </div>
    )
}