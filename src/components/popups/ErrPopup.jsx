import React from "react";
import "./Style.scss";

function ErrPopup({setError}) {
  return (
    <div className="Popup">
      <div className="popup__container row justify-content-center mt-4 ">
        <div className="col col-lg-5 rounded shadow bg-white px-0 overflow-hidden">
        <div className="popup__header text-center py-3">
          <strong>Error</strong>
        </div>
        <div className="popup__message px-3 d-flex align-items-center">
          <small>
            Please correct or cancel invalid field(s) then try again.
          </small>
        </div>
        <div className="popup__footer text-end py-3 px-3">
            <button className=" rounded border active px-3 py-2" onClick={() => setError()}>Ok</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ErrPopup;
