import React, { useEffect } from "react";
import axios from "axios";

import LogoutNavigation from "../components/navigation/LogoutNavigation";
import { useState } from "react";
import "./ForgetPassword.css";

export default function ForgetPassword() {
  const [msg, setmsg] = useState("");


  setInterval(()=>{
    // console.log("Aashish is god");

    const ele = document.getElementById('msgBox')

    if(ele.style.color != 'white'){
      ele.style.color = 'white'
    }else{
      ele.style.color = 'black'
    }
  }, 5000)

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const frm = document.getElementById("fm");
    const formData = new FormData(frm);

    try {
      const res = await axios
        .post(process.env.REACT_APP_API_CALL_ADDRESS + "/sendMail", formData)
        .then((res) => {
          return res.data;
        });
      console.log(res);

      setmsg(res.msg);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <LogoutNavigation />

      <div className="New_Pass">
        <h1 id="msgBox">{msg}</h1>
        <div className="recover_image">
          <img src={require("./recoverAcc.png")} alt="device image" />
        </div>
        <div className="Heading">
          <h1>We are so sorry that you forget your password.</h1>
          <h2>We are here to help you get access to your account wit seam</h2>
        </div>
        <div className="New_Pass_Form">
          <form onSubmit={handleFormSubmit} id="fm">
            <div className="email">
              <input type="email" placeholder="email" name="email" />
            </div>
            <div className="submit">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
