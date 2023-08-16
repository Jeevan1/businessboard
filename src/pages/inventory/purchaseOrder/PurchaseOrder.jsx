import React, { useEffect, useState } from "react";
import {
  BsThreeDotsVertical,
  BsChevronDown,
  BsFillGrid3X3GapFill,
  
} from "react-icons/bs";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { IoIosSwap } from "react-icons/io";
import { TbArrowBigRight } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";

import "./PurchaseOrder.scss";
import SearchBar from "../../../components/SearchBar";
import Header from "../../../components/header/Header";
import { links } from "../stock/Stock";
import { useMenuItemContext } from "../../../components/context/Context";
import { Link } from "react-router-dom";

function PurchaseOrder() {
  const [show, setShow] = useState({
    menu: false,
  });
  const [sort, setSort] = useState({
    byDate: false,
    PurchaseOrder: false,
    grid: true,
    list: false,
  });

  const [view, setView] = useState({
    grid: true,
    list: false,
  });
  
  const links = useMenuItemContext();
  const ownLinks = links[4].subLinks;  
  const menuLinks = links[4].menuLinks; 
  const rightLinks = ownLinks[1].subLinks;
  const moreLinks = links[4].moreLinks;


  return (
    <div className="PurchaseOrder w-100">
      <div className="container-fluid p-0 border">
        <div className="PurchaseOrder__top">
          <Header data={ownLinks} rightLinks={rightLinks} moreLinks={moreLinks} menuLinks={menuLinks}/>
        </div>
        <div className="PurchaseOrder__content p-3 mt-5">
          <div className="PurchaseOrder__content__1 d-flex justify-content-between align-items-center">
            <h5 className="">PurchaseOrders</h5>
            <div className=" d-flex gap-2">
              <button className=" rounded px-3 py-2">
                Automatic Inventory Ordering
              </button>
              <div className="rightLinks">
                <BsThreeDotsVertical className="icon p-1 rounded border" onClick={() => setShow({menu: !show.menu})}/>
               {show.menu &&  <div className='border border-black bg-white shadow py-1'>
                  {
                    rightLinks.map((item,idx) => (
                      <Link className="link px-3 py-1" key={idx}> {item.name}</Link>
                    ))
                  }
                </div>}
              </div>
            </div>
          </div>
          <div className="PurchaseOrder__content__2 py-1 px-2 my-3 d-flex align-items-center justify-content-between border bg-white">
            <div className="PurchaseOrder__content__2__left border-0">
              <SearchBar
                placeholder={"Search in Purchase Orders"}
                width={"400px"}
                style={"shadow-none"}
              />
            </div>
            <div className="PurchaseOrder__content__2__right d-flex gap-2">
              <div>
                <button
                  className="py-1 px-2"
                  onClick={() => setSort({ byDate: !sort.byDate })}
                >
                  Any Date
                  <FiChevronDown />
                </button>
                {sort.byDate && (
                  <ul className="border shadow-sm my-1 p-0 py-1" name="" id="">
                    <li value="dsd">Any Date</li>
                    <li value="dsd">Today</li>
                    <hr />
                    <li value="dsd">This Week</li>
                    <li value="dsd">This Month</li>
                    <li value="dsd">This Year</li>
                    <hr />
                    <li value="dsd">Last Week</li>
                    <li value="dsd">Last Month</li>
                    <li value="dsd">Last Year</li>
                    <hr />
                    <li value="dsd">Costum Data Range</li>
                  </ul>
                )}
              </div>
              <hr className="m-0" />
              <div>
                <button
                  className="py-1 px-2"
                  onClick={() =>
                    setSort({ PurchaseOrder: !sort.PurchaseOrder })
                  }
                >
                  <IoIosSwap className="icon" />
                  Sorted by PurchaseOrder Number
                  <FiChevronDown />
                </button>

                {sort.PurchaseOrder && (
                  <ul className="border shadow-sm my-1 p-0 py-1" name="" id="">
                    <li value="">{`Name(A --> Z)`}</li>
                    <li value="">{`Name(A --> Z)`}</li>
                    <hr />
                    <li value="dsd"> {`Purchase Order Number(01 --> 99)`}</li>
                    <li value="dsd"> {`Purchase Order Number(01 --> 99)`}</li>
                    <hr />
                    <li value="dsd">Creation Date(Oldest first)</li>
                    <li value="dsd">Creation Date(Most recent first)</li>
                  </ul>
                )}
              </div>
              <div className="view ">
                <BsFillGrid3X3GapFill
                  className={`icon ${view.grid && "active"}`}
                  onClick={() => setView({ grid: true })}
                />
                <FiMenu
                  className={`icon ${view.list && "active"}`}
                  onClick={() => setView({ list: true })}
                />
              </div>
            </div>
          </div>
          <div className="PurchaseOrder__content__3 ">
            <div className="category active">
              <div>
                <p className="type">All</p>
                <span>1</span>
              </div>
              <p className="value">NPR521</p>
            </div>
            <div className="category">
              <div>
                <p>Not Received</p>
                <span>1</span>
                <BsChevronDown />
              </div>
              <p className="value">NPR521</p>
            </div>
            <div className="category">
              <div>
                <p>Not Billed</p>
                <span>1</span>
                <BsChevronDown />
              </div>
              <p className="value">NPR521</p>
            </div>
          </div>
          <div className="PurchaseOrder__content__4 m-3">
            <div className="row">
              <div className="col-lg-4 bg-white order__item border shadow-sm">
                  <div className="order__item__1">
                    <h6>Purchase Order SORD-001</h6>
                    <small>02/08/23</small>
                  </div>
                  <p className="order__item__2">Miscellaneous Supplier</p>
                  <div className="order__item__3">
                    <p className=" rounded">6 days late</p>
                    <p className="p fw-bold">NPR520.90</p>
                  </div>
                  <div className="order__item__4 ">
                    <div>
                      <TbArrowBigRight className="icon"/>
                      <span>RECEIVE</span>
                    </div>
                    <div>
                      <AiOutlineMail className='icon'/>
                      <BsThreeDotsVertical className='icon'/>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseOrder;
