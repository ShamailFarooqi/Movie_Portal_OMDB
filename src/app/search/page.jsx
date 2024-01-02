"use client"
import React from "react";
import { useState,useEffect } from "react";
import style from "./page.module.css"
import MovieList from "@/components/movieList/MovieList";

export default function Search(){
    let[searchTerm,setSearchTerm]=useState("")
    let[fetchValue,setFetchValue]=useState([])
    let[searchFinalValue, setSearchFinalvalue] = useState("")
    
    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?apikey=3de33c73&s=${searchFinalValue}`)
        .then((data)=>{return data.json()})
        .then((val)=>  {
            if(val.Search){
            setFetchValue(val.Search)}})
        .catch(()=>{
            return "there is an error in ur data"
        })
    },[searchFinalValue])
    
    return(
        <div className={style.container}>
            <div className={style.search}>
            <input type="text"
            className={style.input}
             value={searchTerm}
              placeholder="Search Movies On The Go"
              onChange={(e)=>setSearchTerm(e.target.value)} />

            <button onClick={()=>setSearchFinalvalue(searchTerm)}>Search</button>
            </div>

            <MovieList movie={fetchValue}/>

        </div>
    )
}