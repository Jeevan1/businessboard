import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import {
  RiQuestionnaireLine,
  RiSettings5Line,
  RiArrowDownSLine,
} from "react-icons/ri";
import Logo from "../Logo";
import "./Navbar.scss";
import SearchBar from "../SearchBar";
import Feedback from "../feedback/Feedback";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar({menuname,setMenuName}) {
  const [show, setShow] = useState({
    feedback: false,
    profile: false,
    setting: false,
  });
  const loc = useLocation();
  return (
    <div className="Navbar border-bottom d-flex">
      <div className="container-fluid d-flex justify-content-between ps-4 pe-0">
        <div className="Navbar__1 d-flex align-items-center gap-4">
          <GrMenu className="icon fs-4" onClick={() => setMenuName(!menuname)}/>
          <Logo height={"25px"} />
          {loc.pathname!='/home' && <SearchBar width={"400px"} style={"bg-light shadow-sm border rounded-1"} placeholder={'What do you want to do?'}/>}
        </div>
        <div className="Navbar__2 d-flex align-items-center  fs-4">
          <RiQuestionnaireLine
            className="icon"
            onClick={() => setShow({ feedback: !show.feedback })}
          />
          <div className="setting ">
            <RiSettings5Line
              className="icon"
              onClick={() => setShow({ setting: !show.setting })}
            />
            {show.setting && (
              <div className="setting__item border shadow-sm py-1">
                <Link to={'/company_setting'} className="link">Company Settings</Link>
                <Link to={'/manage_users'} className="link">Manage Users</Link>
                <Link to={'/manage_subscription'} className="link">Manage Subscription</Link>
                <Link to={'/employee_list'} className="link">Employees</Link>
                <Link to={'/attachment'} className="link">Uploaded Files</Link>
              </div>
            )}
          </div>

          <div className=" position-relative">
            <div
              className={"profile d-flex align-items-center px-1 gap-0"}
              onClick={() => setShow({ profile: !show.profile })}
            >
              <p>JS</p>
              <RiArrowDownSLine className="icon" />
            </div>
            {show.profile && (
              <div className="sub_links border border-2 ">
                <div className="px-4 py-2 border-bottom">
                  <h6>Jeevan Shrestha</h6>
                  <p>SUGA</p>
                </div>
                <Link
                  className="link px-4 py-2 my-1 "
                  to={"./user_settings"}
                  onClick={() => setProfile(false)}
                >
                  User Setting
                </Link>
                <hr />
                <Link
                  className="link px-4 py-2 my-1"
                  to={"./login"}
                  onClick={() => setProfile(false)}
                >
                  Log Out
                </Link>
              </div>
            )}
          </div>
          <div className="Navbar__3">
            {show.feedback && <Feedback hide={setShow} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
