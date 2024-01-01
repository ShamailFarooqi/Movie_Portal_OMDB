import React from "react";
import Popup from 'reactjs-popup'; 

export default function PopupDialog(){

    const togglePopup=()=>{
        console.log("hi there")
    }
    return(
        <div>
             <Popup trigger={<button> Click to open popup </button>}  
     position="right center"> 
      <div>GeeksforGeeks</div> 
      <button>Click here</button> 
    </Popup> 
            
        </div>
    )
}