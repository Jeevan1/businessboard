import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";
import { GrAttachment } from "react-icons/gr";

import "./NewOpportunity.scss";
import { InputForm, InputOption } from "../addCustomer/InputForm";
import ProductsAndServices from "../productsAndServices/ProductsAndServices";
import NewItemHeader from "../newItemHeader/NewItemHeader";

function NewOpportunity() {
  const [advanced, setAdvanced] = useState(false);
  const [view, setView] = useState(false);
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
    <>
      <div className="NewOpportunity">
      <NewItemHeader name={'New Opportunities'}/>
        <div className="NewOpportunity__form rounded">
          <form action="" className="py-2 px-4">
            <div className="NewOpportunity__form__1">
              <div className="input__form">
                <label htmlFor="customer">
                  Lead or Customer<span className="text-danger">*</span>
                </label>

                <select name="customer" className=" text-secondary" id="">
                  <option value="0">Customer name or code</option>
                  <option value="1">View all leads and Customers</option>
                  <option value="2">Create a Customer</option>
                </select>
              </div>
              <div className="input__form">
                <label htmlFor="customer">
                  Stage<span className="text-danger">*</span>
                </label>
                <select name="stage" className=" text-secondary" id="">
                  <option value="0">1st Appointment</option>
                  <option value="1">1st contact</option>
                  <option value="2">Payenment</option>
                  <option value="3">Quote</option>
                </select>
              </div>
            </div>
            <div className="NewOpportunity__form__1">
              <div className="input__form">
                <label htmlFor="customer">
                  Contact<span className="text-danger">*</span>
                </label>

                <select name="customer" className=" text-secondary" id="">
                  <option value="0">Contact</option>
                </select>
              </div>
              <div className="input__form">
                <label htmlFor="customer">
                  Status<span className="text-danger">*</span>
                </label>
                <select name="status" className=" text-secondary" id="">
                  <option value="0">Lost</option>
                  <option value="1">Open</option>
                  <option value="2">Pending</option>
                  <option value="3">Won</option>
                </select>
              </div>
            </div>
            <div className="NewOpportunity__form__1">
              <div className="input__form">
                <label htmlFor="customer">
                  Opportunity Name<span className="text-danger">*</span>
                </label>
                <input type="text" name="opp)nam" />
              </div>
              <div className="input__form">
                <label htmlFor="date">Expected Closing Date</label>
                <input type="date" />
              </div>
            </div>
            <div className="NewOpportunity__form__1">
              <div className="input__form">
                <label htmlFor="Recipient">
                  Note<span className="text-danger">*</span>
                </label>
                <textarea
                  name=""
                  id=""
                  cols=""
                  rows="5"
                  className="w-100 border-0 border-bottom"
                ></textarea>
              </div>
              <div className="input__form">
                <label htmlFor="date">Payment Terms</label>
                <input
                  type="text"
                  placeholder="0.00"
                  className="text-end"
                  style={{ height: "30px" }}
                />
              </div>
            </div>

            {/* advanced  */}
            <div className="NewOpportunity__form__advanced">
              <button
                type="button"
                className="d-flex gap-1 mb-4"
                onClick={() => setAdvanced(!advanced)}
              >
                {!advanced && <MdArrowDropDown className="icon" />}
                {advanced && <MdArrowDropUp className="icon" />}
                <span>Advanced</span>
              </button>

              {advanced && (
                <>
                  <div className="NewOpportunity__form__1">
                    <table>
                      <thead className="">
                        <tr className="border-0">
                          <th>Item</th>
                          <th>Qty</th>
                          <th>Unit</th>
                          <th>Price</th>
                        </tr>
                      </thead>

                      <tbody></tbody>
                      <p className=" text-secondary p-2">No Items to show</p>
                    </table>
                  </div>
                  <div className="NewInvoice__form__1 py">
                    <div className="input__form gap-0 pb- ">
                      <span
                        className={`border border-dark bg-light py-2 `}
                        onClick={() => setView(true)}
                      >
                        Add Item
                      </span>
                    </div>
                    <div className={`input__form pb-4 `}></div>
                  </div>
                </>
              )}
            </div>
            <div className=" gap-3">
              <div className="NewOpportunity__form__1 w-100 h-25">
                <div className="input__form ">
                  <label htmlFor="Address">
                    Probability<span className="text-danger">*</span>
                  </label>
                  <select name="status" className=" text-secondary" id="">
                    <option value="0">Undefined</option>
                    <option value="1">Open</option>
                    <option value="2">Pending</option>
                    <option value="3">Won</option>
                  </select>
                </div>
              </div>
              <div className="NewOpportunity__form__1 w-100 h-25">
                <div className="input__form ">
                  <label htmlFor="Address">
                    Project<span className="text-danger">*</span>
                  </label>
                  <select name="status" className=" text-secondary" id="">
                    <option value="0">None</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="NewOpportunity__form__submit px-4 shadow-lg py-2">
              <div>
                <button className="">Cancel</button>
                <button className="">Done</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {view && <ProductsAndServices view={setView} />}
    </>
  );
}

export default NewOpportunity;
