import React from "react";


const Render = (props) => {
    return (
      <div className="rend">
        <p className="men">{props.children}</p>
      </div>
    );
  };
  
  export default Render;