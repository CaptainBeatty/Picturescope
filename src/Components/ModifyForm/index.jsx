import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../../Styles/ModifyPage.css";

const ModifyForm = () => {
  const { id } = useParams();
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [device, setDevice] = useState('');
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchEntry = async () => {
      const token = localStorage.getItem('authToken');
      const userId = localStorage.getItem('userId');
      

      if (!token || !userId) {
        setError("Une erreur s'est produite");
        return;
      }
      try {
        const response = await fetch(`http://localhost:8000/pictures/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            
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
  
      fetchEntry();
    }, [id]);
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');

    if (!token || !userId)  {
      setError("Une erreur s'est produite");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/pictures/${id}`, {
        method: 'PUT', // or 'PATCH' if you only want to update specific fields
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          
        },
        body: JSON.stringify({
          url,
          title,
          description,
          device,
          userId // Ajoute userId au body

        })
      });

      if (!response.ok) {
        throw new Error('Erreur de la requête', alert('Erreur lors de la modification'));
      }

      const responseData = await response.json();
      setData(responseData);
      alert('Objet modifié avec succès');
      navigate('/');
        // Recharger la page pour mettre à jour l'affichage
        window.location.reload();
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div>
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" required />
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" required />
      <input type="text" value={device} onChange={(e) => setDevice(e.target.value)} placeholder="Enter device" required />
      <button type="submit">Modify</button>
    </form>
    {data && <div>Réponse: {JSON.stringify(data)}</div>}
    {error && <div>Erreur: {error}</div>}
    </div>
  );
};

export default ModifyForm;
