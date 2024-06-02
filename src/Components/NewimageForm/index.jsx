import React, { useState } from 'react';


const NewimageForm = () => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [device, setDevice] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');

    if (!token || !userId)  {
      setError("Une erreur s'est produite");
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/pictures', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-User-Id': userId
        },
        body: JSON.stringify({
          url,
          title,
          description,
          device,
          userId
        })
      });

      if (!response.ok) {
        throw new Error('Erreur de la requête', alert('Erreur lors de la création'));
      }

      const responseData = await response.json();
      setData(responseData);
      setUrl('');
      setTitle('');
      setDescription('');
      setDevice('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>URL:</label>
          <input 
            type="text" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Device:</label>
          <input 
            type="text" 
            value={device} 
            onChange={(e) => setDevice(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Enregistrer</button>
      </form>
      {data && <div>Réponse: {JSON.stringify(data)}</div>}
      {error && <div>Erreur: {error}</div>}
    </div>
  );
};


export default NewimageForm;
