import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";

import "./AddSupplier.scss";
import { InputForm, InputOption } from "./InputForm";
import NewItemHeader from "../newItemHeader/NewItemHeader";

function AddSupplier() {
    const [advanced, setAdvanced] = useState(false);
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
      priceFamily: [
        "All Price Families",
        "None",
        "Price Fimily 1",
        "Price Fimily 2",
        "Price Fimily 3",
      ],
      salesTax: [
        "None",
        "20.0% Standard rate (Purchases)",
        "0.0% Exempt (Sales)",
        "0.5% Exempt (Sales)",
        "1.0% Exempt (Sales)",
        "5.0% Exempt (Sales)",
        "10.0% Exempt (Sales)",
      ],
    },
  ]);

  return (
    <div className="AddSupplier">
      <NewItemHeader name={'New Supplier'}/>
      <div className="AddSupplier__form rounded">
        <form action="" className="py-2 px-4">
          <div className="AddSupplier__form__1">
            <h5 className="AddSupplier__form__1__left">Overview</h5>
            <div className="AddSupplier__form__1__right">
              <div>
                <button type='button' className="active">Company</button>
                <button type='button'>Individual</button>
              </div>
              <div className="input__form">
                <InputForm label={"Company Name"} type={"text"} />
              </div>
              <div className="input__form">
                <InputForm label={"Email"} type={"email"} />
              </div>
              <div className="input__form">
                <InputForm label={"Phone Number"} type={"number"} />
                <InputForm label={"Website"} type={"text"} />
              </div>
              <div className="input__form">
                <InputForm label={"VAT Number"} type={"text"} />
              </div>
            </div>
          </div>
          <hr />
          <div className="AddSupplier__form__1">
            <h5 className="AddSupplier__form__1__left">Address</h5>
            <div className="AddSupplier__form__1__right">
              <div className="input__form">
                <InputForm label={"Billing Address"} type={"text"} />
              </div>
              <div className="input__form">
                <InputForm label={"Line 2"} type={"text"} />
              </div>
              <div className="input__form">
                <InputForm label={"City"} type={"text"} />
                <InputForm label={"Post Code"} type={"text"} />
              </div>
              <div className="input__form d-flex flex-column">
                <small className="">Use same address for delivery</small>
                <div>
                  <button type='button' className="active">Company</button>
                  <button type='button'>Individual</button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="AddSupplier__form__1">
            <h5 className="AddSupplier__form__1__left">Contacts</h5>
            <div className="AddSupplier__form__1__right">
              <div className="input__form">
                <small className=" text-secondary">No items to show</small>
              </div>
              <div className="input__form">
                <button type='button' className="py-2 text-primary rounded">
                  New Supplier Contact
                </button>
              </div>
            </div>
          </div>
          <hr />

          {/* advanced  */}
          <div className="AddSupplier__form__advanced">
            <button type='button' className="d-flex gap-1 mb-4" onClick={() => setAdvanced(!advanced)}>
             {!advanced && <MdArrowDropDown className="icon" />}
              {advanced &&<MdArrowDropUp className="icon"/>}
              <span>Advanced</span>
            </button>

            {advanced &&
            <> <div className="AddSupplier__form__1">
              <h5 className="AddSupplier__form__1__left">Overview</h5>
              <div className="AddSupplier__form__1__right">
                <div className="input__form">
                  <InputOption
                    label={"Payenment Terms"}
                    option={advancedOption[0].payenmentTerms}
                  />
                  <InputOption
                    label={"Payenment Terms"}
                    option={advancedOption[0].priceFamily}
                  />
                </div>
                <div className="input__form">
                  <InputOption
                    label={"Payenment Terms"}
                    option={advancedOption[0].salesTax}
                  />
                  <div className="w-100 d-flex justify-content-between">
                    <p>Priority VAT on the product VAT</p>
                    <div className=" d-flex h-75">
                      <button type='button' className="">Yes</button>
                      <button type='button'>No</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="AddSupplier__form__1">
              <h5 className="AddSupplier__form__1__left">Business</h5>
              <div className="AddSupplier__form__1__right">
                <div className="input__form">
                  <InputOption
                    label={"Payenment Terms"}
                    option={advancedOption[0].payenmentTerms}
                  />
                  <InputOption
                    label={"Payenment Terms"}
                    option={advancedOption[0].priceFamily}
                  />
                </div>
                <div className="input__form">
                  <InputOption
                    label={"Payenment Terms"}
                    option={advancedOption[0].salesTax}
                  />
                  <div className="w-100 d-flex justify-content-between">
                    <p>Priority VAT on the product VAT</p>
                    <div className=" d-flex h-75">
                      <button type='button' className="">Yes</button>
                      <button type='button'>No</button>
                    </div>
                  </div>
                </div>
                <div className="input__form row">
                  <div className="col-lg-6 py-2 d-flex justify-content-between">
                    <p>Opt-in to Emails</p>
                    <div className=" d-flex">
                      <button type='button' className="">Yes</button>
                      <button type='button'>No</button>
                    </div>
                  </div>
                  <div className="col-lg-6 py-2 d-flex justify-content-between">
                    <InputOption
                      label={"Payenment Terms"}
                      option={advancedOption[0].salesTax}
                    />
                  </div>
                </div>
              </div>
            </div>
            </>}
          </div>

          <div className="AddSupplier__form__submit px-4 shadow-lg py-2">
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

export default AddSupplier;
