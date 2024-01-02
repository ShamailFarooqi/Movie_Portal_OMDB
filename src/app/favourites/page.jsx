"use client"
import React from "react";
import style from "./page.module.css"
import RatingStars from "@/components/ratingStars/RatingStars";
import { useEffect , useState} from "react";
import MovieCard from "@/components/movieCard/MovieCard";
import RemoveIcon from "@/components/removeIcon/RemoveIcon";


export default function Favourites(){

    const [favourites, setFavourites] = useState([])
    const removeFavHandle=(movie)=>{
        const filteredFav=favourites.filter((fav)=>
                (fav.imdbID !== movie.imdbID) )
        setFavourites(filteredFav)
        localStorage.setItem('movie-favourites', JSON.stringify(filteredFav))
    }

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('movie-favourites')
        );

        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    }, []);
    return(
        <div className={style.container}>
            {favourites.map((fav)=>(
                <div key={fav.imdbID} className={style.imgContainer}>
                <MovieCard item={fav}/>
                <div>
                <RatingStars value={fav.rating} />
                </div>
                <p>Comments - {fav.comments}</p>
                <div className={style.remove} onClick={()=>removeFavHandle(fav)}>
                <RemoveIcon />
                </div> 
                </div>))}
          
        </div>
    )
}