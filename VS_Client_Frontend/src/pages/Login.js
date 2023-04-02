import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import LogoutNavigation from "../components/navigation/LogoutNavigation";
import useCookies from "react-cookie/cjs/useCookies";

export default function Login() {
  const [errMsg, setErrMsg] = useState();
  const [cookies, setCookies] = useCookies(["user"]);
  const navigate = useNavigate();

  const handleRedirectSignup = () => {
    navigate("/");
  };

  const handleLogin = async (e) => {
    console.log(process.env.REACT_APP_API_CALL_ADDRESS);

    e.preventDefault();

    var uemail = e.target[0].value;
    var upass = e.target[1].value;

    console.log(uemail + upass);

    const loginInfo = {
      uemail: uemail,
      upass: upass,
    };

    var error_status = await fetch(
      process.env.REACT_APP_API_CALL_ADDRESS + "/login",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(loginInfo),
      }
    )
      .then((res) => res.json())
      .then((dt) => {
        console.log(dt);
        return dt;
      });

    console.log(error_status);
    setErrMsg();
    if (error_status.err.toString() == "false") {
      setCookies("uemail", uemail);
      setCookies("loginStatus", "true");
      navigate("/home");
    } else {
      setErrMsg(error_status.msg.toString());
    }
  };

  return (
    <div>
      <LogoutNavigation />
      <div className="Landing2">
        <div className="LandingItems">
          {errMsg}

          <h1>Welcome to the login Page</h1>
          <form onSubmit={handleLogin} className="SetPasswordForm">
            <div className="Input">
              <label htmlFor="uemail">Enter your email:</label>
              <br />
              <input type="email" name="uemail" />
              <br />
            </div>
            <div className="Input">
              <label htmlFor="upass">Enter your password:</label>
              <br />
              <input type="password" name="upass" /> <br />
            </div>

            <input type="submit" value="login" className="SetPasswordBtn" />
          </form>

          <div>
            <button
              className="forgetPassBtn"
              onClick={() => {
                navigate("/forgetPassword");
              }}
            >
              forget Password
            </button>
          </div>

          <div>
            <span>
              New to JaalChitra?{" "}
              <button
                className="UseAnotherEmail"
                onClick={handleRedirectSignup}
              >
                Sign up Now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
