import React, { useState } from "react";
import Header from "../../../components/header/Header";
import { BsThreeDotsVertical, BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiChevronDown,FiMenu } from "react-icons/fi";
import { IoIosSwap } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

import "./RecevingNotes.scss";
import SearchBar from "../../../components/SearchBar";
import StaticContent from "../../../components/ststicContent/StaticContent";
import { useMenuItemContext } from "../../../components/context/Context";
import { Link } from "react-router-dom";

function RecevingNotes() {
  const links = useMenuItemContext();
  const ownLinks = links[4].subLinks;  

  const rightLinks = ownLinks[2].subLinks;
  const moreLinks = links[4].moreLinks;

  return (
    <div className="RecevingNotes w-100">
      <div className="container-fluid p-0 border">
        <div className="RecevingNotes__top">
          <Header data={ownLinks} rightLinks={rightLinks} moreLinks={moreLinks}/>
        </div>
        <div className="RecevingNotes__content p-3 mt-5">
          <div className="RecevingNotes__content__1 d-flex justify-content-between align-items-center">
            <h5 className="">Receiving Notes</h5>
            <div className=" d-flex gap-2">
              <Link to={'/new/receiving_notes'}>
              <button className=" rounded px-3 py-2">New Receiving Notes</button></Link>
              <BsThreeDotsVertical className="icon p-1 rounded border" />
            </div>
          </div>
          <div className="RecevingNotes__content__2 my-5">
            <StaticContent name={'RecevingNotes'} desc={'A Quote is an offer to sell specific goods and services at a specific price. Once RecevingNotes are accepted they can be converted into Invoices or Sales Orders.'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecevingNotes;
