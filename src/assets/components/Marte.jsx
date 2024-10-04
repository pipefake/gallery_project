import marte from '../imagenes/marte.jpg';
import PropTypes from 'prop-types';

export const Marte = ({className}) => {
  return (
     <img src={marte} alt="Imagen de sol" className={className}/>
  )
}

Marte.propTypes = {
    className : PropTypes.string
}
