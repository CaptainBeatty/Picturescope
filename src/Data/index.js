import { useState, useEffect } from 'react'
import Card from '../Components/Card'


function Data() {

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
        <div>
            <div>Trouvez votre prestataire</div>
            <div>Chez Shiny nous réunissons les meilleurs profils pour vous.</div>
            {isDataLoading ? (
                <div>
                    <p>Chargement en cours</p>
                </div>
        ) : (
            <div>
            {picturesList.map((profile, index) => (
                <Card
                key={`${profile.title}-${index}`}
                title={profile.title}
                picture={profile.url}
                
            />
            ))}
            </div>
        )}
            
        </div>
    )
}

export default Data;