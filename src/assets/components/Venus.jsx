import venus from '../imagenes/venus.jpg';
import PropTypes from 'prop-types';

export const Venus = ({className}) => {
  return (
     <img src={venus} alt="Imagen de sol" className={className}/>
  )
}

Venus.propTypes = {
    className : PropTypes.string
}
