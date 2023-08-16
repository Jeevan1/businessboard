import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

import "./ImportLeads.scss";
import NewItemHeader from "../newItemHeader/NewItemHeader";

function ImportLeads() {

  return (
    <div className="ImportLeads">
      <NewItemHeader name={'Import Leads'}/>
      <div className="ImportLeads__form rounded shadow-sm p-3">
        <form action="" className="">
          <div className="ImportLeads__form__1 border px-3 py-1 rounded">
            <p>OneUp requires your customer list to be in a special format.</p>
            <p><a href="#">Use this guide</a> to prepare your customer list for importing.</p>
          </div>
            <div className="ImportLeads__form__2 px-5 pt-4 pb-2">
                <label htmlFor="file">File to import</label>
                <div className="">
                    <input type="file" name="import_leads"/>
                    <span className="border">Upload Files</span>
                </div>
            </div>
          <div className="ImportLeads__form__submit px-4 shadow-lg py-2">
            <div>
              <button className="">Cancel</button>
              <button className="">Done</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ImportLeads;
