import { useEffect, useState } from 'react';

const UserEmail = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return (
    <div>
      {email ? `${email}` : 'Not logged in'}
    </div>
  );
};

export default UserEmail;
