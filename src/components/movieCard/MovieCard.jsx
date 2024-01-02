import React from "react";
import Image from "next/image";
export default function MovieCard(props){
    return(
        <div>
            <Image src={props.item.Poster}  width={300} height={500} alt="images"/>
                <h1>{props.item.Title}</h1>
                
        </div>
    )
}