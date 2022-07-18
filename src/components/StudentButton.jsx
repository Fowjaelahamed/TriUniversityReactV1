import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
function StudentButton(props) {
  return (
    
     <div className="col-3 text-center">
    <Link to={(props.name === "Student Portal")? "student-login" : "#"} >
        <button
          type="button"
          className="btn w-100 p-2 btnclr text-white"
        >
          {props.name}
        </button></Link>
      </div> 
  );
}
export default StudentButton;
