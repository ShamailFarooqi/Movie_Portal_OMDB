"use client"
import React from "react";
import { useState, useEffect } from "react";


export default function PopupDialog(props){

    const [reviewData, setReviewData] = useState({rating:"", comments:""});
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('movie-favourites')
        );

        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    }, []);

    const checkMovieData = (currentMovie, check)=>{
        return currentMovie.imdbID !==check
    }

    const saveToLocalStorage = (items) => {
        props.setHolder(false)

        if(favourites.every((val)=>checkMovieData(val, items.imdbID))){
            const newFavouriteList = [...favourites, {...items, ...reviewData}]
            localStorage.setItem('movie-favourites', JSON.stringify(newFavouriteList))
        }

        else{
            console.log("already added")
        }
    };

    const handleChange = (evt) =>{
        setReviewData({...reviewData, [evt.target.name]:evt.target.value,})
    }

    return(
            <div
              className="fixed z-10 inset-0 overflow-y-auto"
              id="error-modal"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 bg-gray-500/10 bg-opacity-75 transition-opacity"
                  aria-hidden="true"
                ></div>
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Rating
                      </h3>
                      <div className="mt-2">
                        <input
                         type="text"
                         className="text-sm text-gray-500"
                         name="comments"
                         value={reviewData.comments}
                         onChange={(evt)=>handleChange(evt)}/>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={()=>saveToLocalStorage(props.favmovies)}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
       

