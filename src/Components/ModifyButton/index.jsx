import { useNavigate } from 'react-router-dom';

import  { useState, useEffect } from 'react';


const ModifyButton = ({ id }) => {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('authToken');
      const userId = localStorage.getItem('userId');
      setUserId(userId);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const isCreator = picture.userId === userId;
  
  const handleModify = () => {
    navigate(`/modify/${id}`);
  };
  

  return (
    <button
      onClick={handleModify}
      // disabled={!isCreator}
      style={{ backgroundColor: !isCreator ? 'grey' : 'blue', cursor: !isCreator ? 'not-allowed' : 'pointer' }}
    >
      Modify
    </button>
  );
};

export default ModifyButton;
