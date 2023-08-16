import React from "react";
import "./OnOff.scss";

function OnOff({name, value1, value2, checked1, checked2, }) {
  return (
    <div>
      <label className="radio">
        <input type="radio" name={name} value={value1}  checked={checked1}/>
        <span>{value1}</span>
      </label>
      <label className="radio">
        <input type="radio" name={name} value={value2} checked ={checked2}/>
        <span>{value2}</span>
      </label>
    </div>
  );
}

export default OnOff;
