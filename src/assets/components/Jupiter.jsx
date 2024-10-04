import jupiter from '../imagenes/jupiter.jpg';
import PropTypes from 'prop-types';

export const Jupiter = ({className}) => {
  return (
     <img src={jupiter} alt="Imagen de jupiter" className={className} />
  )
}

Jupiter.propTypes = {
    className : PropTypes.string
}
