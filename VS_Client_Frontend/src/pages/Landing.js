import React, { useEffect } from "react";
import { useState } from "react";
import Cookies from "react-cookie/cjs/Cookies";
import useCookies from "react-cookie/cjs/useCookies";
import { useNavigate } from "react-router-dom";
import LogoutNavigation from "../components/navigation/LogoutNavigation";
import "./styleSheet/LandingStyle.css";

export default function Landing() {
  const [uemail, setUemail] = useState("");
  const [cookies, setCookies] = useCookies(["user"]);

  const navigate = useNavigate();

  function getCookies(cookie_name) {
    let cookie_value = "";
    try {
      if (document.cookie.length > 1) {
        var ck_array = document.cookie.split(";");

        ck_array.map((mp) => {
          var ck_key = "";
          var i = 0;

          while (mp[i] != "=" && (mp[i] != " " || i == 0)) {
            if (mp[i] != " ") ck_key += mp[i];
            i++;
          }

          if (ck_key == cookie_name) {
            cookie_value = decodeURIComponent(mp.substring(i + 1));
          }
        });
      }
    } catch (err) {}

    return cookie_value;
  }

  const handle = (e) => {
    e.preventDefault();

    const uemail = e.target[0].value;

    setCookies("utemail", uemail);
    setUemail(uemail);

    //   navigate('/setPassword')
  };

  const handleChangeEmail = () => {
    let d = new Date();
    d.setTime(d.getTime() - 10 * 60 * 1000);
    setCookies("utemail", "", { expires: d });
    setUemail("");
  };

  const handleCompleteAuthentication = () => {
    if (uemail != "") navigate("/setPassword");
  };

  useEffect(() => {
    setCookies("loginStatus", "false");
    setUemail(getCookies("utemail"));
    if (uemail == "") {
      let r = getCookies("utemail");
      setUemail(r);
    }
  }, [uemail]);

  if (uemail == "")
    return (
      <>
        <LogoutNavigation />
        <div className="Landing">
          <section className="HeroSection">
            <div className="HeroMsg">
              Unlimited And High Quality
              <br />
              Movies in one place
              <br />
            </div>

            <span className="SupportMsg">
              We provide what you suggest
              <br />
            </span>
          </section>

          <form onSubmit={handle} className="EmailForm">
            <input
              type="email"
              name="uemail"
              placeholder="Email Address"
              className="Email"
            />

            <input type="submit" value="Join Now" className="Submit" />
          </form>
        </div>
      </>
    );
  else {
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

            <div>Create a password to watch on any device at any time</div>

            <button
              onClick={handleCompleteAuthentication}
              className="NextButton"
            >
              Next
            </button>
            <button onClick={handleChangeEmail} className="UseAnotherEmail">
              Use Another Email address
            </button>
          </div>
        </div>
      </div>
    );
  }
}
