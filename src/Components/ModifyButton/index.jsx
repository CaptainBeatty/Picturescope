import { useNavigate } from 'react-router-dom';

import  { useState, useEffect } from 'react';


const ModifyButton = ({ id }) => {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('authToken');
      const userId = localStorage.getItem('userId');
      setUserId(userId);
      setIsConnected(!!token);

      if (!token) {
        setError('Token non trouvé');
        return;
      }

      try {
        const response = await fetch(`http://localhost:8000/pictures/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Erreur de la requête');
        }

        const responseData = await response.json();
        setPicture(responseData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const isCreator = picture  && picture.userId === userId;
  
  const handleModify = () => {
    navigate(`/modify/${id}`);
  };

  if (isCreator){
  return (
      <button
        onClick={handleModify}
      >
        Modify
      </button>
    )
  } else if (!isConnected) {
    return (
      <button disabled style={{ backgroundColor: 'grey' }}>
      Modify
    </button>
    )
  }else {
      return (
        <button disabled style={{ backgroundColor: 'grey' }}>
        Modify
      </button>
      );
    }
};

export default ModifyButton;
