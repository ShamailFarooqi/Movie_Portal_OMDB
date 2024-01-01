import React from "react";
import Image from "next/image";
import FavouriteIcon from "../favouriteIcon/FavouriteIcon";
import PopupDialog from "../popup/PopupDialog";
import styles from "./MovieList.module.css";

export default function MovieList(props){
console.log(props)
    return(
        <div>
            {props.movie.map((item)=>
            <div className={styles.imgContainer}>
                <Image src={item.Poster}  width={300} height={500} alt="images"/>
                <h1>{item.Title}</h1>
                <div className={styles.fav} >
                <FavouriteIcon />
                </div>
                    
                </div>)}
        </div>
    )
}