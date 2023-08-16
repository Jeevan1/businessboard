import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

import "./AutoInventory.scss";
import { InputForm, InputOption } from "../addCustomer/InputForm";
import NewItemHeader from "../newItemHeader/NewItemHeader";

function AutoInventory() {
  return (
    <div className="AutoInventory">
      <NewItemHeader name={'Automatic Inventory Generator'}/>
      <div className="AutoInventory__content p-3 rounded">
        <div className="AutoInventory__content__1 p-3 rounded-1">
          <p>
            <span>Automatic Inventory Ordering</span> helps you maintain stock
            levels for each product. OneUp has detected the products below are
            forecasted to go below their reorder point.
          </p>
          <br />
          <p>
            Verify the suggested reorder amounts, and choose the preferred
            supplier to order from. Click <span>Done</span> and OneUp will
            automatically generate your purchase orders.
          </p>
          <br />
          <p>
            Then, view each purchase order in{" "}
            <span>Purchasing {">"} Purchase Orders</span> and mail or email them
            to your suppliers.
          </p>
        </div>
        <table className="w-100">
          <thead className="">
            <tr className="py-0 my-0">
              <th>Product</th>
              <th>Qty On Hand</th>
              <th>Sales Order</th>
              <th>Purchase Order</th>
              <th>Forecast. Qty On Hand</th>
              <th>Minimum Stock Qty</th>
              <th>Qty to Order</th>
              <th>Supplier</th>
            </tr>
          </thead>
        </table>
        <p className="w-100 p-2 text-secondary">No items to show</p>
        <div className="d-flex gap-2 mt-3 buttons">
          <button className="text-primary d-flex align-items-center py-2 px-3 gap-1 border rounded-1 ">
            <TiTick />
            <span>Check All</span>
          </button>
          <button className="text-primary d-flex align-items-center py-2 px-3 gap-1 border rounded-1 ">
            <RxCross2 />
            <span>Uncheck All</span>
          </button>
        </div>
      </div>
      <div className="AutoInventory__footer">
       <div>
       <button className="text-primary d-flex align-items-center py-2 px-3 gap-1 border rounded-1 ">
          <TiTick />
          <span>Cancel</span>
        </button>
        <button className="text-primary d-flex align-items-center py-2 px-3 gap-1 border rounded-1 bg-primary text-white">
          <RxCross2 />
          <span>Done</span>
        </button>
       </div>
      </div>
    </div>
  );
}

export default AutoInventory;
