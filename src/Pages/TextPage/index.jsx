import "../../Styles/TextPage.css"
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DeletePutImg from '../../Components/DeletePutImg'
import BackButton from '../../Components/BackButton';
import ModifyButton from '../../Components/ModifyButton';

  const TextPage = () => {
    const { id } = useParams();
    const [entry, setEntry] = useState(null);
    const navigate = useNavigate ();
  
    useEffect(() => {
      const fetchEntry = async () => {
        const token = localStorage.getItem('authToken');
        try {
          const response = await fetch(`http://localhost:8000/pictures/${id}`,{
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
            });
          const data = await response.json();
          setEntry(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchEntry();
    }, [id]);

    
  
    if (!entry) return <div className="loader">Loading...</div>;
  
    return (
      <div className="textpage">
        <div className="Picture" >
           <img src={entry.url} alt={entry.description} />
        </div>
        <div className="description" >
          <h1>{entry.title}</h1>
          <h2>Description:</h2>
          <p> {entry.description}</p>
          <h2>Device:</h2>
          <p> {entry.device}</p>
          <div>
            <BackButton />
            <ModifyButton id={id} />
            <DeletePutImg/>
          </div>
        </div>
      </div>
    );
  };
export default TextPage 