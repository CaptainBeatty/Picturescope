import JSON from "../../JSON/Pictures.json";
import { useParams } from "react-router-dom";
import "../../Styles/TextPage.css"


function TextPage() {
  const { id } = useParams()
  const picture = JSON.find(item => item.id === id).url
  const title = JSON.find(item => item.id === id).title
  const description = JSON.find(item => item.id === id).description
  const device = JSON.find(item => item.id === id).device
    
    return (
        <div className="Picture">
            <div className="PictureTxt">
                <h1>{title}</h1>
                <img src={picture} alt="Landscape"/>
                <p>{description}<br/>{device}</p>
                
            </div>
        </div>
    )
}

export default TextPage 