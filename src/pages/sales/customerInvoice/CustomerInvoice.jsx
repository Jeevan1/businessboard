import React, { useRef, useState } from "react";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CustomerInvoice.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function CustomerInvoice() {
  const [prevButtonContent, setPrevButtonContent] = useState("Previous");
  const [nextButtonContent, setNextButtonContent] = useState("Next");

  const handlePrevButtonClick = () => {
    // Customize the behavior of the previous button here, if needed.
    console.log("Previous button clicked!");
  };

  const handleNextButtonClick = () => {
    // Customize the behavior of the next button here, if needed.
    console.log("Next button clicked!");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
  };
  return (
    <div className="CustomerInvoice">
      <form action="" onSubmit={handleSubmit}>
      <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper border shadow-sm"
        >
          <SwiperSlide>
            <div className="CustomerInvoice__form">
              <h4>Do you want to add your logo?</h4>
              <div className="form__input companyName">
                <label htmlFor="name">Company Name</label>
                <input type="text" placeholder="SUGA" name="companyName" />
                <span>*</span>
              </div>
              <div className=" border-d d-flex gap-2 align-items-center chooseImg">
                <div className="form__input">
                  <MdOutlineCollectionsBookmark className="icon" />
                  <label htmlFor="file">
                    Drag and drop your logo here or
                    <p className=" text-primary">
                      Choose file from your device
                    </p>
                  </label>
                  <input type="file" name="image" />
                </div>
                <div className="w-50 px-3">
                  <p>
                    Your company logo will be used on quotes, invoices, and
                    other printable documents.
                  </p>
                  <small>
                    Recommended file types: .GIF, .PNG, or .JPG less than 1 MB.
                  </small>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="CustomerInvoice__form px-5">
              <h4>What is your company’s contact information?</h4>
              <p>
                This will be used on quotes, invoices, and other printable
                documents. If you don’t want to fill this out now, you can do it
                later in Company Settings.
              </p>
              <div>
                <div className="form__input">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    placeholder="Karhmandu"
                    name="companyName"
                  />
                  <span>*</span>
                </div>
              </div>
              <div>
                <div className="form__input">
                  <input type="text" placeholder="Line 2" name="address2" />
                </div>
              </div>
              <div className=" ">
                <div className="form__input">
                  <label htmlFor="address">City</label>
                  <input
                    type="text"
                    placeholder="Karhmandu"
                    name="companyName"
                  />
                  <span>*</span>
                </div>
                <div className="form__input">
                  <input
                    type="text"
                    placeholder="Post Code"
                    name="companyName"
                  />
                </div>
              </div>
              <div>
                <div className="form__input">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    placeholder="Karhmandu"
                    name="companyName"
                  />
                  <span>*</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="CustomerInvoice__form px-5">
              <h4>What is the information to put on the invoices?</h4>
              <p>
                Invoice numbers occur in a continuing sequence. What is the last
                Invoice number that you have sent a customer?
              </p>
              <div className=" ">
                <div className="form__input">
                  <label htmlFor="address">Invoice prefix</label>
                  <input
                    type="text"
                    placeholder="CINV-"
                    value={"CINV-"}
                    name="Invoiceprefix"
                  />
                  <span>*</span>
                </div>
                <div className="form__input">
                  <input
                    type="text"
                    placeholder="Post Code"
                    value={"001"}
                    name="companyName"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper__changer border-top">
            <div>
              {/* Previous Button */}
              <button onClick={handlePrevButtonClick}>
                {prevButtonContent}
              </button>

              {/* Next Button */}
              <button className="" onClick={handleNextButtonClick}>
                {nextButtonContent} 
              </button>
            </div>
          </div>
        </Swiper>
      </form>
    </div>
  );
}

export default CustomerInvoice;
