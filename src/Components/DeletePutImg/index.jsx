import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeletePutImg = () => {
  const { id } = useParams();
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [device, setDevice] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
        setError('Utilisateur non connecté');
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
        setUrl(responseData.url);
        setTitle(responseData.title);
        setDescription(responseData.description);
        setDevice(responseData.device);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

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
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  

  const isCreator = picture  && picture.userId === userId;
  

  if (isCreator){
    return (
        <button
          onClick={handleDelete}
        >
          Delete
        </button>
      )
      
    } else if (!isConnected) {
      return (
        <button disabled style={{ backgroundColor: 'grey' }}>
        Delete
      </button>
      )
    } else {
        return (
          <button disabled style={{ backgroundColor: 'grey' }}>
          Delete
        </button>
        );
      }
};

export default DeletePutImg;
