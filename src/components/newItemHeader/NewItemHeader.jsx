import React from "react";
import {
    MdOutlineKeyboardArrowLeft,
  } from "react-icons/md";

  import "./NewItemHeader.scss";
import { useNavigate } from "react-router-dom";

function NewItemHeader({name}) {
  const navigate = useNavigate();
  return (
    <div className="header px-4 shadow-sm">
      <button type="button" className="px-3 rounded d-flex align-items-center" onClick={() => navigate(-1)}>
        <MdOutlineKeyboardArrowLeft className="icon" />
        <span>Back</span>
      </button>
      <h5>{name}</h5>
    </div>
  );
}

export default NewItemHeader;
