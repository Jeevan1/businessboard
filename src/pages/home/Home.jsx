import React, { useEffect, useRef } from "react";
import Menu from "../../components/menuItems/Menu";
import { TfiHome } from "react-icons/tfi";
import { TiMessages } from "react-icons/ti";
import {
  PiFileCloudLight,
  PiNotepad,
  PiCalculator,
  PiChartPieSlice,
} from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import SearchBar from "../../components/SearchBar";
import "./Home.scss";
import { Link } from "react-router-dom";

const username = "Jeevan Shrestha";
const firstname = username.split(" ");

const apps = [
  {
    id: 1,
    name: "Home",
    link: "home",
    icon: <TfiHome />,
    color: "success",
    desc: "Organise sales opportunities and turn leads into happy customers.",
  },
  {
    id: 2,
    name: "Opportunities",
    link: "opportunities",
    icon: <TiMessages />,
    color: "primary",
    desc: "Organise sales opportunities and turn leads into happy customers.",
  },
  {
    id: 3,
    name: "Sales",
    link: "sales",
    icon: <PiFileCloudLight />,
    color: "danger",
    desc: "Organise sales opportunities and turn leads into happy customers.",
  },
  ,
  {
    id: 4,
    name: "Purchasing",
    link: "purchasing",
    icon: <PiNotepad />,
    color: "info",
    desc: "Organise sales opportunities and turn leads into happy customers.",
  },
  {
    id: 5,
    name: "Inventory",
    link: "inventory",
    icon: <BsBoxSeam />,
    color: "warning",
    desc: "Organise sales opportunities and turn leads into happy customers.",
  },
  {
    id: 6,
    name: "Accounting",
    link: "accounting",
    icon: <PiChartPieSlice />,
    color: "success",
    desc: "Organise sales opportunities and turn leads into happy customers.",
  },
];

function Home() {
  const ref = useRef(null);
  useEffect(() => {
    // ref.current.focus();
  }, []);

  return (
    <div className="home">
      <div className=" h-100 container-fluid d-flex">
        <div className="home__right d-flex flex-column align-items-center justify-content-center">
          <div className="">
            <h4 className="text-center pb-4">Good Evening {firstname[0]}!</h4>
            <SearchBar
              width={"90%"}
              ref={ref}
              placeholder={"What do you want to do?"}
              style={"bg-light shadow-sm border rounded-1"}
            />
            <div className="apps py-4">
              <p className="">Apps</p>
              <div className="row flex-wrap">
                {apps.map((item, idx) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 py-2 m-0 px-2"
                    key={idx}
                  >
                    <Link to={`/${item.link}`}>
                      <div
                        className={`apps__item rounded text-center py-4 text-white bg-${item.color}`}
                      >
                        <div>
                          <span className="fs-2">{item.icon}</span>
                          <p className="pt-4 pb-1 fw-light">{item.name}</p>
                        </div>
                        <small className="px-1">{item.desc}</small>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
