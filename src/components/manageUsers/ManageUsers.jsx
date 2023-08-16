import React, { useState } from "react";
import "./ManageUsers.scss";
import { CiUser } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import ErrPopup from "../popups/ErrPopup";
const InputForm = ({
  label,
  name,
  required,
  type,
  value,
  style,
  input,
  option,
  radio,
  placeholder,
  error,
  errstyle,
  optionStyle,
  bg,
}) => {
  return (
    <div className="row inputForm">
      <div className="lcol  col-4">
        <label>
          {label}
          <span className=" text-danger">{required && "*"}</span>
        </label>
      </div>
      <div className={`rcol col-8 ${optionStyle}`}>
        {input && (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            className={style}
            style={bg}
          />
        )}
        {radio && (
          <>
            <div className="radiobtn my-2">
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                className={style}
              />
              <span className="border">Yes</span>
            </div>
            <div className="radiobtn ">
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                className={style}
              />
              <span className="border">No</span>
            </div>
          </>
        )}
        {option && (
          <select name={name} id="" className="w-100" style={{ bg }}>
            <option value={value}>{value}</option>
          </select>
        )}
        {error && <small className={`d-block py-2 ${errstyle}`}>{error}</small>}
      </div>
    </div>
  );
};
function ManageUsers() {
  const [error,setError] = useState(false);
  return (
    <><div className="ManageUsers w-100 shadow-sm ">
      <div className="container-fluid px-0 border my-3 shadow-sm ">
        <div className="ManageUsers__table px-3">
          <table>
            <thead>
              <tr className="border-0">
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Administrator</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <CiUser className={"icon"} />
                  {} Jeevan Shrestha(owner)
                </td>
                <td>jers@gmail.com</td>
                <td>Enabled</td>
                <td>
                  <TiTick />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="ManageUsers__control pb-3 pt-5 d-flex gap-2 px-3">
          <button className="text-primary rounded px-3 py-1 border border-primary">
            Invite User
          </button>
          <button className="text-danger rounded px-3 py-1 border border-danger">
            Invite User
          </button>
        </div>
        <div className="ManageUsers__form mt-3 mb-5  px-3">
          <form action="" className="border rounded ">
            <div className="row mb-lg-5 px-3">
              <div className="ManageUsers__form__left col-lg-6">
                <InputForm
                  input
                  label={"Name"}
                  type={"text"}
                  value={"Jeevan Shrestha"}
                  required
                />
                <InputForm
                  input
                  label={"Email"}
                  type={"email"}
                  value={"Jeevan@g.com"}
                  required
                  style={"px-2"}
                  bg={{ backgroundColor: "rgba(0,0,255,0.1)" }}
                />
                <InputForm
                  input
                  label={"Password"}
                  type={"password"}
                  value={"JeevanShrestha"}
                  required
                  style={"px-2"}
                  error={"minimum 10 characters"}
                  bg={{ backgroundColor: "rgba(0,0,255,0.1)" }}
                />
              </div>
              <div className="ManageUsers__form__right col-lg-6 ">
                <InputForm
                  radio
                  type={"radio"}
                  name={"active"}
                  label={"Active"}
                />
                <InputForm
                  radio
                  type={"radio"}
                  name={"administarte"}
                  label={"Administrator"}
                />
                <InputForm
                  option
                  label={"Access level"}
                  value={"Full Access"}
                  error={"Show Details"}
                  errstyle={"text-primary w-100"}
                  optionStyle={'d-block'}
                />
              </div>
            </div>
            <div className="submit  py-2 border-top px-0">
              <button type="button" className=" bg-primary rounded-1 text-white " onClick={() => setError(true)}>
                Save
              </button>
              <button type="button" className=" text-primary rounded-1 border bg-white">
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div className="ManageUsers__footer px-3 text-end py-2 border-top">
          <button className=" bg-primary text-white px-2 py-1 rounded-1">
            Done
          </button>
        </div>
      </div>
    </div>
    {/* error  */}
    {error && <ErrPopup setError={setError}/>}
    </>
  );
}

export default ManageUsers;
