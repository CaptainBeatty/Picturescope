import { Link } from "react-router-dom";
import JSON from "../../JSON/Pictures.json";
import "../../Styles/Card.css";
import { useState, useEffect } from 'react'


function Cards() {

    const [cardsList, setCards] = useState([])
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchCards() {
            setDataLoading(true)
            try {
                const response = await fetch(`http://localhost:8000/freelances`)
                const { cardsList } = await response.json()
                setCards(cardsList)
            }
            catch(err) {
                console.log('===== error =====', err)
                setError(true)
            }
            finally {
                setDataLoading(false)
            }
        }
        fetchCards()
    }, [])

    if (error) {
        return <span>Oups, il y eu un problème</span>
    }

    return (
        <div className="cards">
            {cardsList.map ((profile, index) => (
                <div>
                key={`${profile.name}-${index}`}
                label={profile.job}
                picture={profile.picture}
                title={profile.name}
                </div>
            ))}
        </div> 
    )
}


export default Cards;