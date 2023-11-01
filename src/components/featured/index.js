import React from "react";

import Carrosel from "./Carrosel";


const Featured = () =>{
    return(
        <div className="featured_container">
            <Carrosel/>
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
        </div>
    )
}

export default Featured;