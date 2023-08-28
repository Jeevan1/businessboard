import React, { useState } from "react";
import "./VatReport.scss";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RxCross2, RxPlus } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function VatReport() {
  const [showFilter, setShowFIlter] = useState(false);
  const [add, setAdd] = useState(false);
  const [customPeriod, setCustomPeriod] = useState(false);
  const [content, setContent] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="VatReport">
      <div className="VatReport__header px-4 shadow-sm">
        <button
          type="button"
          className="px-3 rounded d-flex align-items-center"
          onClick={()=> navigate(-1)}
        >
          <MdOutlineKeyboardArrowLeft className="icon" />
          <span>Back</span>
        </button>
        <h5>Profit and Loss</h5>
      </div>
      {!content && <div className="VatReport__warning text-center mt-5">
        <p>
          You haven’t yet closed a tax period. Use{" "}
          <span className=" text-primary" onClick={() => setContent(true)}>Close a Tax Period</span> to close
          your first one.
        </p>
      </div>}
      { content && <div className="VatReport__content my-3 rounded">
        <div className="VatReport__content__header">
          <h6 className="py-3">From 01/01/2023 to 31/12/2023</h6>
          <div className="d-flex pb-3 justify-content-center">
            <div className="total__income">
              <p>NPR0</p>
              <small>TOTAL INCOME</small>
            </div>
            <div className="total__income">
              <p>NPR0</p>
              <small>TOTAL EXPENSE</small>
            </div>
            <div className="total__income">
              <p>NPR0</p>
              <small>TOTAL PROFIT</small>
            </div>
          </div>
        </div>
        <div className="VatReport__content__filter py-3">
          <div className="VatReport__content__filter__1 pt-3">
            <div>
              {!showFilter && (
                <button
                  className="bg-white px-2 py-2 border border-2 text-primary "
                  onClick={() => setShowFIlter(!showFilter)}
                >
                  Show Filters
                </button>
              )}
              {showFilter && (
                <button
                  className="bg-white px-2 py-2 border border-2 text-primary "
                  onClick={() => setShowFIlter(!showFilter)}
                >
                  Hide Filters
                </button>
              )}
            </div>
            <div>
              <button className="bg-primary px-2 py-2 border border-2 text-white">
                Download
                <span>
                  <MdOutlineKeyboardArrowLeft className="icon" />
                </span>
              </button>
            </div>
          </div>
          {showFilter && (
            <div className="VatReport__content__filter__2 shadow-sm px-3 mt-3">
              <div className="filter__modes py-3">
                <div className="mode">
                  <strong>Report Mode</strong>
                  <div>
                    <button>Summary</button>
                    <button className="active">Details</button>
                  </div>
                </div>
                <div className="mode">
                  <strong>Bank Activity Transactions</strong>
                  <div>
                    <select name="name" id="">
                      <option value="Exclude unreviewed transaction">
                        Exclude unreviewed transaction
                      </option>
                      <option value="Include unreviewed transaction">
                        Include unreviewed transaction
                      </option>
                    </select>
                  </div>
                </div>
                <div className="mode">
                  <strong>Views in Thousands</strong>
                  <div>
                    <button>Yes</button>
                    <button className="active">No</button>
                  </div>
                </div>
                <div className="mode">
                  <strong>Negative Format</strong>
                  <div>
                    <button className="active">Minus</button>
                    <button>Parenthesis</button>
                  </div>
                </div>
                <div className="mode">
                  <strong>Decimal Places</strong>
                  <div>
                    <button className="active">On</button>
                    <button className="">Off</button>
                  </div>
                </div>
              </div>
              <div className="filter__periods py-3">
                <strong className="">Periods</strong>
                <div className="item">
                  <p>01/01/2023-31/12/2023</p>
                  <RxCross2 className="icon" />
                </div>
                <div className="add__period" onClick={() => setAdd(!add)}>
                  <RxPlus className="icon" />
                  <p>Add Period</p>
                </div>
                {add && (
                  <div className="add">
                    <div className="container p-0">
                      <div className="p-2 px-2">
                        <p>Add Period</p>
                        <RxCross2 className="icon" onClick={() => setAdd(false)}/>
                      </div>
                      <form action="" className="pt-4">
                        <div className="">
                          <div className="d-flex justify-content-center gap-4 pb-4">
                            <label htmlFor="period">Accounting Period</label>
                            <select
                              name="period"
                              id=""
                              className=" border-bottom pb-1"
                              onChange={() => setCustomPeriod(!customPeriod)}
                            >
                              <option value="1">
                                From 01/01/2023 to 31/12/2023
                              </option>
                              <option value="2">Custom Period</option>
                            </select>
                          </div>
                          {customPeriod && <><div className="d-flex  justify-content-center gap-4 pb-4">
                            <label htmlFor="period">Start Date</label>
                            <input
                              type="date"
                              name="start_date"
                              placeholder=""
                            />
                          </div>
                          <div className="d-flex  justify-content-center gap-4 pb-4">
                            <label htmlFor="period">End Date</label>
                            <input
                              type="date"
                              name="end_date"
                              placeholder="End Date"
                            />
                          </div>
                          </>}
                        </div>
                        <div className="py-4 px-3 text-end footer">
                          <button className="py-2 px-3">Add</button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="GeneralLedger__content__data bg-white shadow-sm border">
          <div className="GeneralLedger__content__data__1  d-flex justify-content-between align-items-center">
            <table>
              <thead className="border-bottom py-3 px-3">
                <tr>
                  <td>VAT Rate</td>
                  <td>Sales</td>
                  <td>Purchases</td>
                  <td>VAT Collected</td>
                  <td>VAT Paid</td>
                </tr>
              </thead>
              <tbody className=" text-center py-1">
                
               <tr>
               <td className="text-primary">Not Reportable</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
               </tr>
               <tr>
               <td>Total</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
               </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> }
    </div>
  );
}

export default VatReport;
