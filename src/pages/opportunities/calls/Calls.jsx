import React, { useState } from "react";
import Header from "../../../components/header/Header";
import { BsThreeDotsVertical, BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiChevronDown,FiMenu } from "react-icons/fi";
import { IoIosSwap } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

import "./Calls.scss";
import SearchBar from "../../../components/SearchBar";
import StaticContent from "../../../components/ststicContent/StaticContent";
import { links } from "../Links";
import { useExportItemContext, useMenuItemContext } from "../../../components/context/Context";
import { Link } from "react-router-dom";

function Calls() {
  const [show, setShow] = useState({
    menu: false,
  });
  const [exportItem,setExportItem] = useExportItemContext();
  const links = useMenuItemContext();
  const ownLinks = links[1].subLinks;  

  const rightLinks = ownLinks[3].subLinks;
  return (
    <div className="Calls w-100">
      <div className="container-fluid p-0 border">
        <div className="Calls__top">
          <Header data={ownLinks} />
        </div>
        <div className="Calls__content p-3 mt-5">
          <div className="Calls__content__1 d-flex justify-content-between align-items-center">
            <h5 className="">Calls</h5>
            <div className=" d-flex gap-2">
              <Link to={'/calls/new'}>
              <button className=" rounded px-3 py-2">New Calls</button></Link>
              <div className="rightLinks">
                <BsThreeDotsVertical className="icon p-1 rounded border" onClick={() => setShow({menu: !show.menu})}/>
                {show.menu && <div className='border border-black bg-white shadow py-1'>
                  {/* {
                    rightLinks.map((item,idx) => (
                      
                    ))
                  } */}
                  <Link className="link px-3 py-1"  onClick={() => setExportItem({state: true, item: 'Calls'})}>Export Calls</Link>
                </div>}
              </div>
            </div>
          </div>
          <div className="Calls__content__2 my-5">
            <StaticContent name={'Calls'} desc={'A Quote is an offer to sell specific goods and services at a specific price. Once Calls are accepted they can be converted into Callss or Sales Orders.'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calls;
