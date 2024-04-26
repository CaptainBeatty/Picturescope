import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import "../../Styles/Card.css";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Card({ label, title, url }) {
    const navigate = useNavigate(); // Hook pour la navigation

    const handleDivClick = () => {
        navigate('/TextPage'); // Redirige vers la page DestinationPage
      };
    
    return (
        <div className='cardwrapper' onClick={handleDivClick}>
            <span>{label}</span>
            <img src={url} alt="freelance"/>
            <span>{title}</span>
        </div>
    )
}
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
Card.defaultProps = {
    label: '',
    title: '',
    url: DefaultPicture,
}
 
export default Card