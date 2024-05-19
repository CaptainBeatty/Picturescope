import React, { useState } from 'react';
import "../../Styles/NewimagePage.css"

const NewimageForm = () => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [device, setDevice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ici, nous utilisons JSON pour envoyer les données, ce qui est approprié pour les données textuelles.
    const data = {
      url: url,
      title: title,
      description: description,
      device: device
    };

    fetch('http://localhost:8000/pictures', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Details uploaded successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error uploading details');
    });
  };

  return (
    
      <form onSubmit={handleSubmit} className='form'>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" />
        <input type="text" value={device} onChange={(e) => setDevice(e.target.value)} placeholder="Enter device" />
        <button type="submit">Add image</button>
      </form>
    
  );
};

export default NewimageForm;
