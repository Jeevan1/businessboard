import React, { useState } from "react";
import "./Menu.scss";
import { Link, NavLink } from "react-router-dom";
import { menuItems } from "../../assets/AppsData";

function Menu({ menuname }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const activateMenu = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="menu border px-2">
      {menuItems.map((item, idx) => (
        <div
          className={`menu__items `}
          key={idx}
          onClick={() => activateMenu(idx)}
        >
          <Link
            to={`../${item.name.toLowerCase()}`}
            className={`link d-flex align-items-center py-2 px-3 ${activeIndex === idx ? 'active' : ''}`}
            style={{ outline: "none", color: item.color }}
          >
            <span className="menu__icon pe-4 fs-4">{item.icon}</span>
            {menuname && <span className="menu__name">{item.name}</span>}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Menu;
