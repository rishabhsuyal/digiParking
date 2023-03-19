import React from 'react';
import "./ImageBox.css";
import {Link} from 'react-router-dom';

function ImageBox({url,dimension,title}) {
  const movie_detail={
    movie_name: title,
    cinemas_name: title,
    date: "Tomorrow",
    time: "11:50",
  }
  return (
    <>
    <div className="ImageBox" style={{width:`${dimension}px`,height:`${dimension}px`}}>

    <Link to={`/book/${title}`} state={{ movie_name: title,
    cinemas_name: title,
    date: "11/11/2001",
    time: "11:50",}}>
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