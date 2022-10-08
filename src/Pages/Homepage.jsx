import React from 'react';
import useGeoLocation from '../Component/Location/useGeoLocation';
import GoogleMaps from '../Component/GoogleMap/GoogleMap';
import PopularPlaces from '../Component/PopularPlaces/PopularPlaces';
import {Link} from 'react-router-dom';

function Homepage() {
    const location=useGeoLocation();
  return (
    <div>
        {
          location.loaded?
          <div className='relative'>
          <GoogleMaps lat={location.coordinates.lat} long={location.coordinates.lng}
          />
          <div className='absolute top-1 left-1'>
          <Link to="live">
          <button className='bg-white p-2 rounded-lg font-bold tracking-wider'>Watch Live </button>
          </Link>
          </div>
          
          </div>
          :"MODULE BROKEN"
        }
        <PopularPlaces/>
    </div>
  )
}

export default Homepage