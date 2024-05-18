import React, { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';

const DeleteImgBtn = () => {
  const { id } = useParams();
  const navigate = useNavigate ();
  const [entry, setEntry] = useState(null);

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

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8000/pictures/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        navigate('/');
      } else {
        console.error('Failed to delete entry');
      }
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  if (!entry) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteImgBtn;
