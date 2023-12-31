import React from "react";
import JSON from "../../JSON/Pictures.json";
import { useParams } from "react-router-dom";
import Cards from "../../Components/Cards";
//import "../../Styles/GalleryPage.css"


function TextPage() {
  const { id } = useParams()
  const picture = JSON.find(item => item.id === id).url
    
    return (
        <div className="App">
            <h1>Text from pictures</h1>
            <img src={picture} />
        </div>
    )
}

export default TextPage 