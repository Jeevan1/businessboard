import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { LiaRandomSolid } from "react-icons/lia";

import "./DublicateLeads.scss";
import NewItemHeader from "../newItemHeader/NewItemHeader";

function DublicateLeads() {
  const [dublicate, setDublicate] = useState(false);
  return (
    <div className="DublicateLeads">
      <NewItemHeader name={'Dublicate Lead'}/>
      <div className="DublicateLeads__form rounded shadow-sm p-3">
        <div className="DublicateLeads__form__1 ">
          <p>
            <span className="i px-2">i</span>Once you've selected the Account to
            duplicate and saved this window, you can access your new Duplicated
            Account in View my Acccounts.
          </p>
          <div className="row align-items-center py-2">
            <div className=" col-lg-4 lcol text-end ">
              <p>
                How do you want the Code to be generated?
                <span className=" text-danger">*</span>
              </p>
            </div>
            <div className="rcol col-lg-8">
              <select name="code" id="" className="w-100 border-bottom pe-4">
                <option value="automatic"> Automatically</option>
                <option value="manually"> Manually</option>
              </select>
            </div>
          </div>
          <button className=" border px-3 py-2 rounded-1 d-flex align-items-center">
            <BiSearch className="icon" />
            Select Account
          </button>
        </div>
        <hr />
        <div className="DublicateLeads__form__2  pb-2">
          <table className="mb-3">
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <td className="p-2">No items to show</td>
            </tbody>
          </table>
          <button
            className=" border px-3 py-2 rounded-1 d-flex align-items-center"
            onClick={() => setDublicate(true)}
          >
            <LiaRandomSolid className="icon" />
            Dublicate Account
          </button>
        </div>
        {dublicate && (
          <>
            <hr />
            <div className="DublicateLeads__form__2  pb-2">
              <table className="mb-3">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  <td className="p-2">No items to show</td>
                </tbody>
              </table>
            </div>
          </>
        )}
        <div className="DublicateLeads__form__submit px-4 shadow-lg py-2">
          <div>
            <button className="">Cancel</button>
            <button className="">Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DublicateLeads;
