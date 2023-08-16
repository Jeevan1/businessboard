import React, { useState } from "react";
import Header from "../../../components/header/Header";
import { BsThreeDotsVertical, BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiChevronDown,FiMenu } from "react-icons/fi";
import { IoIosSwap } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

import "./Expenses.scss";
import SearchBar from "../../../components/SearchBar";
import StaticContent from "../../../components/ststicContent/StaticContent";
import { links } from "../dashboard/Suppliers";
import { useMenuItemContext } from "../../../components/context/Context";
import { Link } from "react-router-dom";

function Expenses() {
  const [show, setShow] = useState({
    menu: false,
  });
  const links = useMenuItemContext();
  const ownLinks = links[3].subLinks;  
  const menuLinks = links[3].menuLinks; 

  const rightLinks = ownLinks[1].subLinks;
  const moreLinks = links[3].moreLinks;

  return (
    <div className="Expenses w-100">
      <div className="container-fluid p-0 border">
        <div className="Expenses__top">
          <Header data={ownLinks} rightLinks={rightLinks} moreLinks={moreLinks} menuLinks={menuLinks}/>
        </div>
        <div className="Expenses__content p-3 mt-5">
          <div className="Expenses__content__1 d-flex justify-content-between align-items-center">
            <h5 className="">Expenses</h5>
            <div className=" d-flex gap-2">
              <button className=" rounded px-3 py-2">New Expenses</button>
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
          <div className="Expenses__content__2 my-5">
            <StaticContent name={'Expenses'} desc={'Enter expenses to record how your company spends money. Upload pictures of your receipts to justify expenses.'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
