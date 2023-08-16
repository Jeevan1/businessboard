import React from "react";
import "./Signup.scss";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  return (
    <div className="signup pt-5">
      <div className="container ">
        <div className="row justify-content-between">
          <div className="signup__left px-5 d-flex flex-column gap-5 col-lg-6">
            <div className="signup__left__1 d-flex align-items-center justify-content-center">
              <Logo height={"55px"} />
            </div>
            <div className="signup__left__2">
              <p>
                Join 700,000+ business owners in 50 countries who use OneUp to
                automate accounting, inventory, invoicing and more, on any
                device at any time.
                <br /> <br />
                So you can focus on what you love.
              </p>
            </div>
            <div className="signup__left__3">
              <img src="./img/img/home_lap_mob.png" alt="home_lab_mob" />
            </div>
          </div>
          <div className="signup__right  col-lg-4 mb-0 px-0">
            <div className="signup__right__top bg-white border">
            <p className=" fw-bold text-center border-bottom w-100 pb-3 pt-3">
              SIGN UP
            </p>
            <form action="" className="py-1 px-5 ">
              <FormInput
                label={"Your Name"}
                type={"text"}
                placeholder={"First and Last Name"}
              />
              <FormInput
                label={"Company"}
                type={"text"}
                placeholder={"Your Company Name"}
              />
              <FormInput
                label={"Email"}
                type={"email"}
                placeholder={"you@email.com"}
              />
              <FormInput
                label={"Password"}
                type={"text"}
                placeholder={"Password"}
              />
              <div className="form-control">
                <label htmlFor="country">Country</label>
                <select name="country" className="w-100 ">
                  <option value="Nepal">Nepal</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Nepal">Nepal</option>
                </select>
              </div>
              <button type="submit" className="w-100 py-2 my-3 rounded-1">
                CREATE ACCOUNT
              </button>
              <p>
                By clicking Create account you agree to the{" "}
                <span>
                  <Link className="link">Terms of Service</Link>
                </span>{" "}
                and <Link className="link">Privacy</Link> policies.
              </p>
            </form>
            <div className="bottom text-center py-2 pb-3">
              <p className="py-1 ">
                or Sign up with one of our partners account
              </p>
              <div className="google rounded-1 bg-white d-flex justify-content-center gap-3 align-items-center py-2 mt-2">
                <FcGoogle className="logo" />
                <p>Sign in with Google</p>
              </div>
            </div>
            </div>
            <p className="signup__right__footer text-center pt-3 pb-2">
              Already have a OneUp account? 
              <Link to={'/login'} className="link"> Sign in.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
