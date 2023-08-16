import React from "react";

function FormInput({ label, type, placeholder }) {
  const formControl = {
    display: "flex",
    flexDirection: "column",
    border: 0,
    padding: 0,
    // gap: "15px",
  };
  const Label = {
    fontSize: '13px',
    textTransform: 'capitalize',
  }
  const input ={
    fontSize: '13px',
    border: '1px solid gray',
    borderRadius: '3px',
    padding: '10px',
}

  return (
    <div className="form-control py-2" style={formControl}>
      <label htmlFor={label} style={Label} className="pb-1 fw-bold">{label}</label>
      <input type={type} style={input} className="" placeholder={placeholder} name={label}/>
    </div>
  );
}

export default FormInput;
