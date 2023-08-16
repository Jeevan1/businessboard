import React, { useState } from "react";
import Header from "../../../components/header/Header";
import { BsThreeDotsVertical, BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { IoIosSwap } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

import "./Leads.scss";
import SearchBar from "../../../components/SearchBar";
import StaticContent from "../../../components/ststicContent/StaticContent";
import { links } from "../Links";
import { Link, NavLink } from "react-router-dom";
import { useExportItemContext, useMenuItemContext } from "../../../components/context/Context";


function Leads() {
  const [show, setShow] = useState({
    menu: false,
  });
  const links = useMenuItemContext();
  const [exportItem,setExportItem] = useExportItemContext();
  const ownLinks = links[1].subLinks;  

  const rightLinks = ownLinks[0].subLinks;
  console.log(exportItem.item)

  return (
    <div className="Leads w-100">
      <div className="container-fluid p-0 border">
        <div className="Leads__top">
          <Header data={ownLinks} />
        </div>
        <div className="Leads__content p-3 mt-5">
          <div className="Leads__content__1 d-flex justify-content-between align-items-center">
            <h5 className="">Leads</h5>
            <div className=" d-flex gap-2">
             <Link to={'/new/lead'}>
             <button className=" rounded px-3 py-2">New Leads</button>
             </Link>
              <div className=" position-relative">
                <BsThreeDotsVertical className="icon py-2 rounded border" onClick={() => setShow({menu: !show.menu})}/>
                {show.menu && <div className="sub__subLinks border">
                  {
                    rightLinks.map((item,idx) => (
                      
                      <NavLink to={item.link} className={'link'} key={idx}>{item.name}</NavLink>
                    ))
                    
                  }
                  <NavLink className={'link'} onClick={() => setExportItem({state: true, item: 'Lead'})}>Export Leads</NavLink>
                </div>}
              </div>
            </div>
          </div>
          <div className="Leads__content__2 my-5">
            <StaticContent
              name={"Leads"}
              desc={
                "A Quote is an offer to sell specific goods and services at a specific price. Once Leads are accepted they can be converted into Leadss or Sales Orders."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leads;
