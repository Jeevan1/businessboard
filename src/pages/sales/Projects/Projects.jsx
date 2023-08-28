import React, { useState } from "react";
import Header from "../../../components/header/Header";
import { links } from "../dashboard/Sales";
import { BsThreeDotsVertical, BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiChevronDown,FiMenu } from "react-icons/fi";
import { IoIosSwap } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

import "./Projects.scss";
import SearchBar from "../../../components/SearchBar";
import { useMenuItemContext } from "../../../components/context/Context";
import { Link } from "react-router-dom";

function Projects() {
  const [sort, setSort] = useState({
    byDate: false,
    Projects: false,
    grid: true,
    list: false,
  });

  const [view,setView] = useState({
    grid: true,
    list: false
  });
  const [show, setShow] = useState({
    menu: false,
  });

  const links = useMenuItemContext();
  const ownLinks = links[2].subLinks; 
  const menuLinks = links[2].menuLinks; 
  const rightLinks = ownLinks[1].subLinks;
  const moreLinks = links[2].moreLinks;

  return (
    <div className="Projects w-100">
      <div className="container-fluid p-0 border">
        <div className="Projects__top">
          <Header data={ownLinks} rightLinks={rightLinks} moreLinks={moreLinks} menuLinks={menuLinks}/>
        </div>
        <div className="Projects__content p-3 mt-5">
          <div className="Projects__content__1 d-flex justify-content-between align-items-center">
            <h5 className="">Projectss</h5>
            <div className=" d-flex gap-2">
              <Link to={'/new/Projects'}>
              <button className=" rounded px-3 py-2">New Projects</button>
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
          <div className="Projects__content__2 py-1 px-2 my-3 d-flex align-items-center justify-content-between border bg-white">
            <div className="Projects__content__2__left border-0">
              <SearchBar
                placeholder={"Search Projects "}
                width={"400px"}
                style={"shadow-none"}
              />
            </div>
            <div className="Projects__content__2__right d-flex gap-2">
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
                  onClick={() => setSort({ Projects: !sort.Projects })}
                >
                  <IoIosSwap className="icon" />
                  Sorted by Projects Number
                  <FiChevronDown />
                </button>

                {sort.Projects && (
                  <ul className="border shadow-sm my-1 p-0 py-1" name="" id="">
                    <li value="">{`Name(A --> Z)`}</li>
                    <li value="">{`Name(A --> Z)`}</li>
                    <hr />
                    <li value="dsd"> {`Projects Number(01 --> 99)`}</li>
                    <li value="dsd"> {`Projects Number(01 --> 99)`}</li>
                    <hr />
                    <li value="dsd">Creation Date(Oldest first)</li>
                    <li value="dsd">Creation Date(Most recent first)</li>
                  </ul>
                )}
              </div>
              <div className="view ">
                <BsFillGrid3X3GapFill className={`icon ${view.grid && 'active'}`} onClick={() => setView({grid: true})}/>
                <FiMenu className={`icon ${view.list && 'active'}`} onClick={() => setView({list: true})}/>
              </div>
            </div>
          </div>
          <div className="Projects__content__3">
           {view.grid && <div className="row grid__view">
              <div className="col-lg-4">
                <div className="border shadow-sm bg-white pt-3">
                  <div className=" Projects__title px-3 d-flex align-items-center justify-content-between">
                    <p className="Projects__name text-primary">MISC Projects</p>
                    <p className="Projects__id text-secondary">CUS-001</p>
                  </div>
                  <div className="Projects__info px-3 pt-2 pb-3 fw-semibold d-flex align-items-center gap-2">
                    <div className="d-flex align-items-center gap-1">
                      <CiLocationOn className="icon" />
                      <p>Nepal</p>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="Projects__delete p-3 text-end">
                    <RiDeleteBinLine className="icon fs-5 text-danger" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="border shadow-sm bg-white pt-3">
                  <div className=" Projects__title px-3 d-flex align-items-center justify-content-between">
                    <p className="Projects__name text-primary">ABC Projects</p>
                    <p className="Projects__id text-secondary">CUS-002</p>
                  </div>
                  <div className="Projects__info px-3 pt-2 pb-3 fw-semibold d-flex align-items-center gap-2">
                    <div className="d-flex align-items-center gap-1">
                      <CiLocationOn className="icon" />
                      <p>Nepal</p>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="Projects__delete p-3 text-end">
                    <RiDeleteBinLine className="icon fs-5 text-danger" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="border shadow-sm bg-white pt-3">
                  <div className=" Projects__title px-3 d-flex align-items-center justify-content-between">
                    <p className="Projects__name text-primary">MISC Projects</p>
                    <p className="Projects__id text-secondary">CUS-003</p>
                  </div>
                  <div className="Projects__info px-3 pt-2 pb-3 fw-semibold d-flex align-items-center gap-2">
                    <div className="d-flex align-items-center gap-1">
                      <CiLocationOn className="icon" />
                      <p>Nepal</p>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="Projects__delete p-3 text-end">
                    <RiDeleteBinLine className="icon fs-5 text-danger" />
                  </div>
                </div>
              </div>
            </div>}
            {view.list && <div className="list__view">
                <table className="border">
                    <thead >
                        <tr className="">
                            <th><input type="checkbox" /></th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phones</th>
                            <th>Projects Number</th>
                            <th>Notes</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>MISC CUSTOMER</td>
                            <td>Nepal</td>
                            <td></td>
                            <td></td>
                            <td>CUS-001</td>
                            <td></td>
                            <td><RiDeleteBinLine className="icon fs-6 text-danger" /></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>MISC CUSTOMER</td>
                            <td>Nepal</td>
                            <td></td>
                            <td></td>
                            <td>CUS-002</td>
                            <td></td>
                            <td><RiDeleteBinLine className="icon fs-6 text-danger" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
