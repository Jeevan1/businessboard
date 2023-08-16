import React, { useState } from "react";
import {
  BsThreeDotsVertical,
  BsCaretDownFill,
  BsFillGrid3X3GapFill,
} from "react-icons/bs";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { IoIosSwap } from "react-icons/io";
import { BiRightArrow } from "react-icons/bi";
import { TbMessageCircle2Filled } from "react-icons/tb";

import "./Stock.scss";
import StaticContent from "../../../components/ststicContent/StaticContent";
import Header from "../../../components/header/Header";
import SearchBar from "../../../components/SearchBar";
import { Link } from "react-router-dom";
import { useMenuItemContext } from "../../../components/context/Context";

export const links = [
  {
    name: "Stock",
    link: "./",
  },
  {
    name: "Purchase Orders",
    link: "costumer",
  },
  {
    name: "Sales Orders",
    link: "costumer",
  },
  {
    name: "Receiving Notes",
    link: "costumer",
  },
  {
    name: "Delivery Notes",
    link: "costumer",
  },
  {
    name: "More",
    subname: [
      {
        name: "Picking List",
        link: "",
      },
      {
        name: "Purchase Return",
        link: "invoices",
      },
      {
        name: "Inventory Count Sheet",
        link: "invoices",
      },
      {
        name: "Inventory Entries",
        link: "invoices",
      },
      {
        name: "Inventory Withdrawals",
        link: "invoices",
      },
    ],
  },
];

function Stock() {
  const [show, setShow] = useState({
    menu: false,
  });
  const links = useMenuItemContext();
  const ownLinks = links[4].subLinks;  
  const menuLinks = links[4].menuLinks; 
  const rightLinks = ownLinks[0].subLinks;
  const moreLinks = links[4].moreLinks;

  return (
    <div className="Stock w-100">
      <div className="container-fluid p-0 border">
        <div className="Stock__top">
          <Header data={ownLinks} rightLinks={rightLinks} moreLinks={moreLinks} menuLinks={menuLinks}/>
        </div>
        <div className="Stock__content p-3 mt-5">
          <div className="Stock__content__1 d-flex justify-content-between align-items-center">
            <h5 className="fw-bold">Stock</h5>
            <div className=" d-flex gap-2">
              <Link to={'/automatic_inventory'} className="link rounded px-3 py-2">
                Automatic Inventory Ordering
              </Link>
              <div className="rightLinks">
                <BsThreeDotsVertical className="icon p-1 rounded border" onClick={() => setShow({menu: !show.menu})}/>
                {show.menu && <div className='border border-black bg-white shadow py-1'>
                  {
                    rightLinks.map((item,idx) => (
                      <Link className="link px-3 py-1" key={idx}> {item.name}</Link>
                    ))
                  }
                </div>}
              </div>
            </div>
          </div>
          <div className="Stock__content__2 my-4">
            <div className="search">
              <SearchBar
                placeholder={"Search in Stock"}
                style={"py-3 bg-white rounded shadow-sm"}
              />
            </div>
            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Cost</th>
                  <th>Unit</th>
                  <th>Location</th>
                  <th>Qty On Hand</th>
                  <th>Avaliable</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <BsCaretDownFill className="icon me-1" />
                    23
                  </td>
                  <td className="title">Mango</td>
                  <td className="desc ">
                    <TbMessageCircle2Filled className="icon" />
                    <div >
                      <p className="rounded-2 p-2 bg-white border-2 border shadow-sm">Mango seeet product..</p>
                      <BiRightArrow className="fs-1 m-0 text-secondary"/>
                    </div>
                  </td>
                  <td>2.00</td>
                  <td>NPR 23.00</td>
                  <td>NPR 23.00</td>
                  <td>Nepal</td>
                  <td>23.00</td>
                  <td>3.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stock;
