import React, { useState } from "react";
import "./Style.scss";

function RequestArchive({ setPopup }) {
  const [more, setMore] = useState(false);
  return (
    <div className="Popup">
      <div className="popup__container row justify-content-center mt-4 ">
        <div className="col col-lg-5 rounded shadow bg-white px-0 overflow-hidden">
          <form action="">
            <div className="popup__header text-center py-3">
              <strong>Error</strong>
            </div>
            <div className="popup__message px-3 d-flex py-3 align-items-center flex-column">
              <small >
                A link to the account archive will be emailed to the account
                owner at jersj1986@gmail.com when the archive is ready to
                download
              </small>
              <div className="form-input border overflow-hidden">
                <label htmlFor="Accounting">Accounting Period</label>
                <select className="border rounded" id="" onChange={(e) =>e.target.value==='2'? setMore(true) : setMore(false)} >
                  <option value={1}>From 01/01/2023 to 02/03/2023</option>
                  <option value={2} >Custom Period</option>
                </select>
              </div>
              {more && (
                <>
                  <div className="form-input border overflow-hidden">
                    {/* <label htmlFor="Accounting">Accounting Period</label> */}
                    <input type="date" name="start_date" />
                  </div>
                  <div className="form-input border overflow-hidden">
                    {/* <label htmlFor="Accounting">Accounting Period</label> */}
                    <input type="date" name="end_date" />
                  </div>
                </>
              )}
              <div className="form-control  border-0 d-flex align-items-center justify-content-start text-start gap-0">
                <input type="checkbox" name="include" className="" />
                <small className=" w-100">
                  Include all uploaded attachments
                </small>
              </div>
            </div>
            <div className="popup__footer text-end d-flex justify-content-end gap-2 py-3 px-3">
              <button
                type="button"
                className=" rounded border px-3 py-2"
                onClick={() => setPopup({ requestArchive: false })}
              >
                Cancel
              </button>
              <button
                type="button"
                className=" rounded border px-3 py-2 active"
                onClick={() => setPopup({ requestArchive: false })}
              >
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestArchive;
