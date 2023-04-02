import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import LogoutNavigation from "../components/navigation/LogoutNavigation";
import getCookies from "./CookieHandler";
import useCookies from "react-cookie/cjs/useCookies";
import "./styleSheet/SetPasswordStyle.css";

const Login = require("./Login");

export default function SetPassword() {
  const [uemail, setUemail] = useState("a@b.c");
  const [cookies, setCookies] = useCookies(["user"]);

  const [errMsg, setErrMsg] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setUemail(getCookies("utemail"));
  }, [uemail]);

  const handleSetPassword = async (e) => {
    e.preventDefault();
    var email = e.target[0].value;
    var pass = e.target[1].value;

    console.log(email + pass);

    const formInfo = {
      uemail: email,
      upass: pass,
    };

    var error_status = await fetch(
      process.env.REACT_APP_API_CALL_ADDRESS + "/register",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formInfo),
      }
    )
      .then((res) => res.json())
      .then((dt) => {
        var sid = "";
        if (dt.sessionId) sid = dt.sessionId;
        setCookies("sessionId", sid);
        localStorage.setItem("sessionId", sid);
        console.log(sid);
        console.log(dt);
        return dt.err;
      });

    setErrMsg();
    if (error_status.toString() == "false") {
      var error_status = await fetch(
        process.env.REACT_APP_API_CALL_ADDRESS + "/login",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(formInfo),
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
        setCookies("loginStatus", "true");
        setCookies("uemail", email);
        navigate("/home");
      } else {
        setErrMsg(error_status.msg.toString());
      }
    } else {
      setErrMsg("Registration is unsuccessful!!Something went wrong");
    }
  };

  return (
    <div>
      <LogoutNavigation />

      <div className="Landing2">
        <div className="LandingItems">
          <img src={require("./landing2Hero.png")} alt="device image" />
          <div>
            Hi, <span className="showEmail">{uemail}</span>
          </div>

          <div className="FinishMsg">Finish Setting up your account</div>

          <div className="ErrorMsg">{errMsg}</div>

          <form onSubmit={handleSetPassword} className="SetPasswordForm">
            <div className="Input">
              Enter your Email:
              <br />
              <input type="email" name="uemail" value={uemail} disabled />
            </div>

            <div className="Input">
              Enter your Password:
              <br />
              <input type="password" name="upass" />
            </div>

            <input
              type="submit"
              value="Set Password"
              className="SetPasswordBtn"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
