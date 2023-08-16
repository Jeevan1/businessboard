import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";
import { GrAttachment } from "react-icons/gr";

import "./NewSalesOrder.scss";
import NewItemHeader from "../newItemHeader/NewItemHeader";

function NewSalesOrder() {
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
    <div className="NewSalesOrder">
      <NewItemHeader name={'New Sales Order'}/>
      <div className="NewSalesOrder__form rounded">
        <form action="" className="py-2 px-4">
          <div className="NewSalesOrder__form__1">
            <div className="input__form">
              <label htmlFor="customer">
                Customer<span className="text-danger">*</span>
              </label>
              <select name="customer" className=" text-secondary" id="">
                <option value="0">Customer name or code</option>
                <option value="1">View all leads and Customers</option>
                <option value="2">Create a Customer</option>
              </select>
            </div>
            <div className="input__form">
              <label htmlFor="date">Date</label>
              <input type="date" />
            </div>
          </div>
          <div className="NewSalesOrder__form__1">
            <div className="input__form">
              <label htmlFor="Recipient">
                Recipient<span className="text-danger">*</span>
              </label>
              <select name="Recipient" id="">
                <option value="1">Recipient</option>
              </select>
            </div>
            <div className="input__form">
              <label htmlFor="date">Payment Terms</label>
              <select name="Payment_Terms" id="">
                {advancedOption[0].payenmentTerms.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="NewSalesOrder__form__1">
            <div className="input__form text__area">
              <label htmlFor="Address">
                Address<span className="text-danger">*</span>
              </label>
              <textarea
                name="address"
                id=""
                cols="40"
                rows="3"
                className=" bg-light border-0"
                disabled
              ></textarea>
            </div>
          </div>
          <div className="NewSalesOrder__form__1">
            <div className="input__form gap-0 py-4">
              <span
                className={`border border-dark bg-light ${
                  !deposit && "active"
                }`}
                onClick={() => setDeposit(false)}
              >
                Unpaid
              </span>
              <span
                className={`border border-dark bg-light ${deposit && "active"}`}
                onClick={() => setDeposit(true)}
              >
                Settled
              </span>
            </div>
            <div className={`input__form py-4 ${deposit && "border-bottom"}`}>
              {deposit && (
                <>
                  <label htmlFor="deposit-to">Deposit To</label>
                  <select name="deposit" id="">
                    <option value="Deposit_later">Deposit later</option>
                  </select>
                </>
              )}
            </div>
          </div>
          <div className="NewSalesOrder__form__1">
            <table>
              <thead className="">
                <tr>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Disc.%</th>
                  <th>Total</th>
                  <th>VAT%</th>
                </tr>
              </thead>

              <tbody></tbody>
              <p className=" text-secondary">No Items to show</p>
            </table>
          </div>
          <div className=" d-flex gap-3">
            <div className="NewSalesOrder__form__1 w-100 h-25">
              <div className="input__form ">
                <label htmlFor="Address">
                  Address<span className="text-danger">*</span>
                </label>
                <textarea
                  name="address"
                  id=""
                  cols="40"
                  rows="2"
                  className=" border-0 border-bottom textarea"
                ></textarea>
              </div>
            </div>
            <div className="NewSalesOrder__form__1 w-100 d-flex flex-column align-items-end">
              <div className="input__form disabled">
                <label htmlFor="subtotal">Subtotal</label>
                <input type="" className="bg-light " di value={"0.00"} />
              </div>
              <div className="input__form disabled">
                <label htmlFor="Discount">Discount Rate</label>
                <input type="" className="bg-light " di value={"0.00"} />
              </div>
              <div className="input__form disabled">
                <label htmlFor="subtotal">Discount Amount</label>
                <input type="" className="bg-light " di value={"0.00"} />
              </div>
              <div className="input__form disabled">
                <label htmlFor="subtotal">VAT</label>
                <input type="" className="bg-light " di value={"0.00"} />
              </div>
              <div className="input__form disabled">
                <label htmlFor="subtotal">Total</label>
                <input type="" className="bg-light " di value={"0.00"} />
              </div>
            </div>
          </div>

          {/* advanced  */}
          <div className="NewSalesOrder__form__advanced">
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
                {" "}
                <div className="NewSalesOrder__form__1 d-flex flex-column py-2 gap-0 border-bottom">
                  <div className="input__form">
                    <label htmlFor="date">Delivery Date</label>
                    <input type="date" />
                  </div>
                  <div className="input__form">
                    <label htmlFor="conytact">Delivery Contact</label>
                    <select name="delivery_contact" id="" className="text-secondary">
                        <option value="" selected className="">Contact Name</option>
                        <option value="2">View All Contacts</option>
                    </select>
                  </div>
                  <div className="input__form">
                    <label htmlFor="date">Date</label>
                    <textarea name="" id="" cols="90" rows="3" className="border-0 textarea bg-light p-2"></textarea>
                  </div>
                </div>
                <div className="NewSalesOrder__form__1 border-bottom">
                    <div className="input__form">
                        <label htmlFor="po">PO Number</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="NewSalesOrder__form__1 border-bottom">
                <div className="input__form">
                    <label htmlFor="conytact">Project</label>
                    <select name="Project" id="" className="text-secondary">
                        <option value="" selected className="">Project Name</option>
                        <option value="2">View All Projects</option>
                        <option value="2">Create Projects</option>
                    </select>
                  </div>
                </div>
                <div className="NewSalesOrder__form__1 border-bottom">
                    <div className="input__form">
                        <label htmlFor="po">PO Number</label>
                        <textarea className="textarea border-0 border-bottom" name="" id="" cols="90" rows="3"></textarea>
                    </div>
                </div>
              </>
            )}
          </div>

          <div className="NewSalesOrder__form__1 choose__file d-flex flex-column gap-2 align-items-center">
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

          <div className="NewSalesOrder__form__submit px-4 shadow-lg py-2">
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

export default NewSalesOrder;
