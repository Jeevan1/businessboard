import React, { useState } from "react";
import "./UserProfile.scss";
import { InputForm } from "../addCustomer/InputForm";
import { Link, NavLink } from "react-router-dom";
import Switch from "../switch/Switch";
import OnOff from "../onOff/OnOff";
function UserProfile({ label }) {
  const [content, setContent] = useState({
    pp: true,
    email: false,
    pass: false,
  });

  const Input = ({ label, type, placeholder, value, style }) => {
    return (
      <div
        className="InputForm border px-2 my-3 d-flex flex-column justify-content-center"
        style={{ height: "50px" }}
      >
        <label htmlFor={label} className={style}>
          {label}
        </label>
        <div className="h-70">
          <input
            type={type}
            name={type}
            className={`w-100 h-70 border-0`}
            placeholder={placeholder}
            value={value}
            style={{ outline: "none", border: "none" }}
          />
        </div>
        <div className="error">
          <p></p>
        </div>
      </div>
    );
  };

  return (
    <div className="UserProfile">
      <div className="container-fluid shadow-lg p-0 my-3 rounded overflow-hidden">
        <div className="UserProfile__header">
          <Link
            className={`link ${content.pp && "active"}`}
            onClick={() => setContent({ pp: true })}
          >
            Profile
          </Link>
          <Link
            className={`link ${content.email && "active"}`}
            onClick={() => setContent({ email: true })}
          >
            Notifications
          </Link>
          <Link
            className={`link ${content.pass && "active"}`}
            onClick={() => setContent({ pass: true })}
          >
            Preferences
          </Link>
        </div>
        <div className="UserProfile__content p-4">
          {content.pp && (
            <div className="UserProfile__content__1">
              <div className="">
                <p>Profile Image</p>
                <div className="profileImg">
                  <h1>JS</h1>
                  <p>
                    <p>You can upload a new profile picture here</p>
                    <p className=" ">
                      You can also drag and drop a picture from your computer.
                      <br />
                      Recommended file types: .GIF, .PNG, or .JPG less than 1
                      MB.
                    </p>
                  </p>
                </div>
              </div>
              <div>
                <p>Change Email</p>
                <form action="" className="changeEmail">
                  <Input
                    label={"Email"}
                    placeholder={"Jersj1986@gmail.com"}
                    type="email"
                  />
                  <button className="border py-1 px-3">Save Email</button>
                </form>
              </div>
              <div className="changePass">
                <p>Change Password</p>
                <form action="" className="changeEmail">
                  <Input
                    label={"Current Password"}
                    value={"jsgdhsgdhdhg"}
                    type="password"
                  />
                  <Input
                    placeholder={"New Password"}
                    type={"password"}
                    style={"d-none"}
                  />
                  <Input
                    placeholder={"Confirm New Password"}
                    type={"password"}
                    style={"d-none"}
                  />
                  <button className="border py-1 px-3">Save Password</button>
                </form>
              </div>
            </div>
          )}
          {content.email && (
            <div className="UserProfile__content__2">
              <div className="Notification">
                <div className="Notification__1">
                    <p>Tips and Announcements</p>
                  <div>
                    <div>
                      <OnOff
                        name={"Tips"}
                        value1={"on"}
                        value2={"off"}
                        checked2={"checked"}
                      />
                    </div>
                    <small>
                      Getting started, tips and features presentation.
                    </small>
                  </div>
                </div>
                <hr />
                <div className="Notification__2">
                  <div>
                    <p>Notifications</p>
                    <div>
                    <div>
                      <OnOff
                        name={"Notifications"}
                        value1={"on"}
                        value2={"off"}
                        checked1={"checked"}
                      />
                    </div>
                    <small>
                      Enable and disable all email notifications for this user
                      account. <strong>jersj1986@gmail.com</strong>
                    </small>
                    <p>
                      OneUp automatically sends you notifications when due dates
                      or expiration dates are approaching. Here you can turn
                      notifications on and off and set when you will be
                      reminded.
                    </p>
                    </div>
                  </div>
                  <div>
                    <div>
                    <p>Opportunity</p>
                      <div>
                      <OnOff
                        name={"Opportunity"}
                        value1={"on"}
                        value2={"off"}
                        checked1={"checked"}
                      />
                      <span>
                        send
                        <input type="text" name="days" value={12} />
                        <select name="week" id="">
                          <option value="weeks">Weeks</option>
                          <option value="days">Days</option>
                        </select>
                        <select name="time" id="">
                          <option value="after">after</option>
                          <option value="before">before</option>
                        </select>
                        the expiration date.
                      </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {content.pass && (
            <div className="UserProfile__content__3">
              <div className="preferences">
                <p>Local Settings</p>
                <div className="">
                  <div className="inputForm">
                    <label htmlFor="date">Date Format</label>
                    <select name="" id="">
                      <option value="1">25/12/2014</option>
                      <option value="1">2014/12/25</option>
                      <option value="1">25/2014/12</option>
                    </select>
                  </div>
                  <div className="inputForm">
                    <label htmlFor="language">Language</label>
                    <select name="" id="">
                      <option value="1">Enflish (UK)</option>
                      <option value="1">Nepal</option>
                      <option value="1">Newari</option>
                    </select>
                  </div>
                  <div className="inputForm">
                    <label htmlFor="week">Starts week on</label>
                    <select name="" id="">
                      <option value="1">Saturday</option>
                      <option value="1">Sunday</option>
                      <option value="1">Monday</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <p>Export Settings</p>
                <div className="">
                  <div className="inputForm">
                    <label htmlFor="export">Export as</label>
                    <select name="" id="">
                      <option value="1">Microsoft Excel</option>
                      <option value="1">Csv</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <p>User Interface</p>
                <div className="userInterface">
                  <div>
                    <p>Shorter Amounts</p>
                    <OnOff
                      name={"Shorter_Amounts"}
                      value1={"on"}
                      value2={"off"}
                      checked2={"checked"}
                    />
                    <p>
                      Amount in filters and dashboards will be rounded. i.e.
                      NPR137,320 will be replaced by NPR137K
                    </p>
                  </div>
                  <div>
                    <p>Contact Info Previewer</p>
                    <OnOff
                      name={"Contact_Info"}
                      value1={"on"}
                      value2={"off"}
                      checked1={"checked"}
                    />
                    <p>
                      Preview your contacts’ information when hovering over
                      their name
                    </p>
                  </div>
                  <div>
                    <p>Accountant Mode</p>
                    <OnOff
                      name={"Accountant_Mode"}
                      value1={"on"}
                      value2={"off"}
                      checked2={"checked"}
                    />
                    <p>
                      Display accounting account information within categories
                      and other features
                    </p>
                  </div>
                  <div>
                    <button className="px-3 bg-primary text-white py-2 rounded bg-opacity-50">
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
