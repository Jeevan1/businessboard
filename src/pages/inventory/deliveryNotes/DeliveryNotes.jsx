import React, { useState } from "react";
import Header from "../../../components/header/Header";
import { BsThreeDotsVertical, BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiChevronDown,FiMenu } from "react-icons/fi";
import { IoIosSwap } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

import "./DeliveryNotes.scss";
import StaticContent from "../../../components/ststicContent/StaticContent";
import { useMenuItemContext } from "../../../components/context/Context";
import { Link } from "react-router-dom";

function DeliveryNotes() {
  const [show, setShow] = useState({
    menu: false,
  });
  const links = useMenuItemContext();
  const ownLinks = links[4].subLinks;  
  const menuLinks = links[4].menuLinks; 
  const rightLinks = ownLinks[4].subLinks;
  const moreLinks = links[4].moreLinks;

  return (
    <div className="DeliveryNotes w-100">
      <div className="container-fluid p-0 border">
        <div className="DeliveryNotes__top">
          <Header data={ownLinks} rightLinks={rightLinks} moreLinks={moreLinks} menuLinks={menuLinks}/>
        </div>
        <div className="DeliveryNotes__content p-3 mt-5">
          <div className="DeliveryNotes__content__1 d-flex justify-content-between align-items-center">
            <h5 className="">Delivery Notes</h5>
            <div className=" d-flex gap-2">
              <Link to={'/new/delivery_notes'}>
              <button className=" rounded px-3 py-2">New Delivery Notes</button></Link>
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
          <div className="DeliveryNotes__content__2 my-5">
            <StaticContent name={'DeliveryNotes'} desc={'A Quote is an offer to sell specific goods and services at a specific price. Once DeliveryNotes are accepted they can be converted into Invoices or Receiving Notess.'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryNotes;
