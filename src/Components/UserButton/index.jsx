import { useState, useEffect } from 'react';

const UserButton = ({ Id }) => {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      setUserId(userId);

      if (!token) {
        setError('Token non trouvé');
        return;
      }

      try {
        const response = await fetch(`http://localhost:8000/pictures/${Id}`, {
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
  }, [Id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const isCreator = picture.userId === userId;

  return (
    <div>
      <button disabled={!isCreator} style={{ backgroundColor: !isCreator ? 'grey' : 'blue' }}>
        Edit Picture
      </button>
    </div>
  );
};

export default UserButton;
