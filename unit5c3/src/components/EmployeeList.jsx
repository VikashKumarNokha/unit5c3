import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [details, setDetails]= useState([]);
  useEffect(()=>{
      getdata();
  },[]);
 
async function getdata(){
    const data = await fetch("http://localhost:8080/employee")
    .then((d)=> d.json());
    console.log("DATA",data);
    setDetails(data);
  }
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {
      details.map((e)=>(
        <Link to={`/employees/${e.id}`}>  
      <div className="employee_card" style={{margin:"20px"}}>
        <img className="employee_image" src={e.image} /><br />
        <span className="employee_name">{e.employee_name}</span><br />
        <span className="employee_title">{e.title}</span>
      </div>
       </Link>
      ))
     }
    </div>
  );
};
