import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../../Styles/ModifyPage.css";

const ModifyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [device, setDevice] = useState('');

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await fetch(`http://localhost:8000/pictures/${id}`);
        const data = await response.json();
        setUrl(data.url);
        setTitle(data.title);
        setDescription(data.description);
        setDevice(data.device);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEntry();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { url, title, description, device };

    try {
      const response = await fetch(`http://localhost:8000/pictures/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert('Details updated successfully!');
        navigate(`/`);
      } else {
        alert('Failed to update details');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error updating details');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" required />
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" required />
      <input type="text" value={device} onChange={(e) => setDevice(e.target.value)} placeholder="Enter device" required />
      <button type="submit">Modify</button>
    </form>
  );
};

export default ModifyForm;
