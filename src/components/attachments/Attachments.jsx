import React, { useState } from "react";
import { BsThreeDotsVertical, BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { IoIosSwap } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

import "./Attachments.scss";
import SearchBar from "../SearchBar";

function Attachments() {
  const [sort, setSort] = useState({
    byDate: false,
    Attachments: false,
    grid: true,
    list: false,
  });

  const [view, setView] = useState({
    grid: true,
    list: false,
  });

  return (
    <div className="Attachments w-100">
      <div className="container-fluid p-0 ">
        <div className="Attachments__content py-3 px-4">
          <div className="Attachments__content__1 d-flex justify-content-between align-items-center">
            <h4 className=" fw-semibold">Attachments</h4>
            <div className=" d-flex gap-2">
              <button className=" rounded px-3 py-2">Upload files</button>
              <BsThreeDotsVertical className="icon p-1 rounded" />
            </div>
          </div>
          <div className="Attachments__content__2 py-2 px-2 my-3 d-flex align-items-center justify-content-between border bg-white">
            <div className="Attachments__content__2__left border-0">
              <SearchBar
                placeholder={"Search in Attachmentss"}
                width={"400px"}
                style={"shadow-none"}
              />
            </div>
            <div className="Attachments__content__2__right d-flex gap-2">
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
                  onClick={() => setSort({ Attachments: !sort.Attachments })}
                >
                  <IoIosSwap className="icon" />
                  Sorted by Creation Date
                  <FiChevronDown />
                </button>

                {sort.Attachments && (
                  <ul className="border shadow-sm bg-white my-1 p-0 py-1" name="" id="">
                    <li value="dsd">Creation Date(Oldest first)</li>
                    <li value="dsd">Creation Date(Most recent first)</li>
                  </ul>
                )}
              </div>
              {/* <div className="view ">
                <BsFillGrid3X3GapFill className={`icon ${view.grid && 'active'}`} onClick={() => setView({grid: true})}/>
                <FiMenu className={`icon ${view.list && 'active'}`} onClick={() => setView({list: true})}/>
              </div> */}
            </div>
          </div>
          <div className="Attachments__content__3">
            <div className="Attachments__content__3__1 bg-white ">
              <button className="active">
                To Attach
                <span>0</span>
              </button>
              <button>
                Attached
                <span>0</span>
              </button>
            </div>
            <div className="Attachments__content__3__2 data">
              <p className="fs-6 p-5 text-center">No matching Attachments found. <span className="">Show all Attachments.</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attachments;
