import React, { useEffect, useState } from "react";
import ListPlan from "./ListPlan";
import "./AvailablePlanStyle.css";

export default function AvailablePlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const formInfo = {};
    async function handlefetch() {
      const dt = await fetch(
        process.env.REACT_APP_API_CALL_ADDRESS + "/availablePlan",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(formInfo),
        }
      )
        .then((res) => res.json())
        .then((dt) => {
          console.log(dt);
          return dt.msg;
        });

      // console.log(dt)
      const planss = [];
      dt.map((data) => {
        // console.log(data.planName)
        planss.push(data);
      });

      setPlans(planss);
    }

    handlefetch();
  }, []);

  return (
    <div className="main">
      <h1>Choose The Plan That's Right For You</h1>
      <div className="AvailablePlans">
        <div className="AvailablePlansContent">
          <label className="AvailablePlansLabel">
            <input
              type="text"
              name="radionam"
              value="whatever"
              className="AvailablePlanRadioBtn"
              disabled
            />
            <div className="AvailablePlansHeading">specs</div>
            <div className="AvailablePlanSpecs">Monthly Price</div>
            <div className="AvailablePlanSpecs">No. Of Devices you can use</div>
            <div className="AvailablePlanSpecs">Choose this plan</div>
            {/* <button className="SignUp">Choose this plan</button> */}
          </label>
        </div>
        {plans.map((plan) => (
          <ListPlan
            planName={plan.planName}
            monthlyPrice={plan.monthlyPrice}
            noOfDevice={plan.noOfDevice}
            key={plan._id}
          />
        ))}
      </div>
    </div>
  );
}
