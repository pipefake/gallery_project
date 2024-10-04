import tierra from '../imagenes/tierra.jpg';
import PropTypes from 'prop-types';

export const Tierra = ({className}) => {
  return (
     <img src={tierra} alt="Imagen de Tierra" className={className}/>
  )
}

Tierra.propTypes = {
    className : PropTypes.string
}
