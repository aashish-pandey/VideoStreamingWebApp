import React, { useState } from "react";
import { useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import getCookies from "./CookieHandler";
import GetMyIp from "../helperFunctions/GetMyIp";
import "./styleSheet/profileStylesheet.css";

export default function Profile() {
  const [personalDetails, setPersonalDetails] = useState([]);
  const [subscriptionDetails, setSubscriptionDetails] = useState([]);
  const [planDetails, setPlanDetails] = useState([]);
  const [loginHistory, setLoginHistory] = useState([]);

  useEffect(() => {
    var email = getCookies("uemail");
    if (typeof email == "undefined") email = "";
    async function getProfile() {
      var profile = await fetch(
        process.env.REACT_APP_API_CALL_ADDRESS + "/getMyProfile/" + email
      )
        .then((res) => res.json())
        .then((dt) => {
          console.log(dt.msg);
          if (dt.err == false) setPersonalDetails(dt.msg);

          return dt.msg;
        });
    }

    async function getPlan(name) {
      await fetch(
        process.env.REACT_APP_API_CALL_ADDRESS +
          "/getSubscriptionPlanByName/" +
          name
      )
        .then((res) => res.json())
        .then((dt) => {
          console.log(dt);
          if (dt.err == false) {
            setPlanDetails(dt.msg);
          }
        });
    }

    async function getSubscription() {
      await fetch(
        process.env.REACT_APP_API_CALL_ADDRESS + "/getMySubscription/" + email
      )
        .then((res) => res.json())
        .then((dt) => {
          console.log(dt.msg);

          if (dt.err == false) {
            setSubscriptionDetails(dt.msg);
            async function helper() {
              await getPlan(dt.msg[0].activePlan);
            }
            helper();
          }
        });
    }

    async function getLoginHistory() {
      await fetch(
        process.env.REACT_APP_API_CALL_ADDRESS +
          "/accountLoginHistories/" +
          email
      )
        .then((res) => res.json())
        .then((dt) => {
          console.log(dt.msg);
          if (dt.err == false) {
            setLoginHistory(dt.msg);
          }
        });
    }

    getProfile();
    getSubscription();
    getLoginHistory();
  }, []);

  const SetCurrentNetworkAsMyHomeNetwork = async function () {
    console.log("Set as current ip");

    var currentIp = await GetMyIp();
    console.log(currentIp);
    var email = getCookies("uemail");

    const formInfo = {
      email: email,
      ip: currentIp,
    };

    await fetch(process.env.REACT_APP_API_CALL_ADDRESS + "/setHomeAddress", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formInfo),
    })
      .then((res) => res.json())
      .then((dt) => {
        console.log(dt);
      });
  };

  return (
    <div className="profileMainPage">
      <Navigation />

      <div className="profileMain">
        <h3>Personal Details</h3>
        <hr />

        <div>
          <strong>Email Address: </strong>
          {personalDetails.length > 0 && personalDetails[0].uemail}
          <br></br>
          <strong>Password: </strong>
          {personalDetails.length > 0 && personalDetails[0].upassword}
          <br />
          <strong>Home Address: </strong>
          {personalDetails.length > 0 && personalDetails[0].HomeIpAddress}
          <button onClick={SetCurrentNetworkAsMyHomeNetwork}>
            Add current network as my home network
          </button>
          <br />
          <strong>Created At: </strong>
          {personalDetails.length > 0 && personalDetails[0].createdAt}
        </div>
        <hr />
        <hr />
        <h3>Subscription Details</h3>
        <hr />

        <div>
          <strong>Active Plan Name: </strong>
          {subscriptionDetails.length > 0 && subscriptionDetails[0].activePlan}
          <br></br>
          <strong>No of Devices:</strong>
          {planDetails.length > 0 && planDetails[0].noOfDevice}
          <br></br>
          <strong>Monthly Charge: </strong>
          {planDetails.length > 0 && planDetails[0].monthlyPrice}
        </div>

        <hr />
        <hr />

        <h3>Account Login History</h3>
        <hr />
        <div>
          {loginHistory.map((logins) => {
            return (
              <div key={logins._id}>
                <strong>Active Status: </strong>
                {logins.active}
                <br></br>
                <strong>Ip Address: </strong>
                {logins.ip}
                <br></br>
                <strong>Operating System: </strong>
                {logins.os}
                <br></br>
                <strong>Device: </strong>
                {logins.device}
                <br></br>
                <strong>Browser: </strong>
                {logins.browser}
                <br></br>
                <strong>Last Online: </strong>
                {logins.updatedAt}
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
