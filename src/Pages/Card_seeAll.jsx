import React from 'react'
import { Link } from 'react-router-dom';

import styles from './Card_seeAll.module.css';

const Card = ({ banner_image_url="https://www.shutterstock.com/image-photo/noida-india-february-25-2022-love-2129118320", movie_name = "Wonder Women"
    , movie_genre = [{
        "genre": "Action"
       },
       {
        "genre": "Adventure"
       },
       {
        "genre": "Fantasy"
        }], _id }) => {
            //const history = useHistory();
            const handleChange = () => {
               // history.push(`/movies/${_id}`)
            }
    return (
        <div className={styles.card}> 
        <Link to={`/book/location`} state={{ movie_name: "Location",
    cinemas_name: "Location",
    date: "11/11/2001",
    time: "11:50",}}>
            <img src={banner_image_url} alt={movie_name} />
            <div className={styles.title}>{ movie_name }</div>
            <div className={styles.genre}>{movie_genre?.map((genre, index)=>index === movie_genre.length-1?genre.genre:genre.genre + "/")}</div>
        </Link>
        </div>
    )
}

export default Card
