import React from "react";
import Header from "../../../components/header/Header";
import { useMenuItemContext } from "../../../components/context/Context";
import "./BankAccount.scss";

function BankAccount() {
  const links = useMenuItemContext();
  const ownLinks = links[5].subLinks;
  const menuLinks = links[5].menuLinks;
  const rightLinks = ownLinks[0].subLinks;
  const moreLinks = links[5].moreLinks;
  return (
    <div className="BankAccount">
      <div className="container px-0">
        <Header
          data={ownLinks}
          rightLinks={rightLinks}
          moreLinks={moreLinks}
          menuLinks={menuLinks}
        />
        <div className="">
            <div className="BankAccount__content py-5 w-100 m-auto">
                <div className="BankAccount__content__1  border shadow bg-white mt-4">
                    <h4 className="p-3 fw-bold">Connect Bank Account</h4>
                    <form action="">
                        <p className="border-bottom py-2">Select how you want to import your transactions</p>
                        <div className="form-control my-3 py-3">
                            <input type="radio" name="bank" />
                            <div>
                                <span>Connect your bank now</span>
                                <small>Connect instantly to your bank. We will take care of automatically importing all your transactions.</small>
                            </div>
                        </div>
                        <div className="form-control my-3 py-3">
                            <input type="radio" name="bank" />
                            <div>
                                <span>Upload statements manually</span>
                                <small>Connect instantly to your bank. We will take care of automatically importing all your transactions.</small>
                            </div>
                        </div>
                        <div className="BankAccount__content__1__footer border-top p-2 text-end">
                            <button type="button" className="py-1 px-3 border rounded-1">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BankAccount;
