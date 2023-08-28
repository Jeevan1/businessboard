import React, { useState } from "react";
import "./Menu.scss";
import { Link, NavLink } from "react-router-dom";
import { menuItems } from "../../assets/AppsData";

function MobileMenu({ mobileMenu, setMobileMenu }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const activateMenu = (index) => {
    setActiveIndex(index);
  };
  
  return (
   <>
    {mobileMenu && (<div className="mobile__menu border px-2">
      <div>
      {menuItems.map((item, idx) => (
        <div
          className={`mobile__menu__items `}
          key={idx}
          onClick={() => {activateMenu(idx), setMobileMenu()}}
        >
          <Link
            to={`../${item.name.toLowerCase()}`}
            className={`link d-flex align-items-center py-2 px-3 ${activeIndex === idx ? 'active' : ''}`}
            style={{ outline: "none", color: item.color }}
          >
            <span className="mobile__menu__icon pe-4 fs-4">{item.icon}</span>
            {<span className="mobile__menu__name">{item.name}</span>}
          </Link>
        </div>
      ))}
      </div>
    </div>)}
   </>
  );
}

export default MobileMenu;
