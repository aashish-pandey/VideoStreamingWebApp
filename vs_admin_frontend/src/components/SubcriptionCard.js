import React from 'react'
import { BiEditAlt } from 'react-icons/bi';
import {RiDeleteBin3Fill } from 'react-icons/ri';

import { IconContext } from "react-icons";
export default function SubscriptionCard(props) {
  return (
   
<tr>
<td>{props.plan._id}</td>
<td>{props.plan.planName}</td>
<td>{props.plan.monthlyPrice}</td>
<td>{props.plan.noOfDevice}</td>

  

  
{/* <span onClick={()=>{console.log("Button clicked")}}>

<IconContext.Provider value={{ color: "green"  }} >
  <BiEditAlt></BiEditAlt>
</IconContext.Provider>


</span> */}


{/* <span onClick={()=>{console.log("Button clicked")}}> */}
{/* <IconContext.Provider value={{ color: "green"  }} > */}
  {/* <RiDeleteBin3Fill></RiDeleteBin3Fill> */}
{/* </IconContext.Provider> */}
{/* </span> */}


</tr>
// quality
        
  )
}
