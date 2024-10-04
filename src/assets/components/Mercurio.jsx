import mercurio from '../imagenes/mercurio.jpg';
import PropTypes from 'prop-types';

export const Mercurio = ({className}) => {
  return (
     <img src={mercurio} alt="Imagen de Mercurio" className={className}/>
  )
}

Mercurio.propTypes = {
    className : PropTypes.string
}
