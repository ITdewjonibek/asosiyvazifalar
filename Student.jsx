import React from "react";

const Student = (props) => {
  return (
       <div className="user">
        <img src={props.imgSrc} alt="User Avatar" width="150" />
        <p>
        {props.name} <br />
        
        <h5>{props.onle}</h5>

        </p>
        <i class='bx bx-check'></i>
       </div>
       
  );
};

export default Student;
