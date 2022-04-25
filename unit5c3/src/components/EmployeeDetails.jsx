import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
 
export const EmployeeDetails = () => {
  const {id} = useParams();

  const [details, setDetails]= useState([]);
  useEffect(()=>{
      getdata();
  },[]);
 
async function getdata(){
    const data = await fetch(`http://localhost:8080/employee/${id}`)
    .then((d)=> d.json());
    console.log("DATA",data);
    setDetails(data);
  }
  return (
    <div className="user_details">
      <img className="user_image"  src={details.image} />
      <h4 className="user_name">{details.username}</h4>
      <span className="user_salary">${details.salary}</span>
      <span className="tasks">
        <li className="task">{details.task}</li>
      </span>
      Status: <b className="status">{details.status}</b>
      Title: <b className="title">{details.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
