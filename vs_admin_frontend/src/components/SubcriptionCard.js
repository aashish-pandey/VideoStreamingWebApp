import React from 'react'

export default function SubscriptionCard(props) {
  return (
   
<tr>
<td>{props.plan._id}</td>
<td>{props.plan.planName}</td>
<td>{props.plan.monthlyPrice}</td>
<td>{props.plan.noOfDevice}</td>
<td>{props.plan.releaseYear}</td>
<td>{props.plan.casts}</td>

</tr>
// quality
        
  )
}
