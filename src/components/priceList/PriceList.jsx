import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";

import "./PriceList.scss";
import { InputForm, InputOption } from "../addCustomer/InputForm";
import NewItemHeader from "../newItemHeader/NewItemHeader";
import NewItemFooter from "../newItemFooter/NewItemFooter";

function PriceList() {
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
    <div className="PriceList">
      <NewItemHeader name={"New Sales Price List"} />
      <div className="PriceList__form rounded">
        <form action="" className="py-2 px-4">
          <div className="PriceList__form__1 border-bottom py-3">
            <div className="input__form w-100 d-flex justify-content-end">
                <div className="d-flex w-75 align-items-center gap-3">
                <label htmlFor="name">Name<span className=" text-danger">*</span></label>
                <input type="text"  name="list__name" className="border-0 border-bottom w-100 py-2 "/>
                </div>
            </div>
          </div>

          {/* advanced  */}
          <div className="PriceList__form__advanced pt-3">
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
                <div className="PriceList__form__1">
                  <h5 className="PriceList__form__1__left">Overview</h5>
                  <div className="PriceList__form__1__right">
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
                          <button type="button" className="">
                            Yes
                          </button>
                          <button type="button">No</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="PriceList__form__table">
            <table>
                <thead>
                    <tr className=" border-bottom-2">
                        <th>Code</th>
                        <th>Product/Service name</th>
                        <th>Price excl. Tax</th>
                        <th>Sale Unit</th>
                        <th>Product and service family</th>
                        <th>Prive by Level</th>
                    </tr>
                    
                </thead>
                <tbody>

                </tbody>
            </table>
                <p className="py-2 px-4 w-100 d-block ">No items to show</p>
          </div>
          <div className="PriceList__form__add">
            <span className=" d-flex align-items-center gap-1 border px-3 rounded py-2">
                <MdOutlineKeyboardArrowLeft className="icon bg-primary text-white" />
                 Add
            </span>
          </div>

          <NewItemFooter />
        </form>
      </div>
    </div>
  );
}

export default PriceList;
