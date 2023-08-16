import React, { useEffect, useRef } from "react";
import { FcGoogle } from "react-icons/fc";

import "./Login.scss";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import Logo from "../../components/Logo";


function Login() {
  const set = useRef();
  useEffect(() => {
    // set.current.focus();
  })
  return (
    <div className="login ">
      <div className="container login__container">
        <div className="login__logo py-4 d-flex justify-content-center">
          <Logo height={'55px'}/>
        </div>
        <div className="login__body bg-white border">
          <p className="login__body__1 bg-white py-3 fw-bold border-bottom">
            SIGN IN
          </p>
          <form className="login__body__2 py-3">
            <FormInput
              label={"email"}
              type={"email"}
              placeholder={"you@email.com"}
              ref={set}
            />
            <FormInput
              label={"password"}
              type={"password"}
              placeholder={"Password"}
            />
            <Link to="/recovery" className="link py-1">
              Forget your password?
            </Link>
            <button type="none" className="py-2 mb-1 rounded-1 mt-2">
              SIGN IN
            </button>
          </form>
          <div className="login__body__3 py-3">
            <p className="mb-2 text-secondary">or Sign in with Google</p>
            <div className="google rounded-1 bg-white d-flex justify-content-center gap-3 align-items-center py">
              <FcGoogle className="logo" />
              <p>Sign in with Google</p>
            </div>
          </div>
        </div>
        <div className="login__footer py-3 d-flex flex-column gap-3">
          <p className=" text-center text-secondary">
            Don't have an account? <Link to={"/signup"}>Sign up now</Link>
          </p>
          <hr className="" />
          <p className=" text-center text-secondary">
            OneUp is also avaliable on
          </p>
          <div className="container d-flex justify-content-center gap-3">
            <img src="./img/logo/playstore.png" alt="playstore" />
            <img src="./img/logo/chromestore.png" alt="playstore" />
          </div>
          <div className=" d-flex gap-2 justify-content-center bottom">
            <p>Support</p>
            <p>Terms of use</p>
            <p>Privacy policy</p>
            <p className=" text-center">© 2023 OneUp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
