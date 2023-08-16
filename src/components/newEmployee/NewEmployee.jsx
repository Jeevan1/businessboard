import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineCollectionsBookmark,
  MdArrowDropUp,
} from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

import "./NewEmployee.scss";
import NewItemHeader from "../newItemHeader/NewItemHeader";
import NewItemFooter from "../newItemFooter/NewItemFooter";
import { Link } from "react-router-dom";

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
            <option value={'1'} >{'1'}</option>
          </select>
        )}
      </div>
    </div>
  );
};

const Title = [
    {
        id:1,
        name: 'Mr.',
        selected: false,
    },
    {
        id:2,
        name: 'Mrs.',
        selected: false,
    },
    {
        id:3,
        name: 'Ms.',
        selected: false,
    },
    {
        id:4,
        name: 'None.',
        selected: true,
    },
]

function NewEmployee() {
  return (
    <div className="NewEmployee">
      <NewItemHeader name={"New Employee"} />

      <div className="NewEmployee__content  rounded">
        <form action="" className=" p-3">
          <div className="NewEmployee__content__1 ">
          <InputForm
              option={Title}
              label={"Title"}
              name={"title"}
              type={"text"}
              value={"None"}
            />
            <InputForm
              input
              label={"First Name"}
              name={"first_name"}
              required
              type={"text"}
              value={""}
            />
            <InputForm
              input
              label={"Last Name"}
              name={"last_name"}
              type={"text"}
              value={""}
            />

            <InputForm
              option
              label={"Job Title"}
              required
              name={"job_title"}
              type={"text"}
              value={"None"}
            />
            <hr />
            <InputForm
              input
              label={"Service to bill"}
              name={"bill"}
              type={"text"}
              placeholder={'Search results'}
            />
            <hr />
            <InputForm
              input
              label={"Birth Date"}
              name={"dob"}
              type={"date"}
              value={""}
            />
            <InputForm
              input
              label={"Email"}
              name={"email"}
              type={"email"}
              value={""}
            />
            <InputForm
              input
              label={"Accounting account"}
              required
              name={"account"}
              type={"text"}
              value={"Wages Pabale (23000)"}
            />
            <hr />
          </div>

          <NewItemFooter />
        </form>
      </div>
    </div>
  );
}

export default NewEmployee;
