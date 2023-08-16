import React from "react";

export const InputForm = ({ label, style, err, type, mainStyle }) => {
  return (
    <div className="InputForm border px-2" style={{ height: "50px" }}>
      <label htmlFor={label} className={`${style ? '' : 'd-none'}`}>
        {label}
      </label>
      <div className="h-70">
        <input
          type={type}
          name={label}
          className={`w-100 h-70 border-0 ${style}`}
          placeholder={label}
          style={{ outline: "none" }}
        />
      </div>
      <div className="error">
        <p>{err}</p>
      </div>
    </div>
  );
};

export const InputOption = ({ label, style, err, option, mainStyle }) => {
  return (
    <div className="InputForm border px-2" style={{ height: "50px" }}>
      <label htmlFor={label} className={`d-none ${style}`}>
        {label}
      </label>
      <select name="" id="" style={{ outline: "none", border: "none" }}>
        {option &&
          option.map((item, index) => (
            <option key={index} value={item} className="my-2">
              {item}
            </option>
          ))}
      </select>
      <div className="error">
        <p>{err}</p>
      </div>
    </div>
  );
};

export const InputQuotesForm = ({ label, style, err, type, mainStyle }) => {
  return (
    <div
      className="InputForm px-2 d-flex w-100 gap-4"
      style={{ height: "50px" }}
    >
      <label htmlFor={`${label}`} className={`d ${style}`}>
        {label}
      </label>
      <div className="h-70  border-bottom ">
        <input
          type={type}
          name={label}
          className={`w-100 h-70 border-0 ${style}`}
          placeholder={label}
          style={{ outline: "none" }}
        />
      </div>
    </div>
  );
};
