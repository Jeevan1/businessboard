import React, { useState } from "react";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import {AiOutlineCloudDownload} from "react-icons/ai";
import "./ProductsAndServices.scss";
import NewProductService from "../newProductOrService/NewProductService";

const productsAndServices = [
  {
    id: 1,
    code: 23,
    name: 'Alu',
    desc: "Standard rate",
    desc2: "Standard ",
    sale_price: 20,
    purchase_price: 347,
    type: 'product',
    unit: 'abcs',
    family: 'Miscellaneous'
  },

];
function ProductsAndServices({view}) {
  const [newPS, setNewPS] = useState(false);
  return (
    <>
    <div className="ProductsAndServices">
      <div className="container w-75 mt-4 bg-white shadow-sm rounded px-0">
        <div className="ProductsAndServices__header">
          <h6 className="py-3">Products and Services</h6>
        </div>
      <div className="ProductsAndServices__top d-flex px-3 justify-content-end py-3 align-items-center">
        <button className=" rounded-1" onClick={() => setNewPS(true)}>New</button>
      </div>
      <div className="ProductsAndServices__search w-50 p-2 ms-3">
        <input type="text" placeholder="Search this list" />
      </div>
      <div className="ProductsAndServices__list px-3">
        <table>
          <thead>
            <tr >
              <th></th>
              <th className=" fw-bold">Product Code</th>
              <th className=" fw-bold">Name</th>
              <th className=" fw-bold">Description</th>
              <th className=" fw-bold">Sales Price</th>
              <th className=" fw-bold">Purchase Price</th>
              <th className=" fw-bold">Type</th>
              <th className=" fw-bold">Unit</th>
              <th className=" fw-bold">Product Family</th>
            </tr>
          </thead>
          <tbody>
            {productsAndServices.map((item, idx) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.sale_price}</td>
                <td>{item.purchase_price}</td>
                <td>{item.type}</td>
                <td>{item.unit}</td>
                <td>{item.family}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="ProductsAndServices__page py-5 px-3 d-flex justify-content-center align-items-center gap-2">
        <TbArrowBigLeft className="icon" />
        <TbArrowBigLeft className="icon" />
        <span>1-1 of 1</span>
        <TbArrowBigRight className="icon" />
        <TbArrowBigRight className="icon" />
      </div>
      <div className="ProductsAndServices__footer py-3 px-3">
        <button className="" onClick={() => view(false)}>Close</button>
        <button className="active" onClick={() => view(false)}>Select</button>
      </div>  
      </div>
    </div>
    {newPS && <NewProductService newPS = {setNewPS}/>}
    </>
  );
}

export default ProductsAndServices;
