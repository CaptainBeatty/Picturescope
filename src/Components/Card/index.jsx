import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import "../../Styles/Card.css";
import { useNavigate } from 'react-router-dom';

function Card({ title, url }) {
    const navigate = useNavigate(); // Hook pour la navigation

    const handleDivClick = () => {
        navigate('/TextPage'); // Redirige vers la page DestinationPage
      };
    
    return (
        <div className='cardwrapper' onClick={handleDivClick}>
            <img src={url} alt="freelance"/>
            <span>{title}</span>
        </div>
    )
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
Card.defaultProps = {
    title: '',
    url: DefaultPicture,
}
 
export default Card