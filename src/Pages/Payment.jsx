import React from 'react'
import { useParams } from 'react-router-dom';
import LocationHeading from '../Component/locationHeading/LocationHeading';
function Payment() {

    let { locationId,slotId } = useParams();  
    var str=`BOOKED AT ${locationId} ${slotId}`;
  return (
    <div>
        <LocationHeading head_text={str}/>
    </div>
  )
}

export default Payment