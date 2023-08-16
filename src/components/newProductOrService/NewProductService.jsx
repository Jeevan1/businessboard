import React, { useEffect, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import "./NewProductService.scss";
import { Link } from "react-router-dom";
import NewItemFooter from "../newItemFooter/NewItemFooter";

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

function NewProductService({newPS}) {
  const [type, setType] = useState({
    service: true,
    product: false,
    track: true,
  });
  const [advanced, setAdvanced] = useState(false);
  const [track, setTrack] = useState({
    service: true,
    product: false,
  });
  const [option, setOption] = useState({
    unit: false,
    family: false,
    income: false,
    tax: false,
  });
  const [value, setValue] = useState({
    unit: "Day",
    family: "miscellaneous",
    income: "Sales - Mis(2324)",
    tax: "20.00% Standard rate (Sales)",
  });

  // useEffect(()=> {

  // })

  return (
    <div className="NewProductService py-4">
      <div className="container px-0 rounded overflow-hidden shadow">
        <div className="NewProductService__header  text-center">
          <h6 className="py-3">New Product or Service</h6>
        </div>
        <div className="NewProductService__content  ">
          <form action="" className=" py-3">
            <div className="NewProductService__form px-3">
              <div className="NewProductService__content__1 chooseType">
                <span
                  className={`rounded-1 ${type.service && "active"}`}
                  onClick={() => setType({ service: true })}
                >
                  Service
                </span>
                <span
                  className={`rounded-1 ${type.product && "active"}`}
                  onClick={() => setType({ product: true })}
                >
                  Product
                </span>
              </div>
              <div className="NewProductService__content__1 ">
                <InputForm
                  input
                  label={"Name"}
                  name={"name"}
                  required
                  type={"text"}
                  value={"SUGA"}
                />
                <div
                  className="option__type"
                  onClick={() => setOption({ unit: !option.unit })}
                >
                  <InputForm
                    input
                    label={"Unit"}
                    name={"unit"}
                    type={""}
                    value={value.unit}
                  />
                  {option.unit && (
                    <ul className="option__item border shadow">
                      <li onClick={() => setValue({ unit: "day" })}>Day</li>
                      <li onClick={() => setValue({ unit: "gran" })}>Gram</li>
                      <li onClick={() => setValue({ unit: "kg" })}>Kg</li>
                    </ul>
                  )}
                </div>
                <InputForm
                  input
                  label={"Sales Price"}
                  name={"sales_price"}
                  type={"text"}
                  value={"0.00"}
                  style={"text-end"}
                />
                {type.product && (
                  <InputForm
                    input
                    label={"Purchase Price"}
                    name={"purchase_price"}
                    type={"text"}
                    value={"0.00"}
                    style={"text-end"}
                  />
                )}
                <hr />
                <InputForm
                  input
                  label={"Item Number"}
                  name={"item_num"}
                  type={"text"}
                  value={""}
                />
                <div className="row inputForm align-items-start">
                  <div className="lcol  col-4">
                    <label>Description</label>
                  </div>
                  <div className="rcol col-8 d-flex">
                    <textarea
                      name=""
                      id=""
                      cols="80"
                      rows="3"
                      className="border-0 border-bottom p-2"
                    ></textarea>
                  </div>
                </div>
                <div
                  className="option__type"
                  onClick={() => setOption({ family: !option.family })}
                >
                  <InputForm
                    input
                    label={"Unit"}
                    name={"unit"}
                    type={""}
                    value={value.family}
                  />
                  {option.family && (
                    <ul className="option__item border shadow">
                      <li onClick={() => setValue({ family: "miscellaneous" })}>
                        Miscellaneous
                      </li>
                      <li onClick={() => setValue({ family: "" })}>
                        Start the searh
                      </li>
                      <li onClick={() => setValue({ family: "" })}>
                        Create a new
                      </li>
                    </ul>
                  )}
                </div>
                <hr />
                {type.product && (
                  <div className="row inputForm">
                    <div className="lcol  col-4">
                      <label>Track Inventory</label>
                    </div>
                    <div className="rcol col-8 d-flex">
                      <div className="radiobtn my-2">
                        <input
                          type={"radio"}
                          name="track"
                          {...(type.track && "checked")}
                          className={"style"}
                          onClick={() => setType({ ...type, track: true })}
                        />
                        <span className="border">Yes</span>
                      </div>
                      <div className="radiobtn ">
                        <input
                          name="track"
                          type={"radio"}
                          className={"style"}
                          onClick={() => setType({ ...type, track: false })}
                        />
                        <span className="border">No</span>
                      </div>
                    </div>
                  </div>
                )}
                <hr />
                {type.track && (
                  <>
                    <InputForm
                      option
                      label={"Valuation costing"}
                      name={"costEva"}
                      value={"Weighted average price"}
                    />
                    <InputForm
                      input
                      label={"Minimum stock quantity"}
                      name={"stockQty"}
                      type={"text"}
                      value={"0.00"}
                      style={"text-end"}
                    />
                    <InputForm
                      option
                      label={"Receiving Location"}
                      name={"receiving_location"}
                      value={"MAIN LOCATION"}
                    />
                    <InputForm
                      option
                      label={"Picking/Delivery Location"}
                      name={"delevery_location"}
                      value={"MAIN LOCATION"}
                    />
                    <InputForm
                      option
                      label={"Inventory Account"}
                      name={"account"}
                      value={"12001"}
                    />
                    <InputForm
                      option
                      label={"Inventory Transit Account"}
                      name={"transit_location"}
                      value={"12900"}
                    />
                  </>
                )}
              </div>
              <div className="NewProductService__content__1 pb-5">
                <button
                  type="button"
                  className="d-flex gap-1 mb-4 text-primary"
                  onClick={() => setAdvanced(!advanced)}
                >
                  {!advanced && <MdArrowDropDown className="icon" />}
                  {advanced && <MdArrowDropUp className="icon" />}
                  <span>Advanced</span>
                </button>
                {advanced && (
                  <>
                    <div className="row inputForm align-items-start">
                      <div className="lcol  col-4">
                        <label>Private Note</label>
                      </div>
                      <div className="rcol col-8 d-flex">
                        <textarea
                          name=""
                          id=""
                          cols="80"
                          rows="3"
                          className="border-0 border-bottom p-2"
                        ></textarea>
                      </div>
                    </div>
                    <hr />
                    <div
                      className="option__type"
                      onClick={() => setOption({ income: !option.income })}
                    >
                      <InputForm
                        input
                        label={"Unit"}
                        name={"unit"}
                        type={""}
                        value={value.income || "Sales - Mis(410054)"}
                      />
                      {option.income && (
                        <ul className="option__item border shadow">
                          <li>No results found</li>
                        </ul>
                      )}
                    </div>
                    <InputForm
                      option
                      label={"VAT on Sales"}
                      name={"vat_sales"}
                      value={"20.00% Standard rate (Sales)"}
                    />
                    <hr />
                  </>
                )}
              </div>
            </div>
            <NewItemFooter newPS = {newPS}/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewProductService;
