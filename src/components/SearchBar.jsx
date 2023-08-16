import React, { useState,useRef,useEffect } from "react";
import { BsFillSearchHeartFill, BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./SearchBar.scss";

function SearchBar({ width, style, ref, placeholder }) {
  const [show, setShow] = useState(false);
  const divRef = [
    useRef(null),
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickOutside = divRef.every(
        (divReff) => !divReff.current || !divReff.current.contains(event.target)
      );

      if (isClickOutside) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="SearchBar"
      style={{ width: width, margin: "auto" }}
      ref={ref}
    >
      <form
        className={` d-flex align-items-center  py-2 ${style}`} ref={divRef[0]}
        onClick={() => setShow(true)}
      >
        <BsSearch className="icon mx-2 fs-6" />
        <input
          type="text"
          className={`border-0 w-100 `}
          placeholder={placeholder}
          name="data"
          style={{
            outline: "none",
            fontSize: "13px",
            background: "transparent",
          }}
        />
      </form>
      {show && (
        <div className="nav-links d-flex flex-column py-1 shadow">
          <p>Actions</p>
          <NavLink to={'/sales/costumer'} className={"link text-dark"}>Customers</NavLink>
          <NavLink to={'/opportunities'} className={"link text-dark"}>Opportunities</NavLink>
          <NavLink to={'/sales/quotes'} className={"link text-dark"}>Quotes</NavLink>
          <NavLink to={'/leads'} className={"link text-dark"}>Leads</NavLink>
          <NavLink className={"link text-dark"}>Sales Orders</NavLink>
          <NavLink to={'/sales/invoice'} className={"link text-dark"}>Invoices</NavLink>
          <NavLink to={'/expenses'} className={"link text-dark"}>Expenses</NavLink>
          <NavLink to={'/inventory/purchase_order'} className={"link text-dark"}>Purchase Orders</NavLink>
          <NavLink to={'/purchasing'} className={"link text-dark"}>Suppliers</NavLink>
          <NavLink to={'/company_setting'} className={"link text-dark"}>Company Settings</NavLink>
          <NavLink to={'/calls'} className={"link text-dark"}>Calls</NavLink>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
