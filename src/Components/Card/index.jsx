import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import "../../Styles/Card.css";

function Card({ label, title, url }) {
    return (
        <div className='cardwrapper'>
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