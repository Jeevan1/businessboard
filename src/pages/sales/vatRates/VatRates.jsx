import React from "react";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import {AiOutlineCloudDownload} from "react-icons/ai";
import "./VatRates.scss";

const vatRates = [
  {
    id: 1,
    desc: "Standard rate",
    rate: '20.0',
  },
  {
    id: 2,
    desc: "Lower rate",
    rate: '5.0',
  },
  {
    id: 3,
    desc: "Zero rate",
    rate: '0.0',
  },
  {
    id: 4,
    desc: "Exempt",
    rate: '0.0',
  },
];
function VatRates() {
  return (
    <div className="VatRates bg-white mt-3 shadow-sm rounded">
      <div className="VatRates__top d-flex px-3 justify-content-between py-3 align-items-center">
        <h4>VAT Rates</h4>
        <button className=" rounded-1">New Vat Rates</button>
      </div>
      <div className="VatRates__search w-50 p-2">
        <input type="text" placeholder="Search this list" />
      </div>
      <div className="VatRates__list px-3">
        <table>
          <thead>
            <tr >
              <th className=" fw-bold">Description</th>
              <th className=" fw-bold">Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            {vatRates.map((item, idx) => (
              <tr key={item.id}>
                <td>{item.desc}</td>
                <td>{item.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="VatRates__page py-5 px-3 d-flex justify-content-center align-items-center gap-2">
        <TbArrowBigLeft className="icon" />
        <TbArrowBigLeft className="icon" />
        <span>1-8 of 8</span>
        <TbArrowBigRight className="icon" />
        <TbArrowBigRight className="icon" />
      </div>
      <div className="VatRates__footer py-3 px-3">
        <span className=" border px-3 py-2 rounded">
            <AiOutlineCloudDownload className="icon fs-5" />   
        </span>
      </div>
    </div>
  );
}

export default VatRates;
