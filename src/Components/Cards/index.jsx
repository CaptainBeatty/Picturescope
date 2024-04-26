import "../../Styles/Card.css";
import { useState, useEffect } from 'react'
import Card from '../../Components/Card'
import { Link } from 'react-router-dom';



function Cards() {

    const [picturesList, setPicturesList] = useState([])
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        async function fetchFreelances() {
            setDataLoading(true)
            try {
                const response = await fetch(`http://localhost:8000/pictures`)
                const { picturesList } = await response.json()
                setPicturesList(picturesList)
            }
            catch(err) {
                console.log('===== error =====', err)
                setError(true)
            }
            finally {
                setDataLoading(false)
            }
        }
        fetchFreelances()
    }, [])

    if (error) {
        return <span>Oups, il y eu un problème</span>
    }

    return (
        <div className="over">
            <h1>Mes clichés</h1>
            
            {isDataLoading ? (
                <div className="galery">
                    <p>Chargement en cours</p>
                </div>
        ) : (
            <div className="cards">
            {picturesList.map((profile, index) => (
                <Link to="/textpage" key={`${profile.title}-${index}`} style={{ textDecoration: 'none' }}>
                <Card
                  title={profile.title}
                  url={profile.url}
                />
              </Link>
            ))}
            </div>
        )}
            
        </div>
    )
}

export default Cards;