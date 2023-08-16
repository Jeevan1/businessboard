import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";
import { GrAttachment } from "react-icons/gr";

import "./NewTasks.scss";
import { InputForm, InputOption } from "../addCustomer/InputForm";
import NewItemHeader from "../newItemHeader/NewItemHeader";

function NewTasks() {
  const [advanced, setAdvanced] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const [advancedOption, setAdvancedOption] = useState([
    {
      payenmentTerms: [
        "Due on receipt",
        "At 30 days",
        "At 60 days",
        "At 90 days",
        "In two installments",
        "In three installments",
      ],
    },
  ]);

  return (
    <div className="NewTasks">
      <NewItemHeader name={'New Tasks'}/>
      <div className="NewTasks__form rounded">
        <form action="" className="py-2 px-4">
          <div className="NewTasks__form__1">
            <div className="input__form">
              <label htmlFor="customer">Subject</label>
              <select name="customer" className=" text-secondary" id="">
                <option value="0">Customer name or code</option>
                <option value="1">View all leads and Customers</option>
                <option value="2">Create a Customer</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="NewTasks__form__1">
            <div className="input__form">
              <label htmlFor="Recipient">Memo</label>
              <textarea
                name=""
                id=""
                cols=""
                rows="7"
                className="w-75 border-0 border-bottom"
              ></textarea>
            </div>
          </div>
          <hr />
          <div className="NewTasks__form__1">
            <div className="input__form gap-0 py-4">
              <span
                className={`border border-dark bg-light ${
                  !deposit && "active"
                }`}
                onClick={() => setDeposit(false)}
              >
                To-do
              </span>
              <span
                className={`border border-dark bg-light ${deposit && "active"}`}
                onClick={() => setDeposit(true)}
              >
                Done
              </span>
            </div>
            <div className={`input__form py-4 border-bottom depo`}>
              {!deposit && (
                <>
                  <label htmlFor="deposit-to">Due Date</label>
                  <input type="date" name="date" />
                </>
              )}
              {deposit && (
                <div className="w-100 d-flex flex-column gap-3">
                  <div>
                    <label htmlFor="deposit-to" className="px-2">Duration(h)</label>
                    <input type="text" name="duration" className="text-end" />
                  </div>
                  <div>
                    <label htmlFor="deposit-to" className="px-2">Done On</label>
                    <input type="date" name="date" className="text-end" />
                  </div>
                </div>
              )}
            </div>
          </div>
            
            <div className="NewTasks__form__1 w-100 d-flex flex-column align-items-end">
              <div className="input__form ">
                <label htmlFor="subtotal">Lead or Costumer</label>
                <input type="text" className=" " placeholder="Costumer name or code" />
              </div>
              <div className="input__form ">
                <label htmlFor="Discount">Contact</label>
                <input type="text" className=" " />
              </div>
              <div className="input__form ">
                <label htmlFor="subtotal">Opportunity</label>
                <input type="text" className=" "placeholder="opportunity name"/>
              </div>
              
            </div>
            <hr />

          <div className="NewTasks__form__1 choose__file d-flex flex-column gap-2 align-items-center">
            <strong className="w-100">Attachments</strong>
            <div className="input rounded w-100">
              <GrAttachment className="icon fs-4" />
              <p>
                Drag files to attach , or{" "}
                <span className=" text-primary">
                  Browse file from your device
                </span>
              </p>
              <input type="file" />
            </div>
            <p className="text-center">or</p>
            <button className="border py-2 px-3">Browse uploaded files</button>
          </div>

          <div className="NewTasks__form__submit px-4 shadow-lg py-2">
            <div>
              <button className="">Cancel</button>
              <button className="">Done</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTasks;
