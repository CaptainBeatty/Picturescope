import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { email, password };

    try {
      const response = await fetch('http://localhost:8000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const result = await response.json();
        alert('User registered successfully!');
        console.log('Token:', result.token); // Vous pouvez stocker le token dans le stockage local ou dans l'état
        // Stocker le token dans le stockage local
        localStorage.setItem('token', result.token);
        setEmail('');
        setPassword('');
        navigate('/loginpage');
        // Recharger la page pour mettre à jour l'affichage
        window.location.reload();
      } else {
        const result = await response.json();
        alert('Failed to register user: ' + result.msg);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error registering user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
