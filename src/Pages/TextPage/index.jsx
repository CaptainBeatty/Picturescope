import "../../Styles/TextPage.css"
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DeleteImgBtn from '../../Components/DeleteImgBtn'

  const TextPage = () => {
    const { id } = useParams();
    const [entry, setEntry] = useState(null);
    const history = useNavigate ();
  
    useEffect(() => {
      const fetchEntry = async () => {
        try {
          const response = await fetch(`http://localhost:8000/pictures/${id}`);
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
      <div>
        <div className="Picture" >
           <img src={entry.url} alt={entry.description} />
        </div>
        <DeleteImgBtn/>
      </div>
    );
  };
export default TextPage 