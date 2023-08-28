import React, { useState } from "react";
import Header from "../../../components/header/Header";
import { BsThreeDotsVertical, BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiChevronDown,FiMenu } from "react-icons/fi";
import { IoIosSwap } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

import "./SalesReceipts.scss";
import SearchBar from "../../../components/SearchBar";
import StaticContent from "../../../components/ststicContent/StaticContent";
import { useMenuItemContext } from "../../../components/context/Context";
import { Link } from "react-router-dom";

function SalesReceipts() {
  const [show, setShow] = useState({
    menu: false,
  });
  const links = useMenuItemContext();
  const ownLinks = links[2].subLinks;  
  const menuLinks = links[2].menuLinks; 

  const rightLinks = ownLinks[1].subLinks;
  const moreLinks = links[2].moreLinks;

  return (
    <div className="SalesReceipts w-100">
      <div className="container-fluid p-0 border">
        <div className="SalesReceipts__top">
          <Header data={ownLinks} rightLinks={rightLinks} moreLinks={moreLinks} menuLinks={menuLinks}/>
        </div>
        <div className="SalesReceipts__content p-3 mt-5">
          <div className="SalesReceipts__content__1 d-flex justify-content-between align-items-center">
            <h5 className="">Sales Receipts</h5>
            <div className=" d-flex gap-2">
              <button className=" rounded px-3 py-2">New Sales Receipts</button>
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
          <div className="SalesReceipts__content__2 my-5">
            <StaticContent name={'Sales Receipts'} desc={'You haven’t received any Customer Payments. Payments can be received directly inside an Invoice, or use ‘Receive Customer Payment’ to record multiples payment at the same time.'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesReceipts;
