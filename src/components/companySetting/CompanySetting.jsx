import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineCollectionsBookmark,
  MdArrowDropUp,
} from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

import "./CompanySetting.scss";
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

function CompanySetting() {
  const [popup, setPopup] = useState({
    requestArchive: false,
  })
  return (
    <div className="CompanySetting">
      <NewItemHeader name={"Company Setting"} />

      <div className="CompanySetting__content  rounded">
        <form action="" className=" p-3">
          <div className="CompanySetting__content__1 ">
            <h6>Company Information</h6>
            <div className=" border-d d-flex align-items-center chooseImg mb-4 mt-3">
              <div className="row w-100 gap-0">
                <div className="col-4 "></div>
                <div className="col-8 ">
                  <div className=" border-d d-flex gap-2 align-items-center chooseImg">
                    <div className="form__input">
                      <MdOutlineCollectionsBookmark className="icon" />
                      <label htmlFor="file">
                        Drag and drop your logo here or
                        <p className=" text-primary">
                          Choose file from your device
                        </p>
                      </label>
                      <input type="file" name="image" />
                    </div>
                    <div className="w-100 px-3">
                      <p>
                        Your company logo will be used on quotes, invoices, and
                        other printable documents.
                      </p>
                      <small>
                        Recommended file types: .GIF, .PNG, or .JPG less than 1
                        MB.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //2nd */}
            <InputForm
              input
              label={"Company Name"}
              name={"company_name"}
              required
              type={"text"}
              value={"SUGA"}
            />
            <InputForm
              input
              label={"Address"}
              name={"address1"}
              type={"text"}
              value={"Kathmandu"}
            />
            <InputForm
              input
              label={""}
              name={"address2"}
              type={"text"}
              value={""}
            />
            <InputForm
              input
              label={""}
              name={"address3"}
              type={"text"}
              value={""}
            />
            <InputForm
              input
              label={"City"}
              name={"city"}
              type={"text"}
              value={"Kathmandu"}
            />
            <InputForm
              input
              label={"Post Code"}
              name={"post_code"}
              type={"text"}
              value={"Kathmandu"}
            />
            <InputForm
              option
              label={"Country"}
              required
              name={"country"}
              type={"text"}
              value={"Nepal"}
            />
            <hr />
            <InputForm
              input
              label={"Phone"}
              name={"phone"}
              type={"text"}
              value={"9873267326"}
            />
            <InputForm
              input
              label={"Fax"}
              name={"fax"}
              type={"text"}
              value={"7263625"}
            />
            <InputForm
              input
              label={"email"}
              name={"email"}
              type={"email"}
              value={"abc@gmail.com"}
            />
            <InputForm
              input
              label={"Website"}
              name={"website"}
              type={"text"}
              value={"sddghsgd.com"}
            />
            <hr />
            <InputForm
              input
              label={"Tax ID"}
              name={"tax_id"}
              type={"text"}
              value={"dhgsd768wg"}
            />
            <InputForm
              input
              label={"International Tax ID"}
              name={"tax_id2"}
              type={"text"}
              value={"673gg38"}
            />
            <hr />
          </div>
          <div className="CompanySetting__content__1">
            <h6>Document Settings</h6>
            <InputForm
              option
              label={"Document Language"}
              name={"doc_lan"}
              type={"text"}
              value={"Nepali"}
            />
            <InputForm
              option
              label={"Document Format"}
              name={"format"}
              type={"text"}
              value={"A4"}
            />
            <div className="row inputForm py-2">
              <div className="lcol  col-4">
                <label>
                  Document Templates
                  <span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8">
                <Link className="link border px-3 py-2 my-2">
                  Edit Templetes
                </Link>
              </div>
            </div>
            <InputForm radio type={'radio'} name={'customization'} label={'Allow Customization of Locked Invoices'}/>
            <div className="row inputForm py-2">
              <div className="lcol  col-4">
                <label>
                  Allow Customization of Locked Invoices
                  <span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8">
                <Link className="link border px-3 py-2 my-2">Yes</Link>
                <Link className="link border px-3 py-2 my-2 active">No</Link>
              </div>
            </div>
            <div className="row inputForm py-2">
              <div className="lcol  col-4">
                <label>
                  Draft Mode for Sales and Purchase Documents
                  <span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8">
                <Link className="link border px-3 py-2 my-2">Yes</Link>
                <Link className="link border px-3 py-2 my-2 active">No</Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="CompanySetting__content__1">
            <h6>Sales Settings</h6>
            <InputForm
              input
              label={"Default Quote Expiration (days)"}
              name={"expire_date"}
              type={"text"}
              value={"30"}
              style={"text-end"}
            />
            <br />
            <InputForm
              input
              label={"Late payments penalties fees"}
              name={"penalties"}
              type={"text"}
              value={"0.00"}
              style={"text-end"}
            />
            <InputForm
              input
              label={"Late payments penalties interest rate"}
              name={"penalties_interest"}
              type={"text"}
              value={"0.00"}
              style={"text-end"}
            />
            <hr />
            <div className="row inputForm py-2">
              <div className="lcol  col-4">
                <label>
                  Cash Drawer Management
                  <span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8">
                <Link className="link border px-3 py-2 my-2">Yes</Link>
                <Link className="link border px-3 py-2 my-2 active">No</Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="CompanySetting__content__1">
            <h6>Finance Settings</h6>
            <div className="row inputForm py-2">
              <div className="lcol  col-4">
                <label>
                  Accounting basis
                  <span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8">
                <Link className="link border px-3 py-2 my-2">Cash</Link>
                <Link className="link border px-3 py-2 my-2 active">
                  Accural
                </Link>
              </div>
            </div>
            <div className="row inputForm py-2">
              <div className="lcol  col-4">
                <label>
                  VAT Registered
                  <span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8">
                <Link className="link border px-3 py-2 my-2 active">Yes</Link>
                <Link className="link border px-3 py-2 my-2 ">No</Link>
              </div>
            </div>
            <InputForm
              option
              label={"Sales and Purchase Tax Label"}
              name={"tax_label"}
              type={"text"}
              value={"VAT"}
              style={"text-end"}
            />
            <div className="row inputForm py-2">
              <div className="lcol  col-4">
                <label>
                  VAT Scheme
                  <span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8">
                <Link className="link border px-3 py-2 my-2 active">
                  Standard
                </Link>
                <Link className="link border px-3 py-2 my-2 ">Flat Rateo</Link>
              </div>
            </div>
            <div className="row inputForm py-2">
              <div className="lcol  col-4">
                <label>
                  VAT Basis
                  <span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8">
                <Link className="link border px-3 py-2 my-2 active">Cash</Link>
                <Link className="link border px-3 py-2 my-2 ">Accural</Link>
              </div>
            </div>
            <div className="row inputForm py-2">
              <div className="lcol  col-4">
                <label>
                  Track Customer/Supplier for Sales Receipt and Expenses
                  <span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8">
                <Link className="link border px-3 py-2 my-2 active">Yes</Link>
                <Link className="link border px-3 py-2 my-2 ">No</Link>
              </div>
            </div>
            <hr />
            <div className="row inputForm py-2">
              <div className="lcol  col-4">
                <label>
                  Do you export ?<span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8">
                <Link className="link border px-3 py-2 my-2 active">Yes</Link>
                <Link className="link border px-3 py-2 my-2 ">No</Link>
              </div>
            </div>
            <hr />
            <InputForm
              input
              label={"Current accounting window start"}
              name={"tax_label"}
              type={"date"}
              value={"01/02/2022"}
            />
            <InputForm
              input
              label={"Sales and Purchase Tax Label"}
              name={"tax_label"}
              type={"date"}
              value={"VAT"}
            />
            <hr />
            <div className="row inputForm py-2">
              <div className="lcol  col-4">
                <label>
                  Do you export ?<span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8">
                <Link className="link border px-3 py-2 my-2 ">
                  Currency Settings
                </Link>
              </div>
            </div>
            <hr />
          </div>
          <div className="CompanySetting__content__1">
            <h6>Product and Service Settings</h6>
            <div className="row inputForm py-2">
              <div className="lcol  col-4">
                <label>
                  Do you export ?<span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8">
                <Link className="link border px-3 py-2 my-2 ">Yes</Link>
                <Link className="link border px-3 py-2 my-2 active">No</Link>
              </div>
            </div>
            <InputForm
              option
              label={"Sales and Purchase Tax Label"}
              name={"tax_label"}
              value={"MAIN LOCATION"}
            />
          </div>
          <hr />
          <div className="CompanySetting__content__1">
            <h6>Auto Numbering</h6>
            <InputForm
              option
              label={"Sales and Purchase Tax Label"}
              name={"tax_label"}
              value={"<Choose the type>"}
            />
          </div>
          <hr />
          <div className="CompanySetting__content__1">
            <h6 className="text-danger">Account Maintenance</h6>
            <div className="row inputForm align-items-start py-2">
              <div className="lcol  col-4">
                <label>
                  Download account archive
                  <span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8 ">
                <span className="d-block pb-3">
                  Request a copy of all account data to be emailed to the
                  account owner.
                </span>
                <Link className="link border px-3 py-2 my-2" onClick={() => setPopup({requestArchive: true})}>
                  Request archive
                </Link>
                {/* popup  */}
                {popup.requestArchive && <RequestArchive setPopup={setPopup} />}
              </div>
            </div>
            <div className="row inputForm align-items-start py-2">
              <div className="lcol  col-4">
                <label>
                  Reset your account
                  <span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8 ">
                <span className="d-block pb-3">
                  Need to start fresh? Reset your account is a permanent action
                  and cannot be undone.
                </span>
                <Link to={'/reset_account'} className="link border border-danger text-danger px-3 py-2 my-2 ">
                  Reset your account
                </Link>
              </div>
            </div>
            <div className="row inputForm align-items-start py-2">
              <div className="lcol  col-4">
                <label>
                  Download account archive
                  <span className=" text-danger"></span>
                </label>
              </div>
              <div className="rcol col-8 ">
                <span className="d-block pb-3">
                  Request a copy of all account data to be emailed to the
                  account owner.
                </span>
                <Link to={'/delete_account'} className="link border px-3 py-2 my-2 border-danger text-danger">
                  Delete my account
                </Link>
              </div>
            </div>
          </div>
          <NewItemFooter />
        </form>
      </div>
    </div>
  );
}

export default CompanySetting;
