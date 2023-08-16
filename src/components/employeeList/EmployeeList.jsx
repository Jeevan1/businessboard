import React from "react";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import {AiOutlineCloudDownload} from "react-icons/ai";
import "./EmployeeList.scss";
import { Link } from "react-router-dom";

const employee = [
  {
    id: 1,
    code: '001',
    lname: 'Shrestha',
    fname: 'Jeevan',
    jobTitle: 'none',
  },
];
function EmployeeList() {
  return (
    <div className="EmployeeList bg-white mt-3 shadow-sm rounded p-3">
      <div className=" border">
      <div className="EmployeeList__top d-flex px-3 justify-content-between py-3 align-items-center">
        <h4>Employees</h4>
        <button className=" rounded-1">
          <Link to={'/employee/new'} className="link text-white">New Employee</Link>
        </button>
      </div>
      <div className="EmployeeList__search w-50 p-2">
        <input type="text" placeholder="Search this list" />
      </div>
      <div className="EmployeeList__list px-3">
        <table>
          <thead>
            <tr >
              <th className=" fw-bold">Employee Code</th>
              <th className=" fw-bold">Last Name</th>
              <th className=" fw-bold">First Name</th>
              <th className=" fw-bold">Job Title</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((item, idx) => (
              <tr key={item.id}>
                <td>{item.code}</td>
                <td>{item.lname}</td>
                <td>{item.fname}</td>
                <td>{item.jobTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="EmployeeList__page py-5 px-3 d-flex justify-content-center align-items-center gap-2">
        <TbArrowBigLeft className="icon" />
        <TbArrowBigLeft className="icon" />
        <span>1-8 of 8</span>
        <TbArrowBigRight className="icon" />
        <TbArrowBigRight className="icon" />
      </div>
      <div className="EmployeeList__footer py-3 px-3">
        <span className=" border px-3 py-2 rounded">
            <AiOutlineCloudDownload className="icon fs-5" />   
        </span>
      </div>
      </div>
    </div>
  );
}

export default EmployeeList;
