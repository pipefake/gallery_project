import { Link } from 'react-router-dom';
import { Jupiter } from './Jupiter'
import { Marte } from './Marte'
import { Mercurio } from './Mercurio'
import { Tierra } from './Tierra'
import { Venus } from './Venus'
import {Sol} from './Sol'

export const Navigation = ({className}) => {
  return (
    <div className='container thubnail_container mt-2'>
        <Link to="/sol" className='links' >
            <figure className="thumbnail-image-size">
                <Sol/>
                <figcaption>
                    Sol
                </figcaption>
            </figure>
        </Link>
        <Link to="/jupiter" className='links' >
            <figure className="thumbnail-image-size">
                <Jupiter/>
                <figcaption>
                    Jupiter
                </figcaption>
            </figure>
        </Link>
        <Link to="/marte" className='links' >
            <figure className="thumbnail-image-size">
                <Marte/>
                <figcaption>
                    Marte
                </figcaption>
            </figure>
        </Link>
        <Link to="/mercurio" className='links' >
            <figure className="thumbnail-image-size">
                <Mercurio/>
                <figcaption>
                    Mercurio
                </figcaption>
            </figure>
        </Link>
        <Link to="/tierra" className='links' >
            <figure className="thumbnail-image-size">
                <Tierra/>
                <figcaption>
                    Tierra
                </figcaption>
            </figure>
        </Link>
        <Link to="/venus" className='links' >
            <figure className="thumbnail-image-size">
                <Venus/>
                <figcaption>
                    Venus
                </figcaption>
            </figure>
        </Link>



    </div>
  )
}
