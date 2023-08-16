import React from "react";
import "./ManageSubscription.scss";
import { Link } from "react-router-dom";

const subscription = [
  {
    id: 1,
    title: "SELF",
    price: "$9",
    duration: "MONTH",
    popular: false,
    numOfUser: "1",
    service: "Support via Email",
    link: "",
  },
  {
    id: 2,
    title: "PRO",
    price: "$19",
    duration: "MONTH",
    popular: false,
    numOfUser: "2",
    service: "1-on-1 Chat Support",
    link: "",
  },
  {
    id: 3,
    title: "PLUS",
    price: "$29",
    duration: "MONTH",
    popular: true,
    numOfUser: "3",
    service: "1-on-1 Chat Support",
    link: "",
  },
  {
    id: 4,
    title: "TEAM ",
    price: "$39",
    duration: "MONTH",
    popular: false,
    numOfUser: "4",
    service: "1-on-1 Chat Support",
    link: "",
  },
  {
    id: 5,
    title: "UNLIMITED",
    price: "$49",
    duration: "MONTH",
    popular: false,
    numOfUser: "Unlimited",
    service: "1-on-1 Chat Support",
    link: "",
  },
];
function ManageSubscription() {
  return (
    <div className="ManageSubscription w-100 shadow-sm ">
      <div className="container-fluid px-0 border my-3 shadow-sm py-4">
        <h6 className="ManageSubscription__title px-3 pb-3">
          Please choose a plan to continue using OneUp.
        </h6>
        <div className="ManageSubscription__plan px-3 mt-4">
          <div className="ManageSubscription__plan__items">
            {subscription.map((item, idx) => (
              <>
                <div
                  className="ManageSubscription__plan__item p-2 rounded-1"
                  key={item.id}
                  >
                  {item.popular &&<span className="popular py-2">POPULAR</span>}
                  <div>
                    <p className="title">{item.title}</p>
                  </div>
                  <hr />
                  <div>
                    <h4>{item.price}</h4>
                    <small>PER {item.duration}</small>
                  </div>
                  <hr />
                  <div>
                    <p className="user">{item.numOfUser} users</p>
                  </div>
                  <hr />
                  <div>
                    <p className="service">{item.service}</p>
                  </div>
                  <hr style={{ opacity: 0 }} />
                  <div>
                    <Link className="link py-1 rounded-1">Choose Plan</Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageSubscription;
