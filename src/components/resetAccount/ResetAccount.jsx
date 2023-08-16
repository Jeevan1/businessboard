import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineCollectionsBookmark,
  MdArrowDropUp,
} from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

import "./ResetAccount.scss";
import NewItemHeader from "../newItemHeader/NewItemHeader";
import NewItemFooter from "../newItemFooter/NewItemFooter";
import { Link } from "react-router-dom";
import RequestArchive from "../popups/requestArchive";

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
}) => {
  return (
    <div className="row inputForm">
      <div className="lcol  col-4">
        <label>
          {label}
          <span className=" text-danger">{required && "*"}</span>
        </label>
      </div>
      <div className="rcol col-8 d-flex">
        {input && (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            className={style}
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
          <select name={name} id="">
            <option value={value}>{value}</option>
          </select>
        )}
      </div>
    </div>
  );
};

function ResetAccount() {
  const [popup, setPopup] = useState({
    requestArchive: false,
  });
  return (
    <div className="ResetAccount">
      <NewItemHeader name={"Company Setting"} />

      <div className="ResetAccount__content  rounded mt-3">
        <form action="" className="">
          <div className="ResetAccount__content__1 p-3">
            <h4 className="mb-2">Reset your account</h4>
            <p className="rounded">Remove<span className=" fw-bold">all data</span> from your account and start fresh.</p>
          </div>
          <div className="ResetAccount__content__form px-3">
            <div className="inputForm">
              <label className="lcol" htmlFor="reason">
                Reason<span className=" text-danger">*</span>
              </label>
              <div className="rcol">
                <div>
                  <input type="radio" name="reason" />
                  <span>
                    I want to remove test data so I can start with real data.
                  </span>
                </div>
                <div>
                  <input type="radio" name="reason" />
                  <span>I made a mistake while importing.</span>
                </div>
                <div>
                  <input type="radio" name="reason" />
                  <span>Other</span>
                </div>
              </div>
            </div>
            <div className="inputForm">
              <label className="lcol">Tell us more</label>
              <div className="rcol">
                <textarea className="border-bottom"
                  name=""
                  id=""
                  cols="90"
                  rows="4"
                  placeholder="Why are you reseting your account?"
                ></textarea>
              </div>
            </div>
            <div className="inputForm">
              <label className="lcol">Please enter your password<span className=" text-danger">*</span></label>
              <div className="rcol">
                <input type="password" value={'djsgdhsghd'} name="password"/>
              </div>
            </div>
            <div className="inputForm">
              <label className="lcol">Are you sure?<span className=" text-danger">*</span></label>
              <div className="rcol d-flex gap-2">
                <input type="checkbox" name="'sure"/>
                <span>Yes, <span className="fw-bold">erase all data</span> from my account.</span>
              </div>
            </div>
          </div>
          <div className="ResetAccount__content__2 mx-3 p-3 rounded">
            <h6 className="mb-2 fw-bold">Warning!</h6>
            <p>
              When you click Reset all users in your account will be logged out
              and all data in your account will be permanently erased. This
              action is non-reversible.
            </p>
            <p>
              We encourage you to backup your data if you want to keep a
              version.
            </p>
          </div>
          <div className="ResetAccount__content__3 px-3 py-2 d-flex gap-2 justify-content-end align-items-center mt-4">
            <button className=" rounded-1 cancel px-3 py-2 "  type="button">Cancel</button>
            <button className=" rounded-1 confirm px-3 py-2" type="button">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetAccount;
