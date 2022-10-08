import React from 'react';
import "./Block.css";
import {Link} from 'react-router-dom';


function Block({slot,loc}) {
  return (

    <Link to={`/payment/${loc}/${slot}`}>
    <div className='border-2 rounded-lg w-24 h-10 bg-green-500'>
        <h1 className='text-center mt-1'>{slot}</h1>
    </div>
    </Link>
  )
}

export default Block