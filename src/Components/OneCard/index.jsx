import React from "react";
import { useParams } from "react-router-dom";
import JSON from "../../JSON/Pictures.json";


function OneCard () {
    const idPicture = useParams();
    console.log(idPicture.id);
    const myPicture = JSON.find((element)=> element.id === idPicture.id);
    console.log(myPicture);
    const logName = myPicture.title;
    const logPicture = myPicture.url;
    return (
        <div className="hosts">
                <section>
                    <h1> { logName }</h1>
                    <img src = { logPicture } alt = {  logName  } />
                </section>
        </div> 
    )
}

export default OneCard;