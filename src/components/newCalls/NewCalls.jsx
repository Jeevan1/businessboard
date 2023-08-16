import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";

import "./NewCalls.scss";
import NewItemHeader from "../newItemHeader/NewItemHeader";

function NewCalls() {
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
    <div className="NewCalls">
      <NewItemHeader name={'New Calls'}/>
      <div className="NewCalls__form rounded">
        <form action="" className="py-2 px-4">
          <div className="NewCalls__form__1">
            <div className="input__form">
              <label htmlFor="customer">
                Subject<span className="text-danger">*</span>
              </label>
              <input type="text" name="subject" />
            </div>
          </div>
          <hr />
          <div className="NewCalls__form__1">
            <div className="input__form">
              <label htmlFor="customer">
                Customer<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="customer"
                placeholder="Customer Name oe Code"
              />
            </div>
          </div>
          <div className="NewCalls__form__1">
            <div className="input__form py-0">
              <label htmlFor="customer">Contact</label>
              <input type="text" name="contact" />
            </div>
          </div>
          <hr />
          <div className="NewCalls__form__1">
            <div className="input__form">
              <label htmlFor="customer">Customer</label>
              <textarea
                name=""
                id=""
                cols=""
                rows="4"
                className="w-75 border-0 border-bottom"
              ></textarea>
            </div>
          </div>
          <div className="NewCalls__form__1">
            <div className="input__form py-0">
              <label htmlFor="customer">
                Call Qualification<span className="text-danger">*</span>
              </label>
              <select name="qualification" id="">
                <option value="1">None</option>
                <option value="2">NoQuote ASAPne</option>
                <option value="3">To Call Back</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="NewCalls__form__1">
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
                    <label htmlFor="deposit-to" className="px-2">
                      Duration(h)
                    </label>
                    <input type="text" name="duration" className="text-end" />
                  </div>
                  <div>
                    <label htmlFor="deposit-to" className="px-2">
                      Done On
                    </label>
                    <input type="date" name="date" className="text-end" />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* advanced  */}
          <div className="NewInvoice__form__advanced">
            <button
              type="button"
              className="d-flex gap-1 mb-4"
              onClick={() => setAdvanced(!advanced)}
            >
              {!advanced && <MdArrowDropDown className="icon" />}
              {advanced && <MdArrowDropUp className="icon" />}
              <span>More</span>
            </button>

            {advanced && (
              <>
                <div className="NewInvoice__form__1 d-flex flex-column py-2 gap-0 border-bottom">
                  <div className="input__form">
                    <label htmlFor="date">Opportunity</label>
                    <input type="text" name="Opportunity Name" placeholder="Opportunity Name"/>
                  </div>
                  <div className="input__form">
                    <label htmlFor="date">Project</label>
                    <input type="text" name="Project Name" placeholder="Project Name"/>
                  </div>
                  </div>
              </>
            )}
          </div>

          <div className="NewCalls__form__submit px-4 shadow-lg py-2">
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

export default NewCalls;
