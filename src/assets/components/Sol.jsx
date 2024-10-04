import sol from '../imagenes/sol.jpg';
import PropTypes from 'prop-types';

export const Sol = ({className}) => {
  return (
     <img src={sol} alt="Imagen de sol" className={className} />
  )
}

Sol.propTypes = {
  className: PropTypes.string
}