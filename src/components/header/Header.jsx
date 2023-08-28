import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { PiCaretDownLight, PiFileMinus } from "react-icons/pi";
import  {CiSettings} from "react-icons/ci";
import "./Header.scss";
import { useMenuContext } from "../context/Context";

function Header({ data, rightLinks, moreLinks,menuLinks }) {
  const [active, setActive] = useState({
    header: false,
    rightHeader: false,
  });
  const [headerActive, setHeaderActive] = useState();

  const [menuname,setMenuName] = useMenuContext();


  const path = useLocation();
  const loc = path.pathname.split("/");

  const setHeader = (item) => {
    setHeaderActive(item);
  };
  const showWidth = {
    width:' 87vw',
  }
  const hideWidth = {
    width:' 95vw',
  }
  useEffect(() => {
   
    // setHeader("dashboard");
    // setHeader("sales");
    // setHeader("Stock");
    // setHeader("suppliers");
  }, []);
  return (
    <div className="Header shadow-sm d-flex align-items-center justify-content-between" style={menuname?showWidth:hideWidth}>
      <div className="Header-top d-flex text-center justify-content-center">
        {data.map((item, idx) =>
          (
            <NavLink to={item.links}
              onClick={() => setActive({header: false}, setHeader(item.name))}
              className={`header__link ${
                headerActive === item.name ? "active" : ""
              }`}
              key={idx}
            >
              {item.name}
            </NavLink>
          ) )}
            {moreLinks && <div
              className={`header__link more__link `}
              onClick={() => setActive({ header: !active.header })}
              >
              <span>
                More
                <PiCaretDownLight />
              </span>
              {active.header && (
                <div className="sub__links border bg-white py-1">
                  {moreLinks.map((item, idx) => (
                    <Link to={item.link} className="link d-block py-1 px-3" key={idx}>{item.name}</Link>
                  ))}
                </div>
              )}
            </div>}
      </div>
      {rightLinks && <div className="header__2  d-flex align-items-center gap-1 justify-content-end pe-3">
        <div onClick={() => setActive({ rightHeader: !active.rightHeader })}>
          <CiSettings className="icon fs-5"/>
          <PiCaretDownLight className="icon fs-5"/>
        </div>
        {active.rightHeader && <div className="header__2__links border py-1">
          {menuLinks.map((item, idx) => (
            <Link to={item.link} className="link px-3 py-2" key={idx}>
              {item.name}
            </Link>
          ))}
        </div>}
      </div>}
    </div>
  );
}

export default Header;
