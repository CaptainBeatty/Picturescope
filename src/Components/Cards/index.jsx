import "../../Styles/Card.css";
// import { useState, useEffect } from 'react'
import Card from '../../Components/Card'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Cards = () => {
  const [entries, setEntries] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchEntries = async () => {
        setDataLoading(true)
      try {
        const response = await fetch('http://localhost:8000/pictures');
        const data = await response.json();
        setEntries(data);
      } catch (error) {
        console.log('===== error =====', error)
                setError(true)
      }
      finally {setDataLoading(false)}
    };

    fetchEntries();
  }, []);
  if (error) {return <span>Oups, il y eu un problème</span>}

  return (
    <div className="over">
           <h1>Mes clichés</h1>
            
            {isDataLoading ? (
                <div className="galery">
                    <p>Chargement en cours</p>
                </div>
        ) : (
            <div className="cards">
            {entries?.map((entry, index) => (
                <Link ey={index} to={`/textpage/${entry._id}`}>
                <Card
                  title={entry.title}
                  url={entry.url}
                />
              </Link>
        )   )}
            </div>
        )}
            
     </div>
    
  );
};

export default Cards;