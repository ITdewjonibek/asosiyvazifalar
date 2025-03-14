import React from "react";


const Render = (props) => {
    return (
      <div className="rend">
        <p className="you">{props.children}</p>
      </div>
    );
  };
  
  export default Render;