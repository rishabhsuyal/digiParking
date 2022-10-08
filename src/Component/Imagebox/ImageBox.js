import React from 'react';
import "./ImageBox.css";
import {Link} from 'react-router-dom';

function ImageBox({url,dimension,title}) {
  return (
    <>
    <div className="ImageBox" style={{width:`${dimension}px`,height:`${dimension}px`}}>
    <Link to={`/book/${title}`}>
    <img src={url} 
    width={dimension}
    height={dimension}
    alt="image"
    />
    </Link>
    <h1 className='font-bold m-4'>{title}</h1>
    </div>
    </>
  )
}

export default ImageBox