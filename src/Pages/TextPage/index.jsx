import React from "react";
import JSON from "../../JSON/Pictures.json";
import { useParams } from "react-router-dom";
import "../../Styles/GalleryPage.css"


function TextPage() {
  const { id } = useParams()
  const picture = JSON.find(item => item.id === id).url
    
    return (
        <div className="Picture">
            <div className="PictureTxt">
                <h1>Text from pictures</h1>
                <img src={picture} />
                <p>C'était une belle balade. Il y avait le soleil...et Ksenia.</p>
            </div>
        </div>
    )
}

export default TextPage 