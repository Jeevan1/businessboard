import React, { useEffect, useState } from "react";
import { PiBookBookmarkThin } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import "./Reports.scss";
import Header from "../../components/header/Header";

const reports = [
  {
    icon: <PiBookBookmarkThin className="icon" />,
    type: "Profit and Loss",
    desc: "See your net income and breakdown of revenues, costs and expenses.",
    link : "/profit_loss",
    category: "accounting",
  },
  {
    icon: <PiBookBookmarkThin className="icon" />,
    type: "Balance Sheet",
    desc: "See the financial balance of your company.",
    link : "/balance_sheet",
    category: "accounting",
  },
  {
    icon: <PiBookBookmarkThin className="icon" />,
    type: "General Ledger",
    desc: "See your complete record of financial transactions.",
    link : "/general_ledger",
    category: "accounting",
  },
  {
    icon: <PiBookBookmarkThin className="icon" />,
    type: "Trail Balance",
    desc: "See the balance of all the General ledger accounts.",
    link : "/trail_balance",
    category: "accounting",
  },
  {
    icon: <PiBookBookmarkThin className="icon" />,
    type: "Vat Report",
    desc: "See your closed VAT periods and generate a report for VAT filing.",
    link : "/vat_report",
    category: "accounting",
  },
  {
    icon: <PiBookBookmarkThin className="icon" />,
    link : "",
    category: "sale",
    type: "Costumer Statement",
  },
  {
    icon: <PiBookBookmarkThin className="icon" />,
    link : "",
    category: "sale",
    type: "Costumer Statement",
  },
  {
    icon: <PiBookBookmarkThin className="icon" />,
    link : "",
    category: "purchasing",
    type: "Costumer Statement",
  },
  {
    icon: <PiBookBookmarkThin className="icon" />,
    link : "",
    category: "purchasing",
    type: " Statement",
  },
];

function Reports() {
  const [cat, setCat] = useState(reports);
  const [activeCategory, setActiveCategory] = useState("accounting");

  const uniqueCategories = Array.from(
    new Set(reports.map((report) => report.category))
  );

  const grtUniqueProducts = (item, idx) => {
    const category = reports.filter((rep) => {
      return rep.category === item;
    });
    setCat(category);
    setActiveCategory(item);
  };

  useEffect(() => {
    grtUniqueProducts("accounting");
  }, []);
  return (
    <div className="Reports">
      <div className="container">
        <div className="Reports__top bg-white">
          <div className="header border d-flex text-center justify-content-center">
            {uniqueCategories.map((item, idx) => {
              return (
                <Link
                  onClick={() => grtUniqueProducts(item, idx)}
                  className={`text-decoration-none header__link ${activeCategory===item ? 'active' : ''}`}
                  key={idx}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="Reports__content">
          <div className="row">
            {cat.map((item, idx) => (
              <div className="col-xs-12 col-sm-6 mt-4" key={idx}>
                <Link to={item.link} className="link d-flex align-items-center gap-4 p-2">
                  <span className="" style={{}}>
                    {item.icon}
                  </span>
                  <div>
                    <h5 className="py-2">{item.type}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
