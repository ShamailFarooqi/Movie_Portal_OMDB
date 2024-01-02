import React from "react";
import styles from "./moviecard.module.css"
export default function MovieCard(props){
    return(
        <div className={styles.movie}>
            <img className={styles.images} src={props.item.Poster !== "N/A" ? props.item.Poster: "/background.jpg"}  width={300} height={500} alt="images"/>
                <h1>{props.item.Title}</h1>
                
        </div>
    )
}