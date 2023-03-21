import { Link } from 'react-router-dom';
import './styles.scss';

function Card({ character }) {
  const { name, species, image, id } = character;
  return (
    <div className="card-container">
      <Link to={`/${id}`}>
        <img alt={name} src={image} />
        <h2>{name}</h2>
        <p>{species}</p>
      </Link>
    </div>
  );
}

export default Card;
