import React from "react";
import "./Apps.scss";
import { menuItems } from "../../assets/AppsData";
import { Link } from "react-router-dom";

function Apps() {
  return (
    <div className="Apps border py-4">
      <div className="container w-75 pt-4  border bg-white">
        <div className="Apps__top d-flex flex-column">
          <strong className=" fs-4">
            Add or remove apps to fit OneUp to your business.
          </strong>
          <small className="py-1 text-secondary">
            Don’t worry, you can always add an app again after disabling it.
            Changing these settings{" "}
            <strong className="text-dark">will affect all users</strong>.
          </small>
        </div>
        <div className="Apps__content py-4">
          <h5 className="px-3 pb-4">Enabled Apps</h5>
          <div className="row px-4">
            {menuItems.map(
              (item, idx) =>
                item.active && (
                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="Apps__item d-flex flex-column text-center border  mb-4 px-3 pb-3"
                      key={idx}
                    >
                      <span style={{ color: item.color }}>{item.icon}</span>
                      <p className="" style={{ color: item.color }}>
                        {item.name}
                      </p>
                      <small className="py-3 text-secondary">{item.desc}</small>
                      <Link className="link border py-2">Disable</Link>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apps;
