import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import "./NewItemFooter.scss";

function NewItemFooter({ name,newPS }) {
  return (
    <div className="footer px-4 shadow-lg py-2">
      <div>
        <button type="button" className="" onClick={() => newPS(false)}>Cancel</button>
        <button className="">Done</button>
      </div>
    </div>
  );
}

export default NewItemFooter;
