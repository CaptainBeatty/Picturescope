import React, { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';

const DeletePutImg = () => {
  const { id } = useParams();
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [device, setDevice] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

   useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('authToken');
      

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
        setUrl(responseData.url);
        setTitle(responseData.title);
        setDescription(responseData.description);
        setDevice(responseData.device);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('authToken');

    if (!token) {
      setError('Token non trouvé');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/pictures/${id}`, {
        method: 'PUT', // or 'PATCH' if you only want to update specific fields
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          url,
          title,
          description,
          device
        })
      });

      if (!response.ok) {
        throw new Error('Erreur de la requête');
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      setError('Token non trouvé');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/pictures/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Erreur de la requête', alert('Erreur lors de la suppression'));
      }

      setData(null); // Clear data after deletion
      alert('Objet supprimé avec succès');
      navigate('/');
        // Recharger la page pour mettre à jour l'affichage
      window.location.reload();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
      {data && <div>Réponse: {JSON.stringify(data)}</div>}
      {error && <div>Erreur: {error}</div>}
    </div>
  );
};

export default DeletePutImg;
