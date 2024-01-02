import React from "react";
import Image from "next/image";
import { useState } from "react";
import FavouriteIcon from "../favouriteIcon/FavouriteIcon";
import PopupDialog from "../popup/PopupDialog";
import styles from "./MovieList.module.css";
import MovieCard from "../movieCard/MovieCard";

export default function MovieList(props){
let [popUp,setPopUp]=useState(false);
let [favClick,setFavClick]=useState({})

const handleFav=(favorite)=>{
    setPopUp((pop)=>!pop)
    setFavClick((data)=>({...favorite}))
}

    return(
        <div>
            {props.movie.map((item)=>
            <div className={styles.imgContainer} >
                <MovieCard item={item} />
                <div className={styles.fav} onClick={()=>handleFav(item)} >
                <FavouriteIcon />
                </div>
                    
                </div>)}
                {popUp && <PopupDialog setHolder={setPopUp} favmovies={favClick} />}
        </div>
    )
}