import React from 'react';
import { useNavigate } from 'react-router-dom';

const ModifyButton = ({ id }) => {
  const navigate = useNavigate();

  const handleModify = () => {
    navigate(`/modify/${id}`);
  };

  return (
    <button onClick={handleModify}>Modify</button>
  );
};

export default ModifyButton;
