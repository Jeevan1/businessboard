import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineCollectionsBookmark,
  MdArrowDropUp,
} from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

import "./DeleteAccount.scss";
import NewItemHeader from "../newItemHeader/NewItemHeader";
import NewItemFooter from "../newItemFooter/NewItemFooter";
import { Link } from "react-router-dom";
import RequestArchive from "../popups/requestArchive";

const Checkbox = ({name, desc}) => {
  return (
    <div>
      <input type="checkbox" name={name} />
      <span>{desc}</span>
    </div>
  );
};

function DeleteAccount() {
  const [popup, setPopup] = useState({
    requestArchive: false,
  });
  return (
    <div className="DeleteAccount">
      <NewItemHeader name={"Company Setting"} />

      <div className="DeleteAccount__content  rounded mt-3">
        <form action="" className="">
          <div className="DeleteAccount__content__1 p-3">
            <h4 className="mb-2">Reset your account</h4>
          </div>
          <div className="DeleteAccount__content__form px-3">
            <div className="inputForm">
              <label className="lcol" htmlFor="reason">
                Reason<span className=" text-danger">*</span>
              </label>
              <div className="rcol">
                <Checkbox name={'reason'} desc={'I want to open a new OneUp account'}/>
                <Checkbox name={'reason'} desc={' I have more than one OneUp account and want to close this one'}/>
                <Checkbox name={'reason'} desc={'The free trial isn’t long enough'}/>
                <Checkbox name={'reason'} desc={'I don’t find it useful for my business'}/>
                <Checkbox name={'reason'} desc={'Other'}/>
                </div>
            </div>
            <div className="inputForm">
              <label className="lcol">Tell us more</label>
              <div className="rcol">
                <textarea
                  className="border-bottom"
                  name=""
                  id=""
                  cols="90"
                  rows="3"
                  placeholder="How to improve OneUp?"
                ></textarea>
              </div>
            </div>
            <div className="inputForm">
              <label className="lcol">
                Please enter your password
                <span className=" text-danger">*</span>
              </label>
              <div className="rcol">
              <Checkbox name={'reason'} desc={'Alternative accountancy software package'}/>
                <Checkbox name={'reason'} desc={' Accountant'}/>
                <Checkbox name={'reason'} desc={'Excel'}/>
                <Checkbox name={'reason'} desc={'Other'}/>
              </div>
            </div>
            <div className="inputForm">
              <label className="lcol">
                Are you sure?<span className=" text-danger">*</span>
              </label>
              <div className="rcol d-flex gap-2">
                <input type="checkbox" name="'sure" />
                <span>
                  Yes, delete my account and <span className="fw-bold">erase all my data.</span>
                </span>
              </div>
            </div>
          </div>
          <div className="DeleteAccount__content__2 mx-3 p-3 rounded">
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
          <div className="DeleteAccount__content__3 px-3 py-2 d-flex gap-2 justify-content-end align-items-center mt-4">
            <button className=" rounded-1 cancel px-3 py-2 " type="button">
              Cancel
            </button>
            <button className=" rounded-1 confirm px-3 py-2" type="button">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeleteAccount;
