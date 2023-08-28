import React from "react";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import {AiOutlineCloudDownload} from "react-icons/ai";

import "./PayenmentTerms.scss";
import { useMenuItemContext } from "../../../components/context/Context";
import Header from "../../../components/header/Header";

const PayenmntTerms = [
  {
    id: 1,
    desc: "Due on receipt",
    rate: '20.0',
  },
  {
    id: 2,
    desc: "At 30 dats",
    rate: '5.0',
  },
  {
    id: 3,
    desc: "At 60 days",
    rate: '0.0',
  },
  {
    id: 4,
    desc: "At 90 days",
    rate: '0.0',
  },
  {
    id: 4,
    desc: "In two installment",
    rate: '0.0',
  },
  {
    id: 4,
    desc: "In two installment",
    rate: '0.0',
  },
];
function PayenmentTerms() {
  const links = useMenuItemContext();
  const ownLinks = links[2].subLinks;  

  const rightLinks = ownLinks[0].subLinks;
  const moreLinks = links[2].moreLinks;
  return (
    <div className="PayenmentTerms w-100 border-start">
      <Header data={ownLinks} rightLinks={rightLinks} moreLinks={moreLinks}/>
      <div className="container-fluid  bg-white mt-3 shadow-sm rounded">
      <div className="PayenmentTerms__top d-flex px-3 justify-content-between py-3 align-items-center">
        <h4>Edit Payenment Terms</h4>
        <button className=" rounded-1">New Payenment Terms</button>
      </div>
      <div className="PayenmentTerms__search w-50 p-2">
        <input type="text" placeholder="Search this list" />
      </div>
      <div className="PayenmentTerms__list px-3">
        <table>
          <thead>
            <tr >
              <th className=" fw-bold">Description</th>
            </tr>
          </thead>
          <tbody>
            {PayenmntTerms.map((item, idx) => (
              <tr key={item.id}>
                <td>{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="PayenmentTerms__page py-5 px-3 d-flex justify-content-center align-items-center gap-2">
        <TbArrowBigLeft className="icon" />
        <TbArrowBigLeft className="icon" />
        <span>1-6 of 6</span>
        <TbArrowBigRight className="icon" />
        <TbArrowBigRight className="icon" />
      </div>
      <div className="PayenmentTerms__footer py-3 px-3">
        <span className=" border px-3 py-2 rounded">
            <AiOutlineCloudDownload className="icon fs-5" />   
        </span>
      </div>
    </div>
    </div>
  );
}

export default PayenmentTerms;
