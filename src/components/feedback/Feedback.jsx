import React, { useState } from "react";
import "./Feedback.scss";
import SearchBar from "../SearchBar";
import { HiArrowSmLeft, HiMinusSm } from "react-icons/hi";
import { MdAttachFile } from "react-icons/md";
import { Link } from "react-router-dom";
import FormInput from "../FormInput";

const topSuggestions = [
  {
    id: 1,
    title: "Sales Dashboard",
    link: "./",
  },
  {
    id: 2,
    title: "Sales FAQ",
    link: "./",
  },
  {
    id: 3,
    title: "Inventory FAQ",
    link: "./",
  },
];

function Feedback({ hide }) {
  const [showForm, setShowFOrm] = useState(false);
  return (
    <div className="feedback border rounded-3 overflow-hidden">
      <div className={`feedback__1  px-4 ${showForm ? "py-3" : "py-3"}`}>
        <h6 className={`text-white text-center ${showForm ? "p-0" : "pb-3"}`}>
          Feedback
        </h6>
        {!showForm && (
          <SearchBar
            placeholder={"How can we help?"}
            style={" border bg-white h-100"}
          />
        )}
        <HiMinusSm
          className="text-white hide-icon"
          onClick={() => hide(false)}
        />
        {showForm && (
          <HiArrowSmLeft
            className="text-white back-icon"
            onClick={() => setShowFOrm(false)}
          />
        )}
      </div>
      {!showForm && (
        <div className="feedback__2 px-3">
          <strong className="px-3">Top suggestions</strong>
          <ol>
            {topSuggestions.map((item, idx) => (
              <li className="py-1">
                <Link to={item.link} className="list">
                  {item.title}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}
      {showForm && (
        <div className="feedback__2 py-2 me-1">
          <form action="">
            <div className="px-3">
              <label htmlFor="name">
                Your Name<span>(optional)</span>
              </label>
              <FormInput placeholder={"Jeevan Shrestha"} />
            </div>
            <div className="px-3">
              <label htmlFor="name">Email address</label>
              <FormInput placeholder={"abc@gmail.com"} />
            </div>
            <div className="px-3">
              <label htmlFor="name" className="pb-2">
                How can we help you?
              </label>
              <textarea
                className="w-100"
                name=""
                id=""
                cols=""
                rows="4"
              ></textarea>
            </div>
            <div className="px-3 attachments pb-4">
              <label htmlFor="Attachment">Attachments</label>
              <div className=" rounded">
                <MdAttachFile className='icon p-2 '/>
                <span>Attach file</span>
                <input type="file" name="file" />
              </div>
            </div>
            <div className="form__footer border-top px-3 py-2">
              <p>zendesk</p>
              <button className="px-3 py-1 rounded">Leave us a message</button>
            </div>
          </form>
        </div>
      )}
      {!showForm && (
        <div className="feedback__3 border-top px-3 py-2">
          <p>zendesk</p>
          <button
            className="px-3 py-1 rounded"
            onClick={() => setShowFOrm(!showForm)}
          >
            Leave us a message
          </button>
        </div>
      )}
    </div>
  );
}

export default Feedback;
